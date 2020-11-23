// @refresh reset

// States
import React, { useState, useEffect, useCallback } from 'react'
// Chat API
import { GiftedChat } from 'react-native-gifted-chat'
// Local Storage
import AsyncStorage from '@react-native-community/async-storage'
// Component Imports
import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
// Firebase
import * as firebase from 'firebase'
import 'firebase/firestore'
// expo install react-native-gifted-chat @react-native-community/async-storage firebase

// config from firebase
const firebaseConfig = {
    apiKey: "AIzaSyCyZNdoMTX3QbLVPv61ghTGOySrZFT_-IQ",
    authDomain: "react-native-chat-clone.firebaseapp.com",
    databaseURL: "https://react-native-chat-clone.firebaseio.com",
    projectId: "react-native-chat-clone",
    storageBucket: "react-native-chat-clone.appspot.com",
    messagingSenderId: "46662215093",
    appId: "1:46662215093:web:f388eceaaf95a66238a5fc",
    measurementId: "G-GXMJ24FSFC"
};

// This is to avoid error
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
    // firebase.analytics();
}

// This is a bug na samok karon sa react native android
YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])


// accessing firebase database
const db = firebase.firestore()
// creating db collection or table
const chatsRef = db.collection('chats')

// mao nani ang para mudagan ang app
export default function App() {

    // Initialization area, dira na mag gamit ug use state
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])
    // Ang use state kay first naa siyay variable then ang sunod kay function
    // para ma change ang value sa variable

    // kani tong sa database na bali diri tong gina kuha ang mga data sa firebase
    // ang purpose By using this Hook, you tell React that your component needs 
    // to do something after render
    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    // Kani tong hook na ang purpose of this callback function is to change a piece of the state 
    // that is a part of the parent component
    const appendMessages = useCallback(
        (messages) => {
            // as we can see gina append niya ang component na giftedchat sa both prev and pres messages
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        // tapos diri need na ihatag ang array/state
        [messages]
    )

    // Async functions always return a promise
    // Ang promise kay kanang 
    // A Promise object is simply a wrapper around a value that may or may not 
    // be known when the object is instantiated and provides a method for handling 
    // the value after it is known (also known as resolved ) or 
    // is unavailable for a failure reason (we'll refer to this as rejected ).

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }
    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    // diri kay ge kuha na niya ang mga data na naa didto sa promise or values
    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    // diria tan awon sa program if wala bay user
    // if wala then mag ask siya for name
    if (!user) {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
                <Button onPress={handlePress} title="Enter the chat" />
            </View>
        )
    }
    // if naa mag return siya atong mga past messages
    return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

// tapos diri styles nani diri
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})

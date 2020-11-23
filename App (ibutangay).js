import React, { Component, useState, useEffect, useCallback } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Right,
  Body,
  Icon,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Badge,
} from 'native-base';
import ChatsScreen from './screens/chats';
import StatusScreen from './screens/status';
import CallsScreen from './screens/calls';
import { StatusBar } from 'react-native';
import appStyles from './appStyles';
import SettingsScreen from './screens/settings';

// import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, TextInput, View, YellowBox } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'

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

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics();
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#075E54');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>WhatsApp</Title>
          </Body>
          <Right>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="more-vert" />
            </Button>
          </Right>
        </Header>
        <Tabs
          tabContainerStyle={{
            elevation: 0,
          }}
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}
          tabBarActiveTextColor="red"
          initialPage={3}
          tabBarBackgroundColor="#075E54">
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#075E54' }}>
                <Icon type="MaterialIcons" name="photo-camera" />
              </TabHeading>
            }>
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                flex: 1,
              }}>
              Camera Screen
            </Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#075E54' }}>
                <Text style={appStyles.tabsText}>CHATS</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>2</Text>
                </Badge>
              </TabHeading>
            }>
            <ChatsScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#075E54' }}>
                <Text style={appStyles.tabsText}>STATUS</Text>
              </TabHeading>
            }>
            <StatusScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#075E54' }}>
                <Text style={appStyles.tabsText}>CALLS</Text>
              </TabHeading>
            }>
            <CallsScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#075E54' }}>
                <Text style={appStyles.tabsText}>SETTINGS</Text>
              </TabHeading>
            }>
            <SettingsScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
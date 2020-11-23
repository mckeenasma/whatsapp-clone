import React, { Component } from 'react';
import {
    ListItem,
    Left,
    Thumbnail,
    Body,
    Right,
    Content,
    Text,
    Badge,
    Container,
    Fab,
    Icon,
} from 'native-base';
import { TouchableWithoutFeedback } from 'react-native'
import appStyles from '../appStyles';
import { useNavigation } from '@react-navigation/native'



export default class ChatScreen extends Component {
    render() {
        // const navigation = useNavigation()

        const onClick = () => {
            console.warn('Barcelo\'s message in the messaging app!')
            // navigation.navigate('chatUI')
        }
        return (

            <Container>
                <Content>
                    <TouchableWithoutFeedback onPress={onClick}>
                        <ListItem avatar
                        >
                            <Left>
                                <Thumbnail
                                    source={{
                                        uri:
                                            'https://www.clipartkey.com/mpngs/m/71-711465_flat-faces-icons-circle-woman-7-vet-simpel.png',
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text>Barcelo</Text>
                                <Text note>How are you Mckeen?</Text>
                            </Body>
                            <Right>
                                <Text note style={{ color: '#25D366' }}>
                                    3:43 pm
              </Text>
                                <Badge style={appStyles.badgeChats}>
                                    <Text style={appStyles.badgeTextChats}>1</Text>
                                </Badge>
                            </Right>
                        </ListItem>
                    </TouchableWithoutFeedback>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri:
                                        'https://www.clipartkey.com/mpngs/m/71-711465_flat-faces-icons-circle-woman-7-vet-simpel.png',
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>Fernandez</Text>
                            <Text note>How are you Mckeen?</Text>
                        </Body>
                        <Right>
                            <Text note style={{ color: '#25D366' }}>
                                3:43 pm
              </Text>
                            <Badge style={appStyles.badgeChats}>
                                <Text style={appStyles.badgeTextChats}>4</Text>
                            </Badge>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri:
                                        'https://www.clipartkey.com/mpngs/m/71-711465_flat-faces-icons-circle-woman-7-vet-simpel.png',
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>Alpas</Text>
                            <Text note>How are you Mckeen?</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri:
                                        'https://www.clipartkey.com/mpngs/m/71-711465_flat-faces-icons-circle-woman-7-vet-simpel.png',
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>Avila</Text>
                            <Text note>How are you Mckeen?</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri:
                                        'https://www.clipartkey.com/mpngs/m/71-711465_flat-faces-icons-circle-woman-7-vet-simpel.png',
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>Patlonag</Text>
                            <Text note>How are you Mckeen?</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                </Content>
                <Fab style={appStyles.fabColor} position="bottomRight">
                    <Icon type="MaterialIcons" name="chat" />
                </Fab>
            </Container >

        );
    }
}
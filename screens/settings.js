import React, { Component } from 'react';
import {
    ListItem,
    Left,
    Thumbnail,
    Body,
    Content,
    Text,
    Container,
    Fab,
    Icon,
    Button,
    Separator,
} from 'native-base';
import appStyles from '../appStyles';
import { View } from 'react-native';
export default class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    render() {
        return (
            <Container>
                <Content>
                    <ListItem avatar noBorder>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri:
                                        'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.0-9/117343162_2805536456333252_2525690564492939630_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=DlVs3Ee2vVoAX9loaGZ&_nc_ht=scontent.fcgy1-1.fna&oh=1eb92b3541211a887862258841c61c7b&oe=5FE0F3E7',
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>Mckeen Asma</Text>
                            <Text note>Urgent Calls Only</Text>
                        </Body>
                    </ListItem>
                    <Separator style={{ marginTop: 15, height: 1 }}></Separator>
                    <ListItem icon noBorder style={{ marginTop: 20 }}>
                        <Left>
                            <Button transparent>
                                <Icon
                                    type="MaterialIcons"
                                    name="vpn-key"
                                    style={{ color: '#128C7E', opacity: 0.6 }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Account</Text>
                            <Text note>Privacy, security, change number</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder style={{ marginTop: 20 }}>
                        <Left>
                            <Button transparent>
                                <Icon
                                    type="MaterialIcons"
                                    name="chat"
                                    style={{ color: '#128C7E', opacity: 0.6 }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Chats</Text>
                            <Text note>Theme, wallpapers, chat history</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder style={{ marginTop: 20 }}>
                        <Left>
                            <Button transparent>
                                <Icon
                                    type="MaterialIcons"
                                    name="notifications"
                                    style={{ color: '#128C7E', opacity: 0.6 }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Notifications</Text>
                            <Text note>Message, group & call tones</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder style={{ marginTop: 20 }}>
                        <Left>
                            <Button transparent>
                                <Icon
                                    type="MaterialIcons"
                                    name="data-usage"
                                    style={{ color: '#128C7E', opacity: 0.6 }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Data and storage usage</Text>
                            <Text note>Network usage, auto-download</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon style={{ marginTop: 20 }} noBorder>
                        <Left>
                            <Button transparent>
                                <Icon
                                    type="MaterialIcons"
                                    name="help-outline"
                                    style={{ color: '#128C7E', opacity: 0.6 }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Help</Text>
                            <Text note>FAQ, contact us, privacy policy</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder style={{ marginTop: 20 }}>
                        <Left>
                            <Button transparent>
                                <Icon
                                    type="MaterialIcons"
                                    name="people"
                                    style={{ color: '#128C7E', opacity: 0.6 }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Invite a friend</Text>
                        </Body>
                    </ListItem>
                    <View style={{ flex: 1, alignSelf: 'center', marginTop: 20 }}>
                        <Text note style={{ textAlign: 'center' }}>
                            from
            </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: '#4267B2',
                            }}>
                            FACEBOOK
            </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

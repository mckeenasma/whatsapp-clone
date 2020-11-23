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
import appStyles from '../appStyles';
import { View } from 'react-native';
export default class CallsScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
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
                            <Text>Mohammad</Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    type="MaterialIcons"
                                    name="call-made"
                                    style={[appStyles.callIcon, { color: '#25D366' }]}
                                />
                                <Text note>Yesterday, 08:23 pm</Text>
                            </View>
                        </Body>
                        <Right>
                            <Icon
                                style={{ color: '#075E54' }}
                                type="MaterialIcons"
                                name="call"
                            />
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
                            <Text>Mohammad</Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Icon
                                    type="MaterialIcons"
                                    name="call-received"
                                    style={[appStyles.callIcon, { color: '#FF0000' }]}
                                />
                                <Text note>Yesterday, 08:23 pm</Text>
                            </View>
                        </Body>
                        <Right>
                            <Icon
                                style={{ color: '#075E54' }}
                                type="MaterialIcons"
                                name="videocam"
                            />
                        </Right>
                    </ListItem>
                </Content>
                <Fab style={appStyles.fabColor} position="bottomRight">
                    <Icon type="MaterialIcons" name="phone-in-talk" />
                </Fab>
            </Container>
        );
    }
}
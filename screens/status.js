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
} from 'native-base';
import appStyles from '../appStyles';
export default class StatusScreen extends Component {
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
                                        'https://www.clipartkey.com/mpngs/m/71-711465_flat-faces-icons-circle-woman-7-vet-simpel.png',
                                }}
                            />
                            <Icon
                                type="MaterialIcons"
                                name="add-circle"
                                style={appStyles.addStatusIcon}
                            />
                        </Left>
                        <Body>
                            <Text>My Status</Text>
                            <Text note>4 mintues ago</Text>
                        </Body>
                    </ListItem>
                    <ListItem itemDivider style={appStyles.listItemDivider}>
                        <Text note style={{ fontSize: 12 }}>
                            Recent Updates
            </Text>
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
                            <Text note>Today, 11:24 pm</Text>
                        </Body>
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
                            <Text>Brian</Text>
                            <Text note>Today, 10:12 pm</Text>
                        </Body>
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
                            <Text>Michael</Text>
                            <Text note>Today, 10:00 pm</Text>
                        </Body>
                    </ListItem>
                    <ListItem itemDivider style={appStyles.listItemDivider}>
                        <Text note style={{ fontSize: 12 }}>
                            Viewed Updates
            </Text>
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
                            <Text note>Yesterday, 08:33 pm</Text>
                        </Body>
                    </ListItem>
                </Content>
                <Fab
                    style={appStyles.fabColor}
                    active={true}
                    direction="up"
                    position="bottomRight">
                    <Icon type="MaterialIcons" name="photo-camera" />
                    <Button style={{ backgroundColor: '#F5F5F5' }}>
                        <Icon type="MaterialIcons" name="edit" style={{ color: '#075E54' }} />
                    </Button>
                </Fab>
            </Container>
        );
    }
}

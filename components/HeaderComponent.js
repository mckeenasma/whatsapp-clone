import React, { Component } from 'react';
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
import appStyles from '../appStyles';


export default class HeaderComponent extends Component {
    render() {
        return (
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
        )
    }
}
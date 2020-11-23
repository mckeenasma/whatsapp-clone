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
import ChatsScreen from './screens/chats';
import StatusScreen from './screens/status';
import CallsScreen from './screens/calls';
import { StatusBar } from 'react-native';
import appStyles from './appStyles';
import SettingsScreen from './screens/settings';
import HeaderComponent from './components/HeaderComponent';

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
        <HeaderComponent />
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
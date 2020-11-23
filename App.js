// Kani ang first inputs na buhaton if ever magbuhat ug react apps
import React, { Component } from 'react';



// then diri kay mga pre made na na components
// ang component kay equivalent na siya sa div ug html
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

// kani ang examples sa mga component
import ChatsScreen from './screens/chats';
import StatusScreen from './screens/status';
import CallsScreen from './screens/calls';
import { StatusBar } from 'react-native';
import appStyles from './appStyles';
import SettingsScreen from './screens/settings';
import { NavigationContainer } from '@react-navigation/native';

// diri na mag sugod ang program
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#075E54');
    }, 100);
  }
  // diria
  render() {
    // diri kailangan nga isa ra ka div or component imong e return
    // if mag daghan ka ug component dapat e sulod nimo tanan sa isa ka component
    return (
      // parent component/div
      <Container>
        {/* header component/div */}
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>WhatsApp</Title>
          </Body>
          {/* right nga component, gina butang ang mga items to the right */}
          <Right>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="more-vert" />
            </Button>
          </Right>
        </Header>

        {/* tabs component/div */}
        <Tabs
          // mga options sa tabs
          tabContainerStyle={{
            elevation: 0,
          }}
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}
          tabBarActiveTextColor="red"
          initialPage={3}
          tabBarBackgroundColor="#075E54">

          {/* camera tab/component/div */}
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
              The amazing Camera Screen
            </Text>
          </Tab>

          {/* Chats tab/component/div */}
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#075E54' }}>
                <Text style={appStyles.tabsText}>CHATS</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>2</Text>
                </Badge>
              </TabHeading>
            }>
            {/* diria gi butangan niya ug bago nga component na naga handle sa sulod sa tab */}
            <ChatsScreen />
          </Tab>
          {/* Status tab/component/div */}
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
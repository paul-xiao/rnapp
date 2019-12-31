import React from "react";
import { Button, Footer, FooterTab, Icon, Text } from "native-base";

const AppFooter = ({ navigation }) => (
  <Footer>
    <FooterTab>
      <Button vertical onPress={() => navigation.navigate("List")}>
        <Icon name="home" />
        <Text>Home</Text>
      </Button>
      <Button vertical onPress={() => navigation.navigate("List")}>
        <Icon name="search" />
        <Text>Search</Text>
      </Button>
      <Button vertical onPress={() => navigation.navigate("Profile")}>
        <Icon name="person" />
        <Text>Profile</Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default AppFooter;

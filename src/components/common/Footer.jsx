import React from "react";
import { Button, Footer, FooterTab, Icon, Text } from "native-base";

const AppFooter = ({ navigation }) => (
  <Footer>
    <FooterTab>
      <Button vertical onPress={() => navigation.navigate("List")}>
        <Icon name="list" />
        <Text>Posts</Text>
      </Button>
      <Button vertical onPress={() => navigation.navigate("Home")}>
        <Icon name="person" />
        <Text>Profile</Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default AppFooter;

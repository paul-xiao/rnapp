import React from "react";
import { Body, Header, Left, Right, Title } from "native-base";
import propTypes from "prop-types";
const AppHeader = ({ title, left, right }) => {
  return (
    <Header>
      <Left>{left}</Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>{right}</Right>
    </Header>
  );
};

AppHeader.defaultProps = {
  left: null,
  right: null
};
AppHeader.propTypes = {
  title: propTypes.string.isRequired,
  left: propTypes.element,
  right: propTypes.element
};
export default AppHeader;

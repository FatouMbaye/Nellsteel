import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  H3,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import { color } from "react-native-reanimated";
//import Icon from '@expo/vector-icons/AntDesign';

class Header6 extends Component {
  render() {
    return (
      <Container  style={styles.container} >
        <Header  style={{color:'orange'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Icon name="home" color="#ef6c38" />
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange"
  }
});


export default Header6;
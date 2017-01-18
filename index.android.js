/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

export default class gaptest extends Component {
  state = {
    modalVisible: false,
    softInputMode: "pan",
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the main Window</Text>
        <Modal
          onRequestClose={() => {this.setModalVisible(false);}}
          style={{ backgroundColor: '#ffb428', position: 'absolute', top: 40 }}
          softInputMode={this.state.softInputMode}
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={{ backgroundColor: '#ffb428', flex: 1, borderColor: 'darkgray', borderWidth: 5 }}>
            <Text>This is inside the modal.</Text>
            <Button title="Nothing" onPress={()=>{ this.setState({softInputMode: "nothing"}) }}></Button>
            <Button title="Pan" onPress={()=>{ this.setState({softInputMode: "pan"}) }}></Button>
            <Button title="Resize" onPress={()=>{ this.setState({softInputMode: "resize"}) }}></Button>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TextInput/>
              <Text>This is under the text box.</Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Click to show modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8b453',
    borderColor: 'red',
    borderWidth: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('gaptest', () => gaptest);

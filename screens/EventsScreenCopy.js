import React, { Component } from 'react';
import {Select, Option} from "react-native-chooser";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {value : "",
  date: '2020'}
  }
  onSelect(value, label) {
    this.setState({value : value});
  }

  onSelectDate(value) {
    this.setState({
      date: value
    })
  }

  render() {
    console.log(this.state.value)
    console.log(this.state.date)
    return (
      <View >
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {'Wähle den Monat'}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
          <Option value = "Januar">Januar</Option>
          <Option value = "Februar">Febraur</Option>
          <Option value = "März">März</Option>
          <Option value = "April">April</Option>
          <Option value = "Roman">Roman</Option>
          <Option value = "Stonecold">Stonecold</Option>
          <Option value = "Rock">Rock</Option>
          <Option value = "Sheild">Sheild</Option>
          <Option value = "Orton">Orton</Option>

        </Select>

        <Select
            onSelect = {this.onSelectDate.bind(this)}
            defaultText  = {'Wähle das Jahr aus'}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
          <Option value = {'2020'}>2020</Option>
          <Option value = {'2021'}>2021</Option>
          <Option value = {'2022'}>2022</Option>
        </Select>
      </View>
    );
  }
}
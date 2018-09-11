import React, { Component } from 'react';
import { View, Button, ScrollView, Text, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';

export default class FlexDirectionBasics extends Component {
	
	constructor () {
		super();
		this.state = { pressStatus: false };
	}
	
	onPress = () => {
	  }

	_onHideUnderlay(){
		this.setState({ pressStatus: false });
	}
	_onShowUnderlay(){
		this.setState({ pressStatus: true });
	} 
	
  render() {
    return (
		<View style={{ flex: 1, marginTop: 25 }}>
			<ScrollView>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test B2323ody text</Text> 
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Bo2323dy text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text2323</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text</Text>
				<Text>Test Body text2323</Text>
			</ScrollView>
	 		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
				<TouchableHighlight style={[styles.btns, this.state.pressStatus ? styles.buttonPress : null]}
					activeOpacity={1}
					onHideUnderlay={this._onHideUnderlay.bind(this)}
          			onShowUnderlay={this._onShowUnderlay.bind(this)}
					onPress={this.onPress}>
					<Text>Me</Text> 
				</TouchableHighlight>
				<TouchableHighlight style={styles.btns} onPress={() => this.setState({backgroundColor: '#fff'})}> 
					<Text>Friends</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.btns}>
					<Text>World</Text>
				</TouchableHighlight>
				
      		</View>
	  </View>
    );
  }

};

const styles = StyleSheet.create({ 
	btns: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', 
			padding: 10, flex: 1, height: 55 },
			buttonPress: {
				backgroundColor: '#000'
			  }
  
  });
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import loginVideo from './assets/fullsize_main.mp4'

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			email: null,
			password: null,
			emailErr: false,
			pwErr: false };
	}
	
  render() {
    return (
		<View style={styles.container}>
			<Video
				repeat
				source={loginVideo}
				resizeMode="cover"
			/>
			<Input
				placeholder='Email'
				leftIcon={{ type: 'font-awesome', name: 'envelope' }}
				onChangeText={(email) => this.setState({email: email})}
			/>
			<Input
				placeholder='Password'
				leftIcon={<Icon name='lock'
							size={34}/>}
			/>
			<Button title='Log in'
				buttonStyle={{ width: 250, height: 50, backgroundColor: '#88c585' }}
				containerStyle={{ margin: 20 }}
			/>

			<Text>{this.state.email}</Text>

		</View>
    );
  }

};

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#85c5ae', alignItems: 'center', justifyContent: 'center' },
	btns: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', 
			padding: 10, flex: 1, height: 55 },
			buttonPress: {
				backgroundColor: '#000'
			  }
  
  });
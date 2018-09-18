import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Video } from 'expo';
import loginVideo from './assets/fullsize_main.mp4';
import { createStackNavigator } from 'react-navigation';


export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			backgroundOpacity: new Animated.Value(0),
			email: null,
			password: null,
			emailErr: false,
			pwErr: false };
	}

	fadeInVideo = () => {
		setTimeout(() => {
		  Animated.spring(
			this.state.backgroundOpacity,
			{
			  toValue: 1
			}
		  ).start();
		}, 100); 
	  }
	
  render() {
    return (
		<View style={styles.container}>

			<View style={styles.background}>
				<Animated.View style={[styles.backgroundViewWrapper, {opacity: this.state.backgroundOpacity}]}>
					<Video
						source={loginVideo}
						shouldPlay
						resizeMode="cover"
						style={styles.video}
						isLooping
						onLoad={() => this.fadeInVideo()}
					/>
				</Animated.View>
			</View>

			<View style={styles.overlay}> 
				<View style={styles.login}> 
				<Input
					placeholder='Email'
					placeholderTextColor='black'
					leftIcon={{ type: 'font-awesome', name: 'envelope' }}
					onChangeText={(email) => this.setState({email: email})}
					returnKeyType='next'
					onSubmitEditing={() => { this.secondTextInput.focus(); }}
					blurOnSubmit={false}
				/>
				<Input
					placeholder='Password'
					placeholderTextColor='black'
					secureTextEntry={true}
					ref={(input) => { this.secondTextInput = input; }}
					leftIcon={<Icon name='lock'
								size={34}/>}
				/>
				<Button title='Log in'
					buttonStyle={{ width: 250, height: 50, backgroundColor: '#88c585' }}
					containerStyle={{ margin: 20 }}
				/> 
				</View> 
			</View>

		</View>
    );
  }

};

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' },
	video: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	background: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: '#000',
	},
	backgroundViewWrapper: {
		...StyleSheet.absoluteFillObject,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(133,197,174,0.4)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		backgroundColor: 'blue',
		width: 350,
		height: 200,//TODO
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(213, 217, 224, 0.8)',
		borderRadius: 15
	},
	input: {
		color: 'blue'
	},
	btns: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', 
			padding: 10, flex: 1, height: 55 },
			buttonPress: {
				backgroundColor: '#000'
			  }
  
  });
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class LoginScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			emailErr: false,
            pwErr: false
        };
	}

	submitLogin() {
		this.props.navigation.navigate('Home')
	}
	
  render() {
    return (
		<View style={styles.container}>

			<View style={styles.login}> 
				<Text style={styles.title}>Login</Text>
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
					onSubmitEditing={() => { this.submitLogin(); }}
				/>
				<Button title='Log in'
					buttonStyle={{ width: 250, height: 50, backgroundColor: '#88c585' }}
					containerStyle={{ margin: 20 }}
					onPress={() => { this.submitLogin() }}
				/> 
			</View>

		</View>
    );
  }

};

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: '#77e072', 
		alignItems: 'center',
		justifyContent: 'center' 
	},
	title: {
		fontSize: 30,
		paddingBottom: 30
	},
	login: {
		backgroundColor: 'blue',
		width: 350,
		height: 300,//TODO
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(213, 217, 224, 0.8)',
		borderRadius: 15
	},
	btns: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', 
			padding: 10, flex: 1, height: 55 },
			buttonPress: {
				backgroundColor: '#000'
			  }
  
  });
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export class RegisterScreen extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            username: null,
			email: null,
            password: null,
            confirmPassword: null,
			emailErr: false,
            pwErr: false
        };
    }
    
    submitRegister() {
		this.props.navigation.navigate('Home')
	}

    render() {
        return (
            <View style={styles.container}>
    
                <View style={styles.login}> 
                    <Text style={styles.title}>Register New Account</Text>
                    <Input
                        placeholder='Email Address'
                        placeholderTextColor='black'
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        onChangeText={(email) => this.setState({email: email})}
                        returnKeyType='next'
                        onSubmitEditing={() => { this.usernameField.focus(); }}
                        blurOnSubmit={false}
                    />
                    <Input
                        placeholder='Username'
                        placeholderTextColor='black'
                        leftIcon={{ type: 'font-awesome', name: 'bookmark', size: 30 }}
                        onChangeText={(username) => this.setState({username: username})}
                        returnKeyType='next'
                        ref={(input) => { this.usernameField = input; }}
                        onSubmitEditing={() => { this.pwField.focus(); }}
                        blurOnSubmit={false}
                    />
                    <Input
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        leftIcon={{ type: 'font-awesome', name: 'lock', size: 35 }}
                        onChangeText={(password) => this.setState({password: password})}
                        ref={(input) => { this.pwField = input; }}
                        onSubmitEditing={() => { this.confirmPwField.focus(); }}
                        blurOnSubmit={false}
                    />
                    <Input
                        placeholder='Confirm Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        leftIcon={{ type: 'font-awesome', name: 'lock', size: 35 }}
                        onChangeText={(confirmPassword) => this.setState({confirmPassword: confirmPassword})}
                        onSubmitEditing={() => { this.submitRegister(); }}
                        ref={(input) => { this.confirmPwField = input; }}
                        blurOnSubmit={false}
                    />
                    <Button title='Register'
                        buttonStyle={{ width: 250, height: 50, backgroundColor: '#f44259' }}
                        containerStyle={{ margin: 20 }}
                        ref={(input) => { this.submitBtn = input; }}
                        onPress={() => { this.submitRegister() }}
                    /> 
                </View>
    
            </View>
        );
      }
    
};
    
    const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            paddingBottom: 30
        },
        container: {
            flex: 1, 
            backgroundColor: '#4286f4', 
            alignItems: 'center', 
            justifyContent: 'center' 
        },
        login: {
            width: 350,
            height: 450,//TODO
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(213, 217, 224, 0.8)',
            borderRadius: 10
        },
        btns: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', 
                padding: 10, flex: 1, height: 55 },
                buttonPress: {
                    backgroundColor: '#000'
                  }
      
      });
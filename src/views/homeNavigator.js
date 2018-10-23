import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class HomeNavigator extends React.Component {
    render() {
      return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
      );
    }
}

const styles = StyleSheet.create({
	container: { 
        marginTop: 24,
        backgroundColor: '#72ace0',
    },
  });
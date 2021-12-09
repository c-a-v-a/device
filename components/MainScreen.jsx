import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from '../assets/adaptive-icon.png'

class MainScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={ styles.container }>
				<Text style={ styles.header }>Device app</Text>
				<Image
					source={ Icon }
					style={ styles.image }
				></Image>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2E3440'
	},
	header: {
		fontSize: 40,
		color: '#ECEFF4'
	},
	image: {
		width: 200,
		height: 200
	}
})

export default MainScreen;

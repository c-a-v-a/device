import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={{ alignItems: 'flex-end', flex: 1 }}>
				<TouchableOpacity 
					onPress={ this.props.handler }
					style={ styles.button }
				>
					<Text style={ styles.text }>{ this.props.title }</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

MyButton.propTypes = {
	handler: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#4C566A',
		height: 35,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		color: '#ECEFF4'
	}
})

export default MyButton;

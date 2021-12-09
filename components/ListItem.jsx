import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MyButton from './MyButton';
import Icon from '../assets/favicon.png';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={ styles.container }>
				<Image source={ Icon } />
				<Text style={ styles.title }>{ this.props.title }:</Text>
				<Text style={ styles.value }>{ this.props.value }</Text>
				<MyButton title='DELETE' handler={ this.props.handler }/>
			</View>
		);
	}
}

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handler: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: 10
	},
	title: {
		fontSize: 15,
		color: '#ECEFF4',
		fontStyle: 'italic',
		marginLeft: 20
	},
	value: {
		fontSize: 15,
		color: '#D8DEE9',
		marginLeft: 10
	}
})

export default ListItem;

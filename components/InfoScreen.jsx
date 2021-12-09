import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import ListItem from './ListItem';

class InfoScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			excludedIndexes: [],
			deviceType: "",
			maxMemory: ""
		};

		this.removeItem.bind(this);

		this.getInfo();
	}

	reloadList() {
		this.setState(() => {
			return {
				excludedIndexes: []
			}
		});
	}

	removeItem(index) {
		this.setState((prevState) => {
			const excludedIndexes = prevState.excludedIndexes;

			excludedIndexes.push(index);

			return {
				excludedIndexes: excludedIndexes
			}
		});
	}

	async getInfo() {
		const deviceType = await Device.getDeviceTypeAsync();
		const maxMemory = await Device.getMaxMemoryAsync();

		this.setState(() => {
			return {
				deviceType: deviceType,
				maxMemory: maxMemory
			};
		});
	}

	render() {
		const data = [
			{ name: 'Brand', value: Device.brand },
			{ name: 'Device name', value: Device.deviceName },
			{ name: 'Manufacturer', value: Device.manufacturer },
			{ name: 'Model name', value: Device.modelName },
			{ name: 'Device type', value: this.state.deviceType },
			{ name: 'Max memory', value: this.state.maxMemory },
			{ name: 'OS name', value: Device.osName },
			{ name: 'OS Version', value: Device.osVersion },
			{ name: 'Platform api', value: Device.platformApiLevel },
			{ name: 'Total memory', value: Device.totalMemory },
		]

		return (
			<View style={ styles.container }>
				<View style={ styles.buttonContainer }>
					<TouchableOpacity 
						onPress={ () => this.reloadList() } 
						style={ styles.button }>
						<Text style={{ fontSize: 20, color: '#ECEFF4' }}> Reset </Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={ data }
					keyExtractor={ item => item.name.toString()}
					renderItem={({ item, index }) => {
						if (!this.state.excludedIndexes.includes(index)) {
							return (
								<ListItem 
									title={ item.name }
									value={ item.value.toString() }
									handler={ () => this.removeItem(index) }
								/>
							);
						}
					}}
					style={{ flex: 9 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#2E3440'
	},
	buttonContainer: {
		height: 100,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		width: 100,
		height: 35,
		backgroundColor: '#4C566A',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default InfoScreen;

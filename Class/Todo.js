import React, {Component} from 'react';
import {Text, TextInput, View, ListView, StyleSheet, Button, AsyncStorage} from 'react-native';


class Todo extends Component
{
	/*
	** AsyncStorage function
	*/
	async saveData(data)
	{
		try {await AsyncStorage.setItem('@data:data', JSON.stringify(data));}
		catch (error) {console.log('Error saveData');}
	}
	async getData()
	{
		try
		{
			value = await AsyncStorage.getItem('@data:data');
			if (value !== null)
			{
				this._data = JSON.parse(value);
				this.setState(() => ({dataSource: this.state.dataSource.cloneWithRows(this._data)}));
			}
		}
		catch (error) {console.log('Error getData');}
	}

	constructor()
	{
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this._data = [];
		this.getData();
		this.state = {
			dataSource: ds.cloneWithRows(this._data),
			nameValue: '',
			descValue: ''
		};
		this.addButton = () =>
		{
			if (!this.state.nameValue || !this.state.descValue) return;
			this._data = this._data.concat({desc: this.state.nameValue, text: this.state.descValue});
			this.setState(() => ({dataSource: this.state.dataSource.cloneWithRows(this._data)}));
			this.state.nameValue = '';
			this.state.descValue = '';
			this.saveData(this._data);
		};
		this.delButton = (id) =>
		{
			this._data = this._data.filter((item, index) => parseInt(id, 10) !== index);
			this.setState(() => ({dataSource: this.state.dataSource.cloneWithRows(this._data)}));
			this.saveData(this._data);
		};
	}

	render()
	{
		return (
			<View style={styles.container}>
				<View style={styles.form} /* Add element */>
					<TextInput
						style={styles.textBox}
						value={this.state.nameValue}
						onChangeText={nameValue => this.setState({nameValue})}
						placeholder="Name" />
					<TextInput
						style={styles.textBox}
						value={this.state.descValue}
						placeholder="Description"
						onChangeText={descValue => this.setState({descValue})} />
					<Button
						onPress={this.addButton}
						title="Add" />
				</View>
				<ListView /* Element List */
					enableEmptySections
					style={styles.list}
					dataSource={this.state.dataSource}
					renderRow={(rowData, sectionID, rowID) =>
					{
						const deletePress = () => {return this.delButton(rowID);};
						return (
							<View style={styles.item}>
								<View style={styles.itemText}>
									<Text style={styles.name}>{rowData.desc}</Text>
									<Text style={styles.desc}>{rowData.text}</Text>
								</View>
								<Button
									style={styles.delButton}
									title="Delete"
									onPress={deletePress} />
							</View>);
					}} />
			</View>
		);
	}
}

const grey = '#e6ecf0';
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	form: {
		alignSelf: 'center',
		width: 320,
		marginBottom: 20
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	desc: {
		fontSize: 14
	},
	item: {
		alignSelf: 'center',
		alignItems: 'center',
		width: 320,
		backgroundColor: grey,
		borderBottomWidth: 1.5,
		marginBottom: 5,
		flex: 1,
		flexDirection: 'row'
	},
	itemText: {
		flexDirection: 'column',
		flex: 1
	},
	textBox: {
		height: 40,
		marginTop: 10
	}
});

module.exports = Todo;

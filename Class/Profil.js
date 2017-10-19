import React, {Component} from 'react';
import {Text, StyleSheet, Image, View, ScrollView} from 'react-native';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus dui eu ornare luctus. Nunc suscipit porta erat, non egestas leo tincidunt vel. Donec a elit eu enim dignissim consequat ut id elit. Mauris magna lorem, sagittis eget iaculis id, sagittis id tellus. Donec maximus magna neque, et convallis elit aliquet eget. Donec cursus a mi et interdum. Mauris lacinia purus lectus, quis pellentesque purus varius id. Fusce lacinia leo venenatis, tempus ipsum ac, tempus libero. Sed sollicitudin semper justo, ut suscipit quam suscipit eu. Sed vitae lacus mauris. Phasellus tellus tellus, lobortis sit amet imperdiet sed, mollis sed quam. Aliquam erat volutpat.';

class Profil extends Component
{
	render()
	{
		return (
			<View style={styles.center}>
				<Image source={require('../Picture/btollet.jpg')} style={styles.picture} />
				<Text style={styles.name}>Tollet Benjamin</Text>
				<ScrollView>
					<Text style={styles.description}>{text}</Text>
				</ScrollView>
			</View>
		);
	}
}

module.exports = Profil;

const black = '#000';
const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: 'center'
	},
	picture: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginTop: 20
	},
	name: {
		marginTop: 20,
		color: black,
		fontSize: 30,
		fontWeight: 'bold'
	},
	description: {
		margin: 10,
		fontSize: 18
	}
});

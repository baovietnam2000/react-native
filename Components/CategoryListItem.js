import React, {Component} from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import SkiiImage from '../images/salelogo.png';
export default function CategoryListItem(props){
	const {category, onPress } = props;
	return (
		<TouchableOpacity 
			activeOpacity={0.6}
			onPress = {onPress}

		>
			<View style={styles.container}>
				<Text style={styles.title}> {category.name} </Text>
				<Image style={styles.catgoryImage} source={SkiiImage}/>
			</View>
		</TouchableOpacity>
		)
}
const styles=StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 16,
		borderRadius: 4,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 10,
		shadowOffset: {width:0,height:0},
		justifyContent: 'center',
		paddingLeft: 16,
		paddingRight: 16
		

	},
	catgoryImage: {
		width: 64,
		height: 64
	},
	title:{
		textTransform: 'uppercase',
		marginBottom: 8,
		fontWeight: '700'
	}

});
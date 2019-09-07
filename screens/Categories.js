import React, {Component} from 'react';
import {AppRegistry,StyleSheet,FlatList} from 'react-native';
import CategoryListItem from "../Components/CategoryListItem.js";

export default  class Categories extends Component {
  static navigationOptions ={
    title: 'Welcome to my home page'
  };
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {id:1,name: 'Food'},
        {id:2,name: 'Rent car'},
        {id:3,name: 'Hotel'}
      ]

    };
  } 
  
  render (){
    const {navigation} = this.props;
    const {categories} = this.state;
  
      return (
       
        <FlatList
          data = {categories}
          renderItem = {({item}) => 
          <CategoryListItem 
            category={item}
            onPress={() => navigation.navigate('Category',{
              categoryName: item.name
            })}

          />

          }
          keyExtractor= {item => '${item.id}'}//need convert id in number to string
          contentContainerStyle = {{paddingTop: 16,paddingLeft: 16,paddingRight: 16}}
        />
               
        );

      }
}










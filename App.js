import React, {Fragment,Component} from 'react';
import {
  AppRegistry,
  Webview,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ImageBackground,
  FlatList,
  Alert
  
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default  class ShopStore extends Component {
  /*
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
  */
  render (){
    //const {categories} = this.state;
    
      return (
        /*
        <ScrollView style={{paddingLeft: 16,paddingRight: 16}}>
          {categories.map(category => <CategoryListItem key={category.id} category={category}/>)}
        </ScrollView>
        
        <FlatList
          data = {categories}
          renderItem = {({item}) => <CategoryListItem category={item}/>}
          keyExtractor= {item => '${item.id}'}//need convert id in number to string
          contentContainerStyle = {{paddingLeft: 16,paddingRight: 16}}
        />
        */
          <AppContainer />
        
        ); 
  }

}


const styles = StyleSheet.create({
  
  container: {
    flex:1,
    alignItems:'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
    

  },
});


//AppRegistry.registerComponent('ShopStore', () => ShopStore);




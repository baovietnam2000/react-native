import React, {Component} from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import ProductListItem from '../Components/ProductListItem';
export default  class Category extends Component {
  static navigationOptions = ({navigation})=>{
    return {
      title: navigation.getParam('categoryName')
    };
  };

  constructor(props){
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          images: [
            {
              url: 'http://tem4.bannhanh.org/images/pic01.jpg'
            }
          ],
          name: 'Product A',
          price: '50000'
        },
        {
          id: 2,
          images: [
            {
              url: 'http://tem4.bannhanh.org/images/pic02.jpg'
            }

          ],
          name: 'Product B',
          price: '30000'
            
        }

      ]

    };
  }
  render (){
  
      return (
       
        <FlatList
          data = {this.state.products}
          contentContainerStyle = {styles.container}
          numColumns = {2}
          renderItem = {({item}) => 
            <View style = {styles.wrapper}>
            <ProductListItem product = {item} />
            </View>
          }
          keyExtractor= {item => '${item.id}'}  />
        
        );
      }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
    
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  }
});







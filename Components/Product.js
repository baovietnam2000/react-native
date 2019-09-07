import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Product extends Component {
  render (){
    return (
      
      <View style={styles1.container}>
      
        <View style={styles1.top}>
        
          <View style={styles1.profileimage}></View>

        </View>
        
        <View style={styles1.center}></View>
        <View style={styles1.bottom}>
          <View style={styles1.bottomItem}>
            <View style={styles1.bottomItemInner}></View>
          </View>
          <View style={styles1.bottomItem}>
            <View style={styles1.bottomItemInner}></View>
          </View>
          <View style={styles1.bottomItem}>
            <View style={styles1.bottomItemInner}></View>
          </View>
          <View style={styles1.bottomItem}>
            <View style={styles1.bottomItemInner}></View>
          </View>

        </View>
        
      </View>
      
      );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex:1,
  },
  top: {height: '45%',alignItems:'center',backgroundColor:'#98d2c1'},
  profileimage: {
    width:140,
    height:140,
    borderRadius:100,
    borderWidth:4,
    borderColor:'#fff',
    backgroundColor:'#eee'
  },
  center: {
    height: '10%',
    backgroundColor: '#7fbcac',
  },
  bottom:{
    height: '45%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:5
  },
  bottomItem:{
    width: '50%',
    height: '50%',
    padding: 5
  },
  bottomItemInner: {
    flex:  1,
    backgroundColor: '#292929'
  },
  backgroundContainer: {
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

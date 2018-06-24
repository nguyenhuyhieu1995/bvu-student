import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ListItem extends Component {
   
  render() {
    return (
         <TouchableOpacity onPress={this.props.hanhdong}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
         {/* <View style={{flexDirection: 'column',backgroundColor: 'white',borderColor:'white',borderWidth:1, borderRadius:30, width: this.state.width1, height: this.state.height1, alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}> */}
              
             <Image source= {this.props.hinhanh} style={{height: height/20, width: width/10, marginLeft: 10, paddingTop: 10, paddingBottom: 5, paddingRight: 10, marginRight: 10}}></Image> 
          
                 <Text style={{ fontSize: 13,marginLeft: 10, paddingTop: 5, paddingBottom: 10, marginRight: 10}} > {this.props.noidung} </Text> 
              
        </View>
        </TouchableOpacity>
     
    );
  }
}

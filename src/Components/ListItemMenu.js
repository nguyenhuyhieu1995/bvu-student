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

export default class ListItemMenu extends Component {
    state = {
        width1: width/1.5,
        width2: width/11,
        height1: height/18,
        height2: height/22,
    }
  render() {
    return (
         <TouchableOpacity onPress={this.props.hanhdong}>
         <View style={{flexDirection: 'row',backgroundColor: 'white',borderColor:'white',borderWidth:1, borderRadius:30, width: this.state.width1, height: this.state.height1, alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
               <Text></Text>
             <Image source= {this.props.hinhanh} style={{height: this.state.height2, width: this.state.width2, marginLeft: 20}}></Image> 
          
                 <Text style={{width: this.state.width1, height: this.state.height1, fontSize: 16,marginLeft: 15, paddingTop: 3}} > {this.props.noidung} </Text> 
              
          </View>
        </TouchableOpacity>
     
    );
  }
}

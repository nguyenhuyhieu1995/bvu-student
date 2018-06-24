import React, { Component } from 'react';
import {Linking ,TouchableOpacity,ToastAndroid,Text, Image,Dimensions,View } from 'react-native';

import imgfacebook from '../Images/facebook.png';
import imgmobile from '../Images/mobile.png';
import imgemail from '../Images/email.png';

const {width, height} = Dimensions.get('window');

export default class CLBController extends Component {
      constructor(props){
         super(props);
         this.state = {
            
         }
       
     }

    render() {
        return (      
                  <View>
                             <Image source={this.props.hinhanh} style={{width, height: height/4}}/>
                                           
                             <Text style={{paddingTop: 10,paddingLeft: 10, paddingRight: 10}}> {this.props.mota} </Text>

                          <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                               <View style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#EEEEEE',flex: 3}}>
                                  <TouchableOpacity
                                  style={{alignItems: 'center',justifyContent: 'center'}}
                                  onPress={()=>{ if(this.props.facebook == "") { ToastAndroid.show('Chưa có thông tin này !', ToastAndroid.SHORT);} else { Linking.openURL(this.props.facebook)} }} >
            
                                 <Image source={imgfacebook} style={{width: 30, height: 30, marginTop: 5, marginBottom: 5}}/>
                                   {/* <Text style={{paddingBottom: 2}}> {this.props.facebook} </Text> */}
                                  </TouchableOpacity>   
                              </View>

                               <View style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#EEEEEE',flex: 3}}>
                                  <TouchableOpacity
                                  style={{alignItems: 'center',justifyContent: 'center'}}
                                  onPress={()=>{if(this.props.mobile == "") { ToastAndroid.show('Chưa có thông tin này !', ToastAndroid.SHORT); } else{Linking.openURL('tel:'+this.props.mobile)}}} >
            
                                 <Image source={imgmobile} style={{width: 30, height: 30,marginTop: 5, marginBottom: 5}}/>
                                   {/* <Text style={{paddingBottom: 2}}> {this.props.mobile} </Text> */}
                                  </TouchableOpacity>   
                              </View>


                               <View style={{alignItems: 'center',justifyContent: 'center',backgroundColor: '#EEEEEE',flex: 3}}>
                                  <TouchableOpacity
                                  style={{alignItems: 'center',justifyContent: 'center'}}
                                  onPress={()=>{ if (this.props.email == "") {ToastAndroid.show('Chưa có thông tin này !', ToastAndroid.SHORT);} else {Linking.openURL('mailto:'+this.props.email)}} }>
            
                                 <Image source={imgemail} style={{width: 30, height: 30, marginTop: 5, marginBottom: 5}}/>
                                   {/* <Text style={{paddingBottom: 2}}> {this.props.email} </Text> */}
                                  </TouchableOpacity>   
                              </View>


                              
                              </View>
                   </View>
                      
        );
    }
}
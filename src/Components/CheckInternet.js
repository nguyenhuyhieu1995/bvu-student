import React, { Component } from 'react';
import {Alert, NetInfo,View, WebView } from 'react-native';

export default class CheckInternet extends Component {
    componentWillMount(){
        this._checkInternet();
     }
    _checkInternet(){

            NetInfo.isConnected.fetch().then(isConnected => {
        console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        if(isConnected) {
            // Alert.alert('Có gì đó Online? ', 'MSSV chỉ có số thôi bạn nhé :P ');
         
        }
        else{
            Alert.alert('Xin kiểm tra kết nối mạng? ', 'MSSV chỉ có số thôi bạn nhé :P ');
         
        }
        });
        function handleFirstConnectivityChange(isConnected) {
        //console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
        if(isConnected) {

        }
        else{
             Alert.alert('Kết nối mạng không thành công',  'Có vẻ như mạng wifi hay mạng di động của bạn chưa được bật hoặc kết nối không thành công. Xin kiểm tra lại.',[ {text: 'OK', onPress: () => this._checkInternet()},
  ],
  { cancelable: false });
        
        
        }
        {

        }
        NetInfo.isConnected.removeEventListener(
            'change',
            handleFirstConnectivityChange
        );
        }
        NetInfo.isConnected.addEventListener(
        'change',
        handleFirstConnectivityChange
        );
    
    }
    render() {
        return (
             <View style={{ flex: 1 }}>
                 
      </View>
           
            
        );
    }
}
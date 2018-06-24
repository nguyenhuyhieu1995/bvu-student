import React, { Component } from 'react';
import {Image, Alert,ScrollView,View,TouchableOpacity,TextInput,Dimensions, Text } from 'react-native';


//import Admob from '../Components/Admob';

import congthuctinhdiem from '../Images/congthuctinhdiem.png';
import congthuctinhdiem2 from '../Images/congthuctinhdiem2.png';

const {width, height} = Dimensions.get('window');


export default class QuyDinhTinhDiem extends Component {
     
    render() {
                
        return (
         
          <ScrollView style={{flex: 1,flexDirection: 'column',backgroundColor: '#EEEEEE'}}>
                 <Text style={{marginTop: 10 ,paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap'}}>Điểm trung bình chung tích lũy và điểm trung bình học kỳ được tính bằng công thức sau: </Text>
              <View style={{alignItems: "center" }}><Image style={{resizeMode: 'stretch', flex : 1 }}  source={congthuctinhdiem}/>
              <Text styele={{paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap'}}>
                   Trong đó: A là điểm trung bình chung tích luỹ.
    ai là điểm của học phần thứ i.
    ni là số tín chỉ của học phần thứ i.
   n là tổng số học phần.
              </Text>
              <Text style={{marginTop: 10, color: 'red',paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap' }}>Ví dụ: Điểm trung bình chung tích lũy hay điểm trung bình chung trong học kì sẽ được tính như sau:  </Text>
           <Image style={{resizeMode: 'stretch', flex : 1}}  source={congthuctinhdiem2}/>
         <Text style={{marginBottom: 20, paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap'}}> Điểm trung bình = (8.5 * 3 + 6 * 2 + 7.25 * 3)/(3 + 2 + 3) = 7.4</Text>
              </View>
               
             
          </ScrollView>  
         
        );
    }
}
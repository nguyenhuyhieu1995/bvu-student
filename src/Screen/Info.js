import React, { Component } from 'react';
import { ScrollView,TouchableOpacity, Linking,View, Text, Image,Dimensions } from 'react-native';

export default class Info extends Component {

    render() {

        return (
           <View style={{flex: 10}}>
                <View style={{flex: 8, alignItems: 'center'}}>
                     <Image source={require('../Images/logo.png')} style = {{width: 100, height: 100, marginTop: 10 ,marginBottom: 10, borderColor:'gray', borderWidth:1,borderRadius: 25}} />
                     <Text style={{paddingLeft: 10, paddingRight: 10, marginLeft: 5,marginRight: 5,color: 'gray', fontSize: 16}}> BVU Student</Text>
                     <Text style={{paddingLeft: 10, paddingRight: 10, marginLeft: 5,marginRight: 5, marginTop: 10,color: 'blue', backgroundColor: 'gold',fontSize: 18, borderColor:'gray', borderWidth:1, borderRadius:10,}}> Ứng dụng tra cứu thông tin, tin tức, xem điểm, tính điểm, xem lịch học, lịch thi, công nợ, đăng ký học phần, ... ngay trên smartphone. </Text>
                     
                      <Text style={{fontStyle:'italic' ,paddingLeft: 10, paddingRight: 10, marginLeft: 5,marginRight: 5, marginTop: 10,color: 'blue', backgroundColor: 'gold',fontSize: 18, borderColor:'gray', borderWidth:1, borderRadius:0,}}>* Mọi góp ý, thông tin xin liên hệ:  </Text>
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/nguyenhuyhieu.1995')}>
                     <Image source={require('../Images/facebook.png')} style = {{width: 39, height: 39, marginTop: 10 ,marginRight: 20,marginBottom: 10, borderColor:'red', borderWidth:1,borderRadius: 8}} />
                    </TouchableOpacity>
                     <TouchableOpacity onPress={()=>Linking.openURL('sms:0888261095')}>
                    <Image source={require('../Images/mobile.png')} style = {{width: 39, height: 39, marginTop: 10 ,marginRight: 20,marginBottom: 10, borderColor:'orange', borderWidth:1,borderRadius: 8}} />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>Linking.openURL('mailto:contact@nguyenhuyhieu.com')}>
                    <Image source={require('../Images/email.png')} style = {{width: 39, height: 39, marginTop: 10 ,marginRight: 20,marginBottom: 10, borderColor:'blue', borderWidth:1,borderRadius: 8}} />
                     </TouchableOpacity>
                     </View>
                     <Text style={{ paddingLeft: 10, paddingRight: 10, marginLeft: 5,marginRight: 5,marginTop: 10, color: 'gray', fontSize: 15}}>Chân thành cám ơn ý tưởng tính điểm và sự giúp đỡ của anh #Triều (DH14QS). </Text>
                     
                      <Text style={{ paddingLeft: 10, paddingRight: 10, marginLeft: 5,marginRight: 5,marginTop: 10, color: 'gray', fontSize: 15}}> Made by ❤️ BVU </Text>
                     
                   
                     </View>

                 
                 </View>
          
            
        );
    }
}
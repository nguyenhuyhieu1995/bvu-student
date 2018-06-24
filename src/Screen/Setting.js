import React, { Component } from 'react';
import {Linking,AsyncStorage,Share, Alert,TouchableOpacity,Switch,ScrollView,Button, TextInput,Dimensions,View, Text, Image } from 'react-native';
import {CheckBox } from 'native-base';

const {width, height} = Dimensions.get('window');

class Headder extends Component{
    render(){
        return(
            <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row', height: height/16, backgroundColor: 'orange'}}>
                <Text style={{fontSize: 18, color: 'white'}}> {this.props.children}</Text>                             
            </View>
        );
    }
}

export default class Setting extends Component {

    constructor(props){
        super(props);
        this.state = {          
        //    nhanthongbao: true,
        //    batquangcao: true,
           mssv: 14030490,
        }
    
    }
      
   _luuThongTin(){
     if(this.state.mssv ==""){
          Alert.alert('Ôi, cẩn thận bạn ơi ', 'Bạn vui lòng nhập Mã số sinh viên cho chính xác lại giùm mình nhé.');
           
     } 
      else if(isNaN(this.state.mssv)){
             Alert.alert('Có gì đó sai sai? ', 'MSSV chỉ có số thôi bạn nhé :P ');
     
        }
     else{
        Alert.alert(
                'Xác nhận MSSV đã đúng?',
                'Để có thể xem điểm và xem công nợ nhanh, bạn cần nhập chính xác MSSV. ',
                [
                    {text: 'Chính xác', onPress: () => this._saveData() },
                    {text: 'Sửa lại', onPress: () => {} },
                   
                ],
                { cancelable: false }
                )  
           
     }       
   }
    
    _saveData = async() => {
        try {
            await AsyncStorage.setItem('@mssv:key',this.state.mssv);

        }
        catch(e){}
     
          try {
            var masosinhvien = await AsyncStorage.getItem('@mssv:key');
            //console.log(masosinhvien);
             this.setState({
                        mssv2: masosinhvien 
                    });
           
                    
            //if is null
            if(masosinhvien == null) {
                try {
                        await AsyncStorage.setItem('@mssv:key',"14030940");
                      var masosinhvien2 = await AsyncStorage.getItem('@mssv:key');
           
                       // console.log(masosinhvien2);
           
                   }catch(e){}

                    this.setState({
                        mssv2: masosinhvien2 
                    });
            }        
        }
        catch(e){}       
    
    }
    
      
     _share() {
         
            Share.share({
            message: 'BVU Student - Ứng dụng tra cứu thông tin, tin tức, xem điểm, tính điểm, xem lịch học, lịch thi, công nợ, đăng ký học phần, ... ngay trên smartphone. Bạn lên Play Store tìm BVU Student để cài đặt nhé. ❤️ ',
            title: 'BVU Student',
            url: 'http://nguyenhuyhieu.com'
            }, {
            dialogTitle: 'BVU Student - Made by ❤️ BVU',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter',
                'com.apple.uikit.activity.mail'
            ],
            tintColor: 'green'
            })
            .then()
            .catch()
    }
    
     componentDidMount() {
                   
       this._saveData()
       }

    render() {
       
        return (        
                <View style={{flex: 10}}>
                <View style={{flex: 8}}>
                    <Headder>
                        <Text>Tài khoản</Text>
                    </Headder>
                     <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text> Mã Số Sinh Viên: </Text>
                        <TextInput  maxLength={8}  keyboardType="numeric" onChangeText={(mssv)=>{this.setState({mssv})} } placeholder={this.state.mssv2} style={{flex: 1}}></TextInput>
                        </View>
                     <View style={{ marginBottom: 10,flexDirection:'row',justifyContent: 'center', alignItems: 'center'}}>
                          <Button  title="Lưu thông tin" onPress={ ()=> {this._luuThongTin()}}></Button>
                      
                        </View> 

                      
                     <Headder>
                        <Text> Khác </Text>
                    </Headder>  
                    <View style={{marginLeft: 20, marginTop: 10}}> 
                     <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('InfoScreen')} }>
                      <Text style={{fontSize: 18, marginBottom: 10}}>Thông tin</Text>
                       </TouchableOpacity>
                     <TouchableOpacity  onPress={()=>Linking.openURL('sms:0888261095')}>
                      <Text style={{fontSize: 18, marginBottom: 10}}>Góp ý</Text>
                       </TouchableOpacity>  
                    <TouchableOpacity  onPress={()=>Linking.openURL('market://details?id=com.hieumediavn.bvustudent')}>
                      <Text style={{fontSize: 18, marginBottom: 10}}>Đánh giá</Text>
                       </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this._share() }>
                      <Text style={{fontSize: 18}}>Chia sẻ</Text>
                       </TouchableOpacity>
                     </View>  
             
                 </View> 
              
                 </View>
           
          
            
        );
    }
}
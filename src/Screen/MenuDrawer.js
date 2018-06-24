import React, { Component } from 'react';
import { AsyncStorage,Linking,View,ScrollView,Text,Alert, StyleSheet, TextInput,Image,Dimensions } from 'react-native';
import ListItemMenu from '../Components/ListItemMenu';


const {width, height} = Dimensions.get('window');

export default class MenuDrawer extends Component {
     constructor(props){
         super(props);
         this.state = {
             masosinhvien: "",
             timkiem: "",
         }
       
     }

     _getData = async() => {
        try {
           var mssv = await AsyncStorage.getItem("@mssv:key");
            if(mssv == null){
                this.setState({masosinhvien: '14030940'});
           }
            else{
                 this.setState({masosinhvien: mssv});
         
            }
        }
        catch(e){}
    } 
    componentWillMount(){
                 this._getData();               
    }
    

   _timKiem(){
         this.props.navigation.navigate('TimKiemScreen',{timkiem: this.state.timkiem});
   }


   
    render() {
          return (
            <ScrollView>
             <View style={{ alignItems: 'center',backgroundColor: '#F8F8FF'}}>
                  <Image  source={{uri: 'http://sinhvien.bvu.edu.vn/GetImage.aspx?MSSV='+this.state.masosinhvien}} style = {{width: 100, height: 100, marginTop: 15 ,marginBottom: 5, borderColor:'gray', borderWidth:1,borderRadius: 50}} />
                 <Text> MSSV: {this.state.masosinhvien}</Text>
                  <TextInput onSubmitEditing={this._timKiem.bind(this)} onChangeText={(timkiem) => {this.setState({timkiem})} }  placeholder="Tìm kiếm trên bvu.edu.vn ?" style={styles.input}></TextInput>
              
               </View>   
            <View style={{flex: 1, backgroundColor: '#FFCC00', alignItems: 'center'}}>
                <Text style={{marginTop: 15}}></Text>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('NewsScreen')}} hinhanh={require('../Images/tintuc.png')} noidung="Tin Tức">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('SinhVienScreen')}} hinhanh={require('../Images/sinhvien.png')} noidung="Sinh Viên">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('XemDiemScreen')}  } hinhanh={require('../Images/xemdiem.png')} noidung="Xem Điểm">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('XemLichHocScreen')}  } hinhanh={require('../Images/lichhoc.png')} noidung="Xem Lịch Học">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('XemLichThiScreen')}  } hinhanh={require('../Images/lichthi.png')} noidung="Xem Lịch Thi">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('XemCongNoScreen')}  } hinhanh={require('../Images/congno.png')} noidung="Xem Công Nợ">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('TraCuuKhacScreen')} } hinhanh={require('../Images/tracuukhac.png')} noidung="Tra Cứu Khác">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('TinhDiemScreen')}} hinhanh={require('../Images/tinhdiem.png')} noidung="Kế Hoạch Học Tập">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('CLBScreen')} } hinhanh={require('../Images/clb.png')} noidung="Câu Lạc Bộ">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('SettingScreen')} } hinhanh={require('../Images/caidat.png')} noidung="Cài Đặt">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {this.props.navigation.navigate('InfoScreen')}} hinhanh={require('../Images/thongtin.png')} noidung="Thông Tin">  </ListItemMenu>
                <ListItemMenu hanhdong= {()=> {Linking.openURL('sms:0888261095')} } hinhanh={require('../Images/gopy.png')} noidung="Góp Ý">  </ListItemMenu>
                 <View style={{alignItems: 'center'}}>         
                     <Text style={{ marginTop: 5,marginBottom: 10, color: 'gray', fontSize: 15}}> Made by ❤️ BVU </Text>
                </View>               
            </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
input:{
alignItems: 'center',
marginBottom:15,
marginTop: 10,
borderColor:'gray',
borderWidth:1,
borderRadius:13,
width: 200,
height:40,
color:"#aaafb7",
fontSize:14,
backgroundColor: 'white',
padding:10
}
});
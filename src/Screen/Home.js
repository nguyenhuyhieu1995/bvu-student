import React, { Component } from 'react';
import { View,Animated,ScrollView,Text,Alert, StyleSheet, TextInput,Image,Dimensions } from 'react-native';
import ListItem from '../Components/ListItem';
import LifeMotto from '../Components/LifeMotto';



const {width, height} = Dimensions.get('window');

export default class Home extends Component {
   state = {
        time: new Animated.Value(0),
        timkiem: "",

    }

    componentDidMount() {
        Animated.timing(
            this.state.time,
            {
                toValue: 2,
                duration: 3000,
            }
        ).start();
    }

   _timKiem(){
         this.props.navigation.navigate('TimKiemScreen',{timkiem: this.state.timkiem});
   }



    render() {
         const opacity = this.state.time.interpolate({
            inputRange: [0,1,2],
            outputRange: [2,0,2]
        });

         const marginTop = this.state.time.interpolate({
            inputRange: [0,1,2],
            outputRange: [10,15,10]
        });

        const marginLeft = this.state.time.interpolate({
            inputRange: [0,1,2],
            outputRange: [-800,-300,5]
        });
          return (
            <ScrollView>

            <View style={{flex: 1, backgroundColor: '#FFCC33', alignItems: 'center'}}>
                <Animated.Image source={require('../Images/logo.png')} style = {{opacity,width: 120, height: 120, marginTop: 35 ,marginBottom: 10, borderColor:'gray', borderWidth:1,borderRadius: 25,}} />
              <TextInput underlineColorAndroid="white"  onSubmitEditing={this._timKiem.bind(this)} onChangeText={(timkiem) => {this.setState({timkiem})} }   placeholder="Tìm kiếm trên bvu.edu.vn ?" style={styles.input}  ></TextInput> 
            </View>
            
            <View style={{backgroundColor: 'white', flexDirection: 'column', }}>
                    <View style={styles.dong}>
                        <View style={styles.cot}>
                                 <ListItem hanhdong= {()=> {this.props.navigation.navigate('NewsScreen')}} hinhanh={require('../Images/tintuc.png')} noidung="Tin Tức">  </ListItem>
               
                           </View>
                            <View style={styles.cot}>
                                   <ListItem hanhdong= {()=> {this.props.navigation.navigate('SinhVienScreen')}} hinhanh={require('../Images/sinhvien.png')} noidung="Sinh Viên">  </ListItem> 
                                 
                           </View>
                            <View style={styles.cot}>
                                     <ListItem hanhdong= {()=> { this.props.navigation.navigate('XemDiemScreen')} } hinhanh={require('../Images/xemdiem.png')} noidung="Xem Điểm">  </ListItem>
               
                           </View>

                    </View>
                    <View style={styles.dong}>
                                 <View style={styles.cot}>
                                      <ListItem hanhdong= {()=> { this.props.navigation.navigate('XemLichHocScreen')}  } hinhanh={require('../Images/lichhoc.png')} noidung="Xem Lịch Học">  </ListItem>
                                      
                
                           </View>
                            <View style={styles.cot}>
                                     <ListItem hanhdong= {()=> { this.props.navigation.navigate('XemLichThiScreen')} } hinhanh={require('../Images/lichthi.png')} noidung="Xem Lịch Thi">  </ListItem>
               
                           </View>
                            <View style={styles.cot}>
                                       <ListItem hanhdong= {()=> { this.props.navigation.navigate('XemCongNoScreen')}  } hinhanh={require('../Images/congno.png')} noidung="Xem Công Nợ">  </ListItem>
                           
                           </View>
                    </View>
                    <View style={styles.dong}>
                            <View style={styles.cot}>
                                 <ListItem hanhdong= {()=> {this.props.navigation.navigate('TinhDiemScreen')}} hinhanh={require('../Images/tinhdiem.png')} noidung="Kế Hoạch Học Tập">  </ListItem>  

                                            
                           </View>
                            <View style={styles.cot}>
                                     <ListItem hanhdong= {()=> { this.props.navigation.navigate('CLBScreen')} } hinhanh={require('../Images/clb.png')} noidung="Câu lạc bộ">  </ListItem>
                                 </View>
                            <View style={styles.cot}>
                                <ListItem hanhdong= {()=> {this.props.navigation.navigate('SettingScreen')}} hinhanh={require('../Images/caidat.png')} noidung="Cài Đặt">  </ListItem>
                                 </View>

                         </View>
                    




                   </View>
                         
                
                <View style={{marginTop: 15, paddingLeft: 5, paddingRight: 5, marginLeft: 5, marginRight: 5 , backgroundColor: "#EEEEEE", borderColor:'gray',
            borderWidth:1,
            borderRadius:13, }}> 
                    <Text style={{paddingTop: 1, }}></Text>
                    <LifeMotto/>
                     <Text style={{paddingTop: 1, }}></Text>
                </View>

                 <View style={{alignItems: 'center'}}>         
                     <Animated.Text style={{ marginLeft,paddingLeft: 10, paddingRight: 10,marginRight: 5,marginTop: 10, color: 'gray', fontSize: 15}}> Made by ❤️ BVU </Animated.Text>
                </View>    
            </ScrollView>


        );
    }
}

var styles = StyleSheet.create({
    input:{
        
        alignItems: 'center',
        marginBottom:20,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:13,
        width: 250,
        height:40,
        color:"#aaafb7",
        fontSize:16,
        backgroundColor: 'white',
        padding:10,
      
        },
    dong:{
        borderColor: 'gold',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
    },
    cot:{
        borderColor: 'gold',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
       
    }

});
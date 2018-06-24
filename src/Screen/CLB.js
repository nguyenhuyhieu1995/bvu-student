import React, { Component } from 'react';
import { ScrollView,View,TouchableOpacity, Image,Text } from 'react-native';

import clbitem from '../Images/clbitem.png';

class CLBItem extends Component{
        render() {
        return (
            <TouchableOpacity style={{marginTop: 20, marginLeft: 5,flexDirection: 'row', alignItems: 'center'}} onPress={this.props.hanhdong}>
                    <Image source= {this.props.hinhanh} style = {{width: 35, height: 35, borderColor:'gray', borderWidth:0,borderRadius: 25}}>
                    </Image>
                    <Text style={{fontSize: 17, color: 'orange', paddingRight: 50, paddingLeft: 5 }}> {this.props.noidung} </Text>
                </TouchableOpacity>
        );
    }
}

export default class CLB extends Component {
     render() {
        return (
            <View style={{flexDirection: 'column', flex: 10}}>
             <View style={{flex: 8,}}>
                    <CLBItem  hanhdong= {()=> {this.props.navigation.navigate('CLBLopTruongScreen')}} hinhanh={clbitem} noidung="CLB Lớp Trưởng"/>
                    <CLBItem  hanhdong= {()=> {this.props.navigation.navigate('CLBKyNangEESScreen')}} hinhanh={clbitem} noidung="CLB Kỹ Năng EES"/>
                    <CLBItem  hanhdong= {()=> {this.props.navigation.navigate('CLBTiengAnhScreen')}} hinhanh={clbitem} noidung="CLB Tiếng Anh"/>
                    <CLBItem  hanhdong= {()=> {this.props.navigation.navigate('CLBTiengNhatScreen')}} hinhanh={clbitem} noidung="CLB Tiếng Nhật"/>
                    <CLBItem  hanhdong= {()=> {this.props.navigation.navigate('CLBNguoiMangHoiAmScreen')}} hinhanh={clbitem} noidung="CLB Người Mang Hơi Ấm"/>
                    <CLBItem  hanhdong= {()=> {this.props.navigation.navigate('CLBESCScreen')}} hinhanh={clbitem} noidung="CLB Thể Thao - Điện Tử"/>
            
            </View>  

                    </View>
            
        );
    }
    
}
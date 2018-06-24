import React, { Component } from 'react';
import { ScrollView,View,TouchableOpacity, Image,Text } from 'react-native';


class TinhDiemItem extends Component{
        render() {
        return (
            <TouchableOpacity style={{marginTop: 20, marginLeft: 5,flexDirection: 'row', alignItems: 'center'}} onPress={this.props.hanhdong}>
                    <Image source= {this.props.hinhanh} style = {{width: 39, height: 39, borderColor:'gray', borderWidth:0,borderRadius: 25}}>
                    </Image>
                    <Text style={{fontSize: 18, color: 'orange', paddingRight: 50, paddingLeft: 5 }}> {this.props.noidung} </Text>
                </TouchableOpacity>
        );
    }
}

export default class TinhDiem extends Component {
     render() {
        return (
            <View style={{flexDirection: 'column', flex: 10}}>
             <View style={{flex: 8,}}>
                    <TinhDiemItem  hanhdong= {()=> {this.props.navigation.navigate('DiemQuaMonScreen')}} hinhanh={require('../Images/quamon.png')} noidung="Điểm qua môn?"/>
                    <TinhDiemItem  hanhdong= {()=> {this.props.navigation.navigate('DiemDatMucTieuScreen')}} hinhanh={require('../Images/datmuctieu.png')} noidung="Điểm đạt mục tiêu?"/>
                    
                    {/* <TinhDiemItem  hanhdong= {()=> {this.props.navigation.navigate('KeHoachHocTapScreen')}} hinhanh={require('../Images/caidat.png')} noidung="Kế hoạch học tập?"/> */}
                    <TinhDiemItem  hanhdong= {()=> {this.props.navigation.navigate('QuyDinhTinhDiemScreen')}} hinhanh={require('../Images/quydinh.png')} noidung="Quy định tính điểm"/>
                    <TinhDiemItem  hanhdong= {()=> {this.props.navigation.navigate('HuongDanSuDungScreen')}} hinhanh={require('../Images/thongtin.png')} noidung="Hướng dẫn sử dụng"/>
                 </View>  

                 
            </View>
            
        );
    }
    
}
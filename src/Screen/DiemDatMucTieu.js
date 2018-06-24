import React, { Component } from 'react';
import { Button,Alert,ScrollView,View,TouchableOpacity,TextInput,Dimensions, Text } from 'react-native';

//import Admob from '../Components/Admob';

const {width, height} = Dimensions.get('window');


export default class DiemDatMucTieu extends Component {
           constructor(props){
          super(props);
            
            this.state = {         
           tongtinchidahoc: 0,
           diemtbc: 0,
           sotinchihockicantinh: 0,
           diemmuctieumuoncaithien: 0,
       
        }; 
    }  

    _ketQua(){
         //gán chuyển giá trị 
         var _tongtinchidahoc = parseFloat(this.state.tongtinchidahoc);
         var _diemtbc = parseFloat(this.state.diemtbc);
         var _sotinchihockycantinh = parseFloat(this.state.sotinchihockicantinh);
         var _diemmuctieumuoncaithien = parseFloat(this.state.diemmuctieumuoncaithien);
         
         var _sodiemcandattronghocky = _sotinchihockycantinh * _diemmuctieumuoncaithien;
          var _sodiemchenhlech = _diemmuctieumuoncaithien - _diemtbc;
          var _sodiemcanthem = _tongtinchidahoc * _sodiemchenhlech;
          var _tongsodiemcandedatmuctieu = _sodiemcandattronghocky + _sodiemcanthem;
          var _sodiemtbchockynaycandedatmuctieu =  (_tongsodiemcandedatmuctieu/_sotinchihockycantinh).toFixed(2);
          var _diemtoidadattoigiasukhidatmuoidiem = ((_tongtinchidahoc * _diemtbc + _sotinchihockycantinh*10)/(_tongtinchidahoc+_sotinchihockycantinh)).toFixed(2) ;

         if(
            this.state.tongtinchidahoc == "" || this.state.diemtbc == "" || this.state.sotinchihockicantinh =="" || this.state.diemmuctieumuoncaithien == ""){
            Alert.alert('Bạn chưa nhập gì? ', 'Bạn vui lòng nhập điểm vào để mình tính cho bạn nhé.');
        }
        
        else if ( _diemtbc > 10 || _diemmuctieumuoncaithien> 10||_tongtinchidahoc<0 || _diemtbc<0 ||_sotinchihockycantinh <0 ||_diemmuctieumuoncaithien <0 ){
            Alert.alert('Bạn nhập điểm gì kì vậy? ', 'Bạn vui lòng nhập điểm cho chính xác lại giùm mình nhé.');
     
        }

         else if ( _diemmuctieumuoncaithien < _diemtbc ){
            Alert.alert('Bạn nhập điểm gì kì vậy? ', 'Điểm cần cải thiện phải lớn hơn điểm trung bình chung chứ bạn.');
     
        }

        else if(_tongtinchidahoc>150){
                  Alert.alert('Có gì đó sai sai? ', 'Tổng tín chỉ phải dưới 150 chứ bạn nhỉ :P');
     
        }
         else if( _sotinchihockycantinh >130 ){
                  Alert.alert('Có gì đó sai sai? ', 'Sao số tín chỉ học kỳ đặt mục tiêu bạn nhập nhiều thế ?');
     
        }        
        else if(isNaN(this.state.diemmuctieumuoncaithien)||isNaN(this.state.diemtbc) || isNaN(this.state.sotinchihockicantinh) ||isNaN(this.state.tongtinchidahoc) ){
             Alert.alert('Ôi, cẩn thận bạn ơi ', 'Mình nhìn thấy bạn nhập có gì đó sai rồi kìa *lêu lêu* ');
     
        }
       else if( Number.isInteger(_tongtinchidahoc) == false ){
             Alert.alert('Số tín chỉ có lẻ không? ', 'Số tín chỉ phải là số nguyên từ 0 tới 150 bạn nhé. ');
     
        }
        else if( Number.isInteger(_sotinchihockycantinh) == false ){
             Alert.alert('Số tín chỉ có lẻ không? ', 'Số tín chỉ học kỳ đặt mục tiêu phải là số nguyên từ 0 tới 30 bạn nhé. ');
     
        }     
        else {
                   //thuc hien tinh toan
                if(_sodiemtbchockynaycandedatmuctieu > 10) {
                    this.setState({
                    ketqua: "Không thể vì mỗi môn tối đa là 10 điểm. Giả sử bạn đạt 10 điểm thì điểm nâng tối đa là " + _diemtoidadattoigiasukhidatmuoidiem + " điểm thôi.",  
                    })
                }
                else{
                    this.setState({
                    ketqua: "Chúc mừng, bạn có khả năng hoàn thành mục tiêu với điều kiện trung bình các môn học kỳ đặt mục tiêu cần trên " + _sodiemtbchockynaycandedatmuctieu + " điểm"
            
                })
                } 
        }
       
        



    }



    render() {
        return (
         
          <View style={{flex: 10,flexDirection: 'column',backgroundColor: '#EEEEEE'}}>
            <View style={{flex: 8,}}>
             <View style={{ alignItems: 'center',flexDirection: 'row'}}>
                 <Text>Tổng tín chỉ đã học (được tính):</Text> 
                 <TextInput maxLength={4} keyboardType="numeric" onChangeText={(tongtinchidahoc)=>{this.setState({tongtinchidahoc})}} style={{width}}></TextInput>
             </View>

              <View style={{alignItems: 'center',flexDirection: 'row'}}>
                 <Text>Điểm TBC tích lũy các tín chỉ trên:</Text> 
                 <TextInput maxLength={4} keyboardType="numeric" onChangeText={(diemtbc)=>{this.setState({diemtbc})}} style={{width}}></TextInput>
             </View>


              <View style={{alignItems: 'center',flexDirection: 'row'}}>
                 <Text>Số tín chỉ học kỳ đặt mục tiêu:</Text> 
                 <TextInput maxLength={4} keyboardType="numeric" onChangeText={(sotinchihockicantinh)=>{this.setState({sotinchihockicantinh})}} style={{width}}></TextInput>
             </View>

              <View style={{alignItems: 'center',flexDirection: 'row'}}>
                 <Text>Điểm TBC tích lũy muốn cải thiện: </Text> 
                 <TextInput maxLength={4} keyboardType="numeric" onChangeText={(diemmuctieumuoncaithien)=>{this.setState({diemmuctieumuoncaithien})}} style={{width}}></TextInput>
             </View>
             
             <Button color="orange" title="Bắt đầu tính" onPress={this._ketQua.bind(this)}> </Button> 
             <Text style={{marginTop: 10, fontSize: 16}}>{this.state.ketqua}</Text>
             </View>
              
          </View> 
         
        );
    }
}
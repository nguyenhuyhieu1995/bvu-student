import React, { Component } from 'react';
import { Image,Alert,ScrollView,View,TouchableOpacity,TextInput,Dimensions, Text } from 'react-native';
import huongdansudung from '../Images/huongdansudung.png';

//import Admob from '../Components/Admob';

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
export default class HuongDanSuDung extends Component {
     
    render() {    
         
        return (
         
          <ScrollView style={{flex: 1,flexDirection: 'column',backgroundColor: '#EEEEEE'}}>
               <Headder> Điểm qua môn </Headder>
               <Text style={{fontSize: 16, paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap'}}>Bạn nhập vào điểm thường kì và giữa kì. Ứng dụng sẽ cho bạn biết bạn cần mấy điểm thi cuối kì để qua môn.</Text>

                 <Headder> Điểm đạt mục tiêu </Headder>
               <Text style={{fontSize: 16,paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap'}}>Bạn nhập vào tổng tín chỉ đã học (được tính), điểm trung bình chung tích lũy của các tín chỉ đã học (đã tổng kết), số tín chỉ học kỳ đặt mục tiêu và điểm trung bình chung tích lũy muốn cải thiện. Ứng dụng sẽ cho bạn biết để đạt mục tiêu cải thiện điểm trung bình tích lũy thì trong học kỳ đặt mục tiêu bạn cần trung bình các môn tối thiểu bao nhiêu điểm. Từ đó bạn có kế hoạch sắp xếp để học tập đạt mục tiêu đó.     
                    Ứng dụng sẽ cho bạn biết bạn cần mấy điểm thi cuối kì để qua môn.</Text>
           <View style={{alignItems: "center" }}><Image style={{  flex: 1,
        resizeMode: 'contain',height: 100, width}} source={huongdansudung}/>
            </View>
         <Text style={{color: 'red',fontSize: 16,paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap' }}>Lưu ý: Trang kết quả học tập có ghi tổng tín chỉ là có tính cả các tín chỉ của các môn không tính vào điểm trung bình chung tính lũy. Bạn cần lấy tổng tín chỉ - tổng tín chỉ không được tính (của các môn GDTC, GDQP,...) để được tổng tín chỉ đã học (được tính).</Text>
         <Text style={{fontSize: 16, marginBottom: 20, paddingLeft: 10, paddingRight: 10, flexWrap: 'wrap'}}>Ví dụ: Ở trên, mình có tổng tín chỉ là 110. Mình có học GDTC1 1 chỉ, GDTC2 1 chỉ, GDTC3 1 chỉ và GDQP 8 chỉ. Như vậy tổng tín chỉ đã học (được tính) của mình là 110-11 = 99 tín chỉ. Và 99 tín chỉ này có điểm trung bình chung tích lũy là 6.92 (theo hệ 10) như trang kết quả.</Text>
            
           
       
          </ScrollView>  
         
        );
    }
}
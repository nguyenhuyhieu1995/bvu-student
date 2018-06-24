import React, { Component } from 'react';
import { Alert,ScrollView,View,TouchableOpacity,TextInput,Dimensions, Text } from 'react-native';

//import Admob from '../Components/Admob';

const {width, height} = Dimensions.get('window');

class KetQua extends Component{
    render(){
        return(
            <View style={{ flexDirection: 'row', alignItems: 'center',flexWrap: 'wrap'}}>
            
            <Text style={{fontSize: 18}}>{this.props.noidung1} </Text>
            <Text style={{fontSize: 22,color: 'red'}}>{this.props.noidung2} </Text>
            <Text style={{fontSize: 18}}>{this.props.noidung3} </Text>
            <Text style={{fontSize: 18,}}>{this.props.dongvien} </Text>
            <Text style={{fontStyle: 'italic',fontSize: 18,}}>{this.props.nhanxet} </Text>
           
           
            </View>
        );
    }
}

export default class DiemQuaMon extends Component {
      constructor(props){
          super(props);
            
            this.state = {         
            diemthuongki: 0,
            diemgiuaki: 0,  
            ketqua: null,   
            thongbao1: '',
            thongbao2:'',       
        }; 
    }  

     _KetQua(){

       
       //Ngẫu nhiên động viên
        var dongvienArr = [
        "Cố gắng lên bạn nhé! ^.)  ",
        "Mọi người tin bạn làm được! 😳",
        "Ôn bài , làm bài là qua ngay mà ^^",
        "Mình nghĩ là chuyện nhỏ với bạn 😁 ^^",
        "Chúc bạn thành công !",
        "Qua môn nhớ mời mình đi nhậu nhé 🍺",
        "Giờ thì sắp xếp và chiến đấu đấu dành học bổng thôi ~))",
        "😎 Gia đình tin bạn, thầy cô tin bạn, bạn bè tin bạn, chỉ có mình là không tin bạn thôi. ahihi",
        " Làm ly bia rồi học bài thôi nào 🍺",
        "Qua môn này đâu có khó. Chỉ cần chịu học là qua thôi mà (-.-)",
        ];

        var dongvien = dongvienArr[Math.floor(Math.random()*dongvienArr.length)];

       //gắn chuyển giá trị của state diemthuongki và diemgiuaki sang Float và gán vào a,b
         var a = parseFloat(this.state.diemthuongki);
         var b = parseFloat(this.state.diemgiuaki);
        
        if(
            this.state.diemthuongki == "" || this.state.diemgiuaki == ""
        ){
            Alert.alert('Bạn chưa nhập gì? ', 'Bạn vui lòng nhập điểm vào để mình tính cho bạn nhé.');
        }
        else if (a>10 ||b>10 || a<0 ||b<0 ){
            Alert.alert('Bạn nhập điểm gì kì vậy? ', 'Bạn vui lòng nhập điểm cho chính xác lại giùm mình nhé.');
     
        }
        else if(isNaN(this.state.diemthuongki) || isNaN(this.state.diemgiuaki)){
             Alert.alert('Ôi, cẩn thận bạn ơi ', 'Bạn vui lòng nhập điểm cho chính xác lại giùm mình nhé.');
     
        }
        else {
                var kq = ((5-(a+b)*0.2)/0.6).toFixed(2); 
                

                this.setState({
                    ketqua: kq, 
                    noidung1: " Bạn cần ",
                    noidung2: " điểm thi cuối kỳ.",
                    dongvien,  
                   nhanxet: "",
                 
                })  
                

                 //nhận xét
                    if (a>=9 && b >= 9)   {
                        this.setState({                  
                            nhanxet: " Mình thực sự rất ấn tượng với số điểm của bạn. Cả 2 đều cao nhìn mà yêu luôn bạn <3 ",
                            })
                    }  
                    else if (a>=9 && b <5 )   {
                        this.setState({                  
                            nhanxet: " Điểm siêng đi học cao mà sao điểm giữa kì thấp thế?",
                            })
                    } 
                    else if (a<5 && b >=9 )   {
                        this.setState({                  
                            nhanxet: " Cúp học dữ quá hay sao mà điểm thấp vậy bạn? Mà bù lại điểm giữa kì cũng cao chứ nhỉ. Có copy bài hông đó? xD",
                            })
                    } 
                    else if (a<5 && b <5 )   {
                        this.setState({                  
                            nhanxet: " Huhu...cả 2 cột điểm thấp vậy thì cuối kì phải cố gắng thật nhiều nhiều vào bạn nhé. :3",
                            })
                    } 
                    else if(
                        a>=9
                    ){             
                            this.setState({                  
                            nhanxet: " Ôi... điểm thường kì của bạn cao thế. Mình đoán là bạn chăm đi học lắm đây :D",
                            })   
                    }
                    else if (a<5)   {
                        this.setState({                  
                            nhanxet: " Làm gì mà điểm thường kì thấp vậy?. Chắc cúp học nhiều lắm hở? :3",
                            })
                    }
                    else if (b>=9)   {
                        this.setState({                  
                            nhanxet: " Wow... bạn thật tuyệt. Nhìn điểm giữa kì mà mê luôn <3",
                            })
                    } 
                    else if (b<5)   {
                        this.setState({                  
                            nhanxet: " Ối giời ơi, học với chả hành. điểm giữa kì gì mà tệ vậy :3",
                            })
                    }  
                                    
                    else{
                            this.setState({                  
                            nhanxet: "",
                            })
                        }
        
         }
         
     };
    render() {
       

         
        return (
         
            <View style={{flexDirection: 'column', flex: 10, backgroundColor: '#EEEEEE'}}>
             <View style={{flex: 8,}}> 
              <View  style={{paddingLeft: 5,paddingBottom: 5,alignItems: 'center',flexDirection: 'row',backgroundColor: '#DDDDDD',}}>
              <Text style={{fontSize: 18}}>Điểm thường kỳ: </Text>
              <TextInput maxLength={4} keyboardType="numeric" onChangeText={(diemthuongki)=>{this.setState({diemthuongki})}} style={{width}}></TextInput>
              </View>  
                <View style={{paddingLeft: 5,paddingBottom: 5,alignItems: 'center',flexDirection: 'row',backgroundColor: '#DDDDDD'}}>
              <Text style={{fontSize: 18}}>Điểm giữa kỳ: </Text>
              <TextInput  maxLength={4} keyboardType="numeric" onChangeText={(text) => {this.setState({diemgiuaki: text})} } style={{width}}></TextInput>
                </View> 
             

             <View style={{paddingTop: 5,paddingBottom: 15,alignItems: 'center', backgroundColor: '#DDDDDD'}}>
                  <TouchableOpacity onPress={this._KetQua.bind(this)} style={{ borderColor:'gray',borderWidth:1,borderRadius:13,alignItems: 'center',backgroundColor: 'gold', width: width/2,}}>
                        <Text style={{fontSize: 20}}>XEM KẾT QUẢ</Text>     
                  </TouchableOpacity>
              </View>

            <View style={{backgroundColor: 'pink', alignItems: 'center'}}>
                <Text></Text>
            </View>
            <View style={{paddingTop: 10, flexWrap: 'wrap'}}>               
                <KetQua noidung1= {this.state.noidung1} noidung2={this.state.ketqua} noidung3={this.state.noidung2} dongvien={this.state.dongvien} nhanxet={this.state.nhanxet}/>
            </View>
            </View>
        </View>  
         
        );
    }
}
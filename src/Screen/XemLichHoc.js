import React, { Component } from 'react';
import { AsyncStorage,View } from 'react-native';

import WebViewController from '../Components/WebViewController';

export default class XemLichHoc extends Component {
      constructor(props){
         super(props);
         this.state = {
             masosinhvien: "",
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

     
    render() {
        return (      
                  <WebViewController url={"http://sinhvien.bvu.edu.vn/XemLichHoc.aspx?MSSV="+this.state.masosinhvien} />
        );
    }
}
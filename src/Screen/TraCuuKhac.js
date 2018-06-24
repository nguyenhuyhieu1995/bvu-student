import React, { Component } from 'react';
import {View} from 'react-native';

import WebViewController from '../Components/WebViewController';


export default class TraCuuKhac extends Component {
    
    render() {       
         
        return (       
            <WebViewController url={"http://sinhvien.bvu.edu.vn/TraCuuThongTin.aspx"} />
         );
    }
}
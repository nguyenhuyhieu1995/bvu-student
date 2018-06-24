import React, { Component } from 'react';
import {Alert, NetInfo,View, WebView } from 'react-native';

import WebViewController from '../Components/WebViewController';

export default class SinhVien extends Component {
    render() {
        return (                    
               <WebViewController url="http://sinhvien.bvu.edu.vn/"/>
           
            
        );
    }
}
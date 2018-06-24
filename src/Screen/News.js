import React, { Component } from 'react';
import {Alert, NetInfo,View, WebView } from 'react-native';

import WebViewController from '../Components/WebViewController';

export default class TinTuc extends Component {
    render() {
        return (                    
               <WebViewController url="http://bvu.edu.vn/tt-sk"/>
           
            
        );
    }
}
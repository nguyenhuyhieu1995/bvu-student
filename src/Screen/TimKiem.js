import React, { Component } from 'react';
import { View} from 'react-native';

import WebViewController from '../Components/WebViewController';


export default class TimKiem extends Component {
     
    render() {
         return (       
          <WebViewController url={"https://www.google.com.vn/search?q=site:bvu.edu.vn "+this.props.navigation.state.params.timkiem} />
     
        );
    }
}
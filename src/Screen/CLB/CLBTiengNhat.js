import React, { Component } from 'react';
import { View } from 'react-native';
import CLBController from '../../Components/CLBController';

import clbtiengnhat from '../../Images/clbtiengnhat.png';

export default class CLBTiengNhat extends Component {

    render() {

        return (
        
          <CLBController hinhanh={clbtiengnhat} mota="CLB Tiếng Nhật (Sauya CLB) - Nơi Giao lưu, học hỏi, gắn kết niềm đam mê và tình yêu Tiếng Nhật, Văn hóa và con người Nhật Bản!" 
 facebook="https://www.facebook.com/groups/660791477297887/" mobile ="01687587734" email="" />
            
        );
    }
}
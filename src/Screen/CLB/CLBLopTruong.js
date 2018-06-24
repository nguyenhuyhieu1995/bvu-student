import React, { Component } from 'react';
import { View } from 'react-native';
import CLBController from '../../Components/CLBController';

import clbloptruong from '../../Images/clbloptruong.png';

export default class CLBLopTruong extends Component {

    render() {

        return (
        
          <CLBController hinhanh={clbloptruong} mota="CLB Lớp trưởng là một câu lạc bộ dành cho các bạn lớp trưởng cùng nhau trao đổi, thảo luận , đưa ra quan điểm, góp ý vì sự phát triển của nhà trường, vì một nền Giáo dục Việt Nam Nhân bản và Khai phóng." facebook="https://www.facebook.com/groups/1421979831442386/" mobile ="" email="" />
            
        );
    }
}
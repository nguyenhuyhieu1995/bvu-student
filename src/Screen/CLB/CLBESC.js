import React, { Component } from 'react';
import { View } from 'react-native';
import CLBController from '../../Components/CLBController';

import esc from '../../Images/esc.png';

export default class CLBESC extends Component {

    render() {

        return (
        
          <CLBController hinhanh={esc} mota="Ngày 3/4/2017, Hội Sinh viên Trường Đại học Bà Rịa-Vũng Tàu đã ra quyết định thành lập CLB Thể thao điện tử BVU - Esports for Student Campus (viết tắt là ESC BVU). CLB được thành lập với hơn 43 thành viên có chung niềm đam mê tham gia sinh hoạt với nhau, tổ chức nhiều sự kiện, giải đấu về game Liên Minh Huyền Thoại, FIFA Online 3, ..."
 facebook="https://www.facebook.com/ESCBVU/" mobile ="" email="" />
            
        );
    }
}
import React, { Component } from 'react';
import { View } from 'react-native';
import CLBController from '../../Components/CLBController';

import clbnguoimanghoiam from '../../Images/clbnguoimanghoiam.png';

export default class CLBNguoiMangHoiAm extends Component {

    render() {

        return (
        
          <CLBController hinhanh={clbnguoimanghoiam} mota="Hội từ thiện Người Mang Hơi Ấm được thành lập bởi một số bạn trẻ hiện là sinh viên cùng các nhà hảo tâm với ước mong hổ trợ một phần nào đó cho các gia đình, cá nhân khó khăn trong xã hội, các hoàn cảnh neo đơn, đồng bào bị thiên tai bão lụt, nâng đỡ các em học sinh nghèo hiếu học, khám bệnh từ thiện, các chương trình mỗ mắt nhân đạo... "
 facebook="https://www.facebook.com/nguoimanghoiam/" mobile ="01687580844" email="nguoimanghoiam2015@gmail.com" />
            
        );
    }
}
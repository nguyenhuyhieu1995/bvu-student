import React, { Component } from 'react';
import { View } from 'react-native';
import CLBController from '../../Components/CLBController';

import clbtienganh from '../../Images/clbtienganh.png';

export default class CLBTiengAnh extends Component {

    render() {

        return (
        
          <CLBController hinhanh={clbtienganh} mota="CLB Tiếng Anh (English Speaking Club) là một câu lạc bộ dành cho các bạn sinh viên trong trường đam mê và muốn học tiếng Anh. Nhóm có tổ chức các sự kiện để các bạn cùng nhau học tập, cùng nhau chia sẻ về tiếng Anh."
 facebook="https://www.facebook.com/bvuesc/" mobile ="0979535045" email="bvuesc@gmail.com" />
            
        );
    }
}
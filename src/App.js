import React, { Component } from 'react';
import {Alert,
    AsyncStorage,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import {TabNavigator, DrawerNavigator,StackNavigator} from 'react-navigation';

import Home from './Screen/Home';
import MenuDrawer from './Screen/MenuDrawer';
import News from './Screen/News';
import Setting from './Screen/Setting';
import Info from './Screen/Info';
import TinhDiem from './Screen/TinhDiem';
import DiemQuaMon from './Screen/DiemQuaMon';
import DiemDatMucTieu from './Screen/DiemDatMucTieu';
import QuyDinhTinhDiem from './Screen/QuyDinhTinhDiem';
import HuongDanSuDung from './Screen/HuongDanSuDung';
import TimKiem from './Screen/TimKiem';
import SinhVien from './Screen/SinhVien';
import XemDiem from './Screen/XemDiem'
import XemLichHoc from './Screen/XemLichHoc';
import XemLichThi from './Screen/XemLichThi';
import XemCongNo from './Screen/XemCongNo';
import TraCuuKhac from './Screen/TraCuuKhac';
import CLB from './Screen/CLB';
import CLBKyNangEES from './Screen/CLB/CLBKyNangEES';
import CLBTiengAnh from './Screen/CLB/CLBTiengAnh';
import CLBTiengNhat from './Screen/CLB/CLBTiengNhat';
import CLBLopTruong from './Screen/CLB/CLBLopTruong';
import CLBNguoiMangHoiAm from './Screen/CLB/CLBNguoiMangHoiAm';
import CLBESC from './Screen/CLB/CLBESC';

import OneSignal from 'react-native-onesignal';


const {width, height} = Dimensions.get('window');


export const StackNavigatorApp = StackNavigator({

    HomeScreen: {
        screen: Home,   
          navigationOptions: {
            title: 'Trang chủ',
            header: null,
        }  
         
    },
    TimKiemScreen:{
         screen: TimKiem,
         navigationOptions: {
            title: 'Tìm kiếm'
        }
    },
    NewsScreen:{
         screen: News,
         navigationOptions: {
            title: 'Tin Tức'
        }
    },

    SinhVienScreen:{
         screen: SinhVien,
         navigationOptions: {
            title: 'Sinh viên'
        }
    },

    XemDiemScreen:{
         screen: XemDiem,
         navigationOptions: {
            title: 'Xem điểm'
        }
    },

    XemLichHocScreen:{
         screen: XemLichHoc,
         navigationOptions: {
            title: 'Xem lịch học'
        }
    },

    XemLichThiScreen:{
         screen: XemLichThi,
         navigationOptions: {
            title: 'Xem lịch thi'
        }
    },


    XemCongNoScreen:{
         screen: XemCongNo,
         navigationOptions: {
            title: 'Xem công nợ'
        }
    },

    TraCuuKhacScreen:{
         screen: TraCuuKhac,
         navigationOptions: {
            title: 'Tra cứu khác'
        }
    },

     TinhDiemScreen:{
         screen: TinhDiem,
         navigationOptions: {
            title: 'Kế hoạch học tập'
        }
    },

     DiemQuaMonScreen:{
         screen: DiemQuaMon,
         navigationOptions: {
            title: 'Điểm qua môn?'
        }
    },

    DiemDatMucTieuScreen:{
         screen: DiemDatMucTieu,
         navigationOptions: {
            title: 'Điểm đạt mục tiêu?'
        }
    },

     
   QuyDinhTinhDiemScreen:{
         screen: QuyDinhTinhDiem,
         navigationOptions: {
            title: 'Quy định tính điểm'
        }
    },   
    HuongDanSuDungScreen:{
         screen: HuongDanSuDung,
         navigationOptions: {
            title: 'Hướng dẫn sử dụng'
        }
    },  
     SettingScreen:{
         screen: Setting,
         navigationOptions: {
            title: 'Cài đặt'
        }
    },

     InfoScreen:{
         screen: Info,
         navigationOptions: {
            title: 'Thông tin'
        }
    },

     CLBScreen:{
         screen: CLB,
         navigationOptions: {
            title: 'Câu lạc bộ'
        }
    },
    CLBKyNangEESScreen:{
         screen: CLBKyNangEES,
         navigationOptions: {
            title: 'CLB Kỹ năng EES'
        }
    },

    CLBLopTruongScreen:{
         screen: CLBLopTruong,
         navigationOptions: {
            title: 'CLB Lớp trưởng'
        }
    },

    CLBTiengAnhScreen:{
         screen: CLBTiengAnh,
         navigationOptions: {
            title: 'CLB Tiếng anh'
        }
    },

    CLBTiengNhatScreen:{
         screen: CLBTiengNhat,
         navigationOptions: {
            title: 'CLB Tiếng nhật'
        }
    },

    CLBNguoiMangHoiAmScreen:{
         screen: CLBNguoiMangHoiAm,
         navigationOptions: {
            title: 'CLB Người mang hơi ấm'
        }
    },


    CLBESCScreen:{
         screen: CLBESC,
         navigationOptions: {
            title: 'CLB Thể thao - Điện tử'
        }
    },

});


// export const App3 = TabNavigator({
//     HomeScreen:{
//         screen: App2,
//         navigationOptions: {       
//         tabBarLabel: 'Trang chủ',
//               tabBarIcon: ({ tintColor }) => (
//               <Image source={require('./Images/thongtin.png')}
//                  style={{ width: 20, height: 20, tintColor: 'black'}}/>
//         ),
        
//       }
//        },
//     NewsScreen:{
//          screen: News,
//          navigationOptions: {
//               tabBarLabel: 'Tin Tức',
//               tabBarIcon: ({ tintColor }) => (
//               <Image source={require('./Images/tinhdiem.png')}
//                  style={{ width: 20, height: 20, tintColor: 'black'}}/>
//         ),
//         }
//     }, 

//     SettingScreen:{
//          screen: Setting,
//          navigationOptions: {
//               tabBarLabel: 'Cài đặt',
//               tabBarIcon: ({ tintColor }) => (
//               <Image source={require('./Images/congno.png')}
//                  style={{ width: 20, height: 20, tintColor: 'black'}}/>
//         ),
//         }
//     }, 

// },

//  {
//        tabBarPosition: 'bottom',
//        swipeEnabled: true,
//        animationEnabled: false,
//        tabBarOptions: {
//             showIcon: true,
//             showLabel: false,
//              activeTintColor: 'blue',
//              inactiveTintColor: 'pink',
//              pressColor: 'white',
             
//              //activeBackgroundColor and inactiveBackgroundColor only for iOS.
//              activeBackgroundColor: '#EEEEEE',
//              inactiveBackgroundColor: '#000000',           
//              labelStyle: {
//                  fontSize: 11,
//                          },
//              style: {
//                     backgroundColor: '#EEEEEE',
//                }, 
//              tabStyle: {
//                   justifyContent: 'center',
//                   alignItems: 'center',
//             },           
//             indicatorStyle: {
//                  borderBottomColor: 'red',
//                  borderBottomWidth: 1,
//             },
//       }
//   }
// );
// App3.navigationOptions = {
//   title: "Tab example"
// };

const DrawerNavigatorApp = DrawerNavigator({
    HomeScreen:{
        screen: StackNavigatorApp,
       },
},
    {
        drawerWidth: width/1.3,
        drawerPosition: 'center',
        contentComponent: props => <MenuDrawer {...props}/>
    

});

export default class App extends Component {
     constructor(){
        super();
        this.state = {firstLaunch: null};
    }
   
     
    render() {   
         if(this.state.firstLaunch === null){
           return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
       }else if(this.state.firstLaunch == true){
        //    return <Setting/>
          Alert.alert('Chào mừng bạn đến với BVU Student','Bạn cần thiết lập MSSV ở mục Cài Đặt để có thể xem điểm, lịch học, lịch thi, công nợ,... chính xác. Xin cám ơn! ',  [
                    {text: 'OK', onPress: () => {} },                  
                   
                ],
                { cancelable: false });
           return (                
                    <DrawerNavigatorApp/>             
                
           );
       }else{
           return (         
        
                    <DrawerNavigatorApp/>                
              
        );
       }

    
    }

     componentDidMount(){
          OneSignal.configure({});
          
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if(value == null){
                 AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                 this.setState({firstLaunch: true});
            }
            else{
                  AsyncStorage.setItem('alreadyLaunched', 'false'); 
                 this.setState({firstLaunch: false});
            }}) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
    }


}



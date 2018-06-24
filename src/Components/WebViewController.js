import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NetInfo,
  View,
  Image,
  TouchableOpacity,
  WebView,
  Alert
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import back from '../Images/back.png';
import forward from '../Images/forward.png';
import reload from '../Images/reload.png';

const WEBVIEW_REF = "WEBVIEW_REF";

export default class WebViewController extends Component {
     constructor(props) {
        super(props);
          this.state = { canGoBack: false,
          canGoForward: false };
            this._checkInternet();

  }

    _checkInternet(){

        NetInfo.isConnected.fetch().then(isConnected => {
         if(isConnected) {            // Alert.alert('Có gì đó Online? ', 'MSSV chỉ có số thôi bạn nhé :P ');
             
           }
        else{ 
             Alert.alert('Kết nối mạng thất bại',  'Có vẻ như mạng wifi hay mạng di động của bạn chưa được bật hoặc lỗi kết nối. Xin kiểm tra lại mạng internet và truy cập lại bạn nhé.',[ {text: 'Ok, đã hiểu', onPress: () => {}},] , { cancelable: false });
        }
      });
    
    }
    _loading(){
        return(
            <View style={{ flex: 1 }}>
                 <Spinner visible={true} textContent={""} textStyle={{color: '#FFF'}} />
            </View>
        );
    }

  render() {

    return (

      <View style={styles.container}>

        <WebView
          renderLoading={this._loading}
           startInLoadingState ={true}
          ref={WEBVIEW_REF}

          style={{flex: 1}}

          onNavigationStateChange={this.onNavigationStateChange.bind(this)}

          source={{uri: this.props.url}}
           

          /> 
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                       <View style={{alignItems: 'center',justifyContent: 'center',paddingTop: 3,backgroundColor: '#EEEEEE',flex: 3}}>
                                  <TouchableOpacity
                                  style={{alignItems: 'center',justifyContent: 'center'}}

                              disabled={!this.state.canGoBack}

                              onPress={this.onBack.bind(this)}

                              >
            
                              <Image source={back} style={{width: 20, height: 20}}/>
                              <Text style={{paddingBottom: 2}}>Quay lại</Text>
                          </TouchableOpacity>   
                                      
                       </View>
                     

                       <View style={{alignItems: 'center',justifyContent: 'center',paddingTop: 2,backgroundColor: '#EEEEEE',flex: 3}}>
                                <TouchableOpacity
               style={{alignItems: 'center',justifyContent: 'center'}}

            onPress={this.onReload.bind(this)}

            >
                 <Image onPress={()=> {this.onReload()}}  source={reload} style={{width: 20, height: 20,}}/>
                 <Text style={{paddingBottom: 2}}>Tải lại</Text>
                       
                  </TouchableOpacity> 

                    </View>  
                
             <View style={{alignItems: 'center',justifyContent: 'center',paddingTop: 2,backgroundColor: '#EEEEEE',flex: 3}}>
                        <TouchableOpacity  style={{alignItems: 'center',justifyContent: 'center'}}

            disabled={!this.state.canGoForward}

            onPress={this.onForward.bind(this)}

            >
                 <Image onPress={()=> {this.onForward()}}  source={forward} style={{width: 20, height: 20}}/>
                  <Text style={{paddingBottom: 2}}> Ngược lại</Text>
                       
                 </TouchableOpacity>   

                       </View>

              

  
          </View>
      </View>

    );

  }



  onBack() {

    this.refs[WEBVIEW_REF].goBack();

  }

onForward() {

    this.refs[WEBVIEW_REF].goForward();

  }

  onReload(){
    this.refs[WEBVIEW_REF].reload();  
   
  }

  onNavigationStateChange(navState) {

    this.setState({

      canGoBack: navState.canGoBack,
       canGoForward: navState.canGoForward

    });

  }

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5FCFF',

  },

  topbar: {

    height: 80,

    justifyContent: 'center',
  fontSize: 20,
    alignItems: 'center',

  },

  topbarText: {   

    justifyContent: 'center',
  fontSize: 20,
    alignItems: 'center',

  },

  topbarTextDisabled: {

    color: 'gray',
    fontSize: 16,

  }

});
import React from 'react'
import {
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native'
import {
    View,
    Text,
    Container
} from "native-base";
import Header from '../../components/common/Header'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 200,
      height: 200,
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderColor: 'steelblue',
      borderRadius: 20,
    },
    desc: {
        color: '#757575'
    }
  })

export default class ImageTest extends React.Component {

        render() {
            const nav = () => {
                this.props.navigation.navigate('Home');
            };
            return (
                <ImageBackground source={require('../../assets/splash.png')} style={{width: '100%', height: '100%'}}>
                    <Header title="Post" left={{title: 'Return', nav: nav}} />
                    <Text>ImageBackground</Text>
                    <View style={styles.container}>
                        <Text>from HTTP</Text>
                        <Image style={{width: 50, height: 50}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                        <Text>from Assets</Text>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/x.png')} />
                        <Text>from Base64</Text>
                        <Image
                            style={{
                                width: 51,
                                height: 51,
                                resizeMode: 'contain',
                            }}
                            source={{
                                uri:
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                            }}
                            />
                    </View>
                    
               </ImageBackground>
            )
        }

}
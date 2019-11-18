import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
    container: {
        flex:1,
        height: '100%',
        backgroundColor: '#ccc'
    },
    balanceBox: {
        height: 150,
        padding: 20,
        backgroundColor: '#9013fe'
    },
    main: {
        paddingHorizontal: 15
    },
    main_title: {
        fontSize: 15,
        color: '#FFF'
    },
    main_inner: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    main_inner_title: {
        flex: 1,
        fontSize: 30,
        color: '#FFF',
    },
    main_inner_icon: {
      flex: 1
    },
    fuel: {
        paddingHorizontal: 15,
        color: '#FFF'
    },
    menu: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 15
    },
    menu_item: {
        flex: 1,
        height: 120,
        paddingVertical: 10,
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    menu_item_icon: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: '#9013fe',
        borderRadius: 60,
        justifyContent:'center',
        alignItems: 'center',
    },
    menu_item_title: {
        paddingTop: 15,
    },
    foot: {
        height: 70,
        backgroundColor: '#9013fe',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    foot_item: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    foot_item_title: {
        color: '#FFF'
    },
    invisiable: {
        backgroundColor: 'transparent'
    },
    qr: {
        position: 'absolute', 
        left: '50%',
        width: 60,
        height: 60,
        borderRadius: 60,
        top: -30,
        marginLeft: -30,
        backgroundColor: '#2dbe60',
        justifyContent:'center',
        alignItems: 'center'
    }
})

const formatBalance = (bal) => {
    //return new Intl.NumberFormat('en-IN').format(bal)
    return (parseFloat(bal)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')
}
const Balance = ({main, fuel}) => {
   return (
    <View style={style.balanceBox}>
            <View style={style.main}>
                <Text style={style.main_title}>Main Balance</Text>
                <View style={style.main_inner}>
                    <Text style={style.main_inner_title}>{formatBalance(main)}</Text>
                    <TouchableOpacity style={style.main_inner_icon} onPress={() => alert('Pressed')}>
                      <Ionicons name="md-refresh" size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={style.fuel}>Fuel Balance {formatBalance(fuel)}</Text> 
    </View> 
   )
}

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };
const Menu = ({data, navigation}) => {
    return (
        <View style={style.menu}>
        <FlatList
            data={formatData(data, 3)}
            renderItem={({ item }) => {
                if(item.empty) {
                    return (
                        <View style={[style.menu_item, style.invisiable]}></View>
                    )
                }

                return (
                    <View style={style.menu_item}>
                    <TouchableOpacity style={style.menu_item} onPress={() => navigation.navigate(item.link)}>
                    <View style={style.menu_item_icon}>
                       <Ionicons name={item.icon} size={30} color="#9013fe" />
                    </View>
                    <Text style={style.menu_item_title}>{item.name}</Text>
                    </TouchableOpacity>
                    </View>
                )
            }}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            />
   </View>
    )
}

const FootNav = ({navs}) => {
    return (
        <View style={style.foot}>
            <View style={style.qr}>
              <TouchableOpacity>
                <Ionicons name="md-qr-scanner" size={30} color="#FFF" />
              </TouchableOpacity> 
            </View>
            {navs.map(item => {
                return (
                    <View style={style.foot_item}>
                        <TouchableOpacity style={style.foot_item} onPress={() => alert('Pressed')}>
                            <Ionicons name={item.icon} size={30} color="#FFF" />
                            <Text style={style.foot_item_title}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}
function AxelHome({navigation}) {
    const data = [
        {
            name: 'Send',
            icon: 'md-send',
            link: 'PinAndShare'
        },
        {
            name: 'Transactions',
            icon: 'md-list-box',
            link: 'PinAndShare'
        },
        {
            name: 'ATM',
            icon: 'md-wifi',
            link: 'PinAndShare'
        },
        {
            name: 'Masternodes',
            icon: 'md-link',
            link: 'PinAndShare'
        },
        {
            name: 'Pin and Share',
            icon: 'md-share',
            link: 'PinAndShare'
        }
    ]
    const navs = [
        {
            name: 'Home',
            icon: 'md-home'
        },
        {
            name: 'Profile',
            icon: 'md-person'
        }
    ]
    return (
        <SafeAreaView style={style.container}>
               <Balance  main="3232121.23" fuel="100" />
               <Menu data={data} navigation={navigation}/>
               <FootNav navs={navs}/>
        </SafeAreaView>
    );
}

export default AxelHome;
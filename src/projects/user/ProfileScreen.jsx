import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-navigation'
import commonStyles from '../../styles/commonStyles'
import { StyleSheet, Image, AsyncStorage, Alert } from 'react-native'
import { Container, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../../components/common/Footer'
import api from '../../config/api'

const uploadAvatar = () => {

}
const UserPanel = ({ user, navigation }) => {
    return (
        <View style={styles.user_panel}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
                <Image style={styles.user_panel_avatar} source={{ uri: user.avatar ? user.avatar : 'https://via.placeholder.com/150.png' }}></Image>
            </TouchableOpacity>
            <View style={styles.user_panel_info}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}><Text style={styles.user_panel_name}>{user.username ? user.username : 'unknow'}</Text></TouchableOpacity>
                    <Text style={styles.user_panel_slogan}>{user.slogan ? user.slogan : 'Not slogan yet!'}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
                    <Icon name="arrow-forward" style={styles.user_panel_info_icon}></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const LogoutButton = ({ navigation }) => {
    const handleLogout = () => {
        Alert.alert(
            'Alert',
            'Do you want to Logout ?',
            [
                {
                    text: 'OK', onPress: async () => {
                        await AsyncStorage.removeItem('userToken');
                        navigation.navigate('Auth')
                    }
                },
                { text: 'Cancel', style: 'cancel' },

            ],
            { cancelable: false }
        );

    }
    return (
        <TouchableOpacity onPress={() => handleLogout()} style={styles.logout_btn}>
            <Text style={styles.logout_btn_text}>Logout</Text>
        </TouchableOpacity>
    )
}

const getUserInfo = async (state, setstate) => {
    const token = await AsyncStorage.getItem('userToken');
    fetch(`${api}/userinfo`, {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': token,
        }),
    }).then((response) => {
        response.json().then(({ userInfo }) => {
            const { username, avatar, slogan } = userInfo
            console.log(userInfo)

            setstate({
                ...state,
                user: {
                    username,
                    avatar,
                    slogan
                }
            })
        });
    })
        .catch((err) => {
            alert(err);
        });

}
const ProfileScreen = ({ navigation }) => {
    const initialState = {
        user: {
            name: '',
            avatar: '',
            slogan: ''
        }
    }
    const [state, setstate] = useState(initialState)
    useEffect(() => {
        getUserInfo(state, setstate)
    }, [])
    return (
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <Container>
                <UserPanel user={state.user} navigation={navigation} />
                <Content>
                    <ListItem icon onPress={() => alert(1)}>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="text" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Notifications</Text>
                        </Body>
                        <Right>
                            <Text>0</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="list" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Posts</Text>
                        </Body>
                        <Right>
                            <Text>0</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="key" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Change password</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <LogoutButton navigation={navigation} />
                </Content>
                <Footer navigation={navigation} />
            </Container>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    user_panel: {
        height: 200,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    user_panel_avatar: {
        width: 100,
        height: 100,
        borderRadius: 50

    },
    user_panel_info: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
        justifyContent: 'space-between',
    },
    user_panel_info_icon: {
        alignSelf: 'center',
        fontSize: 18,
        color: "#ccc",
        width: 20
    },
    user_panel_name: {
        paddingHorizontal: 15,
        fontSize: 18
    },
    user_panel_slogan: {
        paddingHorizontal: 15,
        paddingTop: 5,
        color: '#777',
        fontSize: 15
    },
    logout_btn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        marginTop: 20,
        marginHorizontal: 15,
        borderRadius: 10,

    },
    logout_btn_text: {
        color: '#FFF'
    }
})

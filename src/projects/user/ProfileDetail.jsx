import React from 'react'
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text, Image, AsyncStorage } from 'react-native'
import { Icon } from 'native-base';
import Header from '../../components/common/Header'
import commonStyles from '../../styles/commonStyles'
import api from '../../config/api'


const List = (props) => {
    return (
        <View style={styles.list}>
            {props.children}
        </View>
    )
}
const Right = (props) => {
    return (
        <View style={styles.list_right}>
            {props.children}
        </View>
    )
}
const Body = (props) => {
    return (
        <View style={styles.list_body}>
            {props.children}
        </View>
    )
}
const Left = (props) => {
    return (
        <View style={styles.list_left}>
            {props.children}
        </View>
    )
}
const ProfileDetail = ({ navigation }) => {
    const RenderHeaderLeft = () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={commonStyles.icon} />
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <Header title="UserInfo" left={<RenderHeaderLeft />} />
            <View style={styles.content}>

                <List >

                    <Body><Text>Avatar</Text></Body>
                    <Left >
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit', {
                            target: 'avatar',
                            source: 'https://via.placeholder.com/150.png'
                        })}>
                            <Image style={styles.avatar} source={{ uri: 'https://via.placeholder.com/150.png' }}></Image>
                        </TouchableOpacity>
                    </Left>
                </List>
                <List>
                    <Body><Text>Username</Text></Body>
                    <Left >
                        <Text>Paul</Text>
                        <Icon name="arrow-forward" style={commonStyles.arrow}></Icon>
                    </Left>
                </List>
                <List >
                    <Body><Text>Nickname</Text></Body>
                    <Left >
                        <Text>Paul.xiao</Text>
                        <Icon name="arrow-forward" style={commonStyles.arrow}></Icon>
                    </Left>
                </List>
                <List >
                    <Body><Text>Region</Text></Body>
                    <Left >
                        <Text>CHENGDU</Text>
                        <Icon name="arrow-forward" style={commonStyles.arrow}></Icon>
                    </Left>
                </List>
                <List >
                    <Body><Text>Slogan</Text></Body>
                    <Left >
                        <Text>We noticed your tunnel is having issuesWe noticed your tunnel is having issuesWe noticed your tunnel is having issuesWe noticed your tunnel is having issuesWe noticed your tunnel is having issuesWe noticed your tunnel is having issues</Text>
                        <Icon name="arrow-forward" style={commonStyles.arrow}></Icon>
                    </Left>
                </List>
            </View>

        </SafeAreaView >
    )
}

export default ProfileDetail

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    list: {
        minHeight: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    list_right: {
        width: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list_body: {
        flex: 1,
        paddingLeft: 15,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    list_left: {
        minWidth: 45,
        maxWidth: 260,
        paddingHorizontal: 10,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    slogan: {
    },
    avatar: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 50
    }
})

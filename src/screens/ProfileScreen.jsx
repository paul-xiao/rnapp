import React from 'react'
import { SafeAreaView } from 'react-navigation'
import commonStyles from '../styles/commonStyles'
import { StyleSheet, Image } from 'react-native'
import { Container, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../components/common/Footer'

const uploadAvatar = () => {

}
const UserPanel = () => {
    return (
        <View style={styles.user_panel}>
            <TouchableOpacity onPress={() => uploadAvatar()}>
                <Image style={styles.user_panel_avatar} source={{ uri: 'https://via.placeholder.com/150.png' }}></Image>
            </TouchableOpacity>
            <View style={styles.user_panel_info}>
                <TouchableOpacity>
                    <Text style={styles.user_panel_name}>Paul</Text>
                </TouchableOpacity>
                <Icon name="arrow-forward" style={styles.user_panel_info_icon}></Icon>
            </View>
        </View>
    )
}
const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <Container>
                <UserPanel />
                <Content>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="airplane" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="bluetooth" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
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
        alignItems: 'center',
        flex: 1
    },
    user_panel_info_icon: {
        alignSelf: 'flex-end',
        fontSize: 16,
        color: "#ccc"
    },
    user_panel_name: {
        paddingHorizontal: 15
    }
})

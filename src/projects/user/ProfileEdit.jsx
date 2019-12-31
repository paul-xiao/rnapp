import React from 'react'
import { SafeAreaView, View, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, ActionSheet } from 'native-base'
import Header from '../../components/common/Header'
import commonStyles from '../../styles/commonStyles'
import api from '../../config/api'
import { BUTTONS, DESTRUCTIVE_INDEX, CANCEL_INDEX } from '../../config/actionSheet'



const ProfileEdit = ({ navigation }) => {
    const RenderHeaderLeft = () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={commonStyles.icon} />
        </TouchableOpacity>
    );
    const RenderHeaderRight = ({ target }) => (
        <View>
            {(target === 'avatar') ? <TouchableOpacity
                onPress={() =>
                    ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX
                        },
                        buttonIndex => {
                            setClicked(buttonIndex);
                        }
                    )
                }
            >
                <Icon name="more" style={styles.item_opt_icon}></Icon>
            </TouchableOpacity> :
                <Button title="Save" onPress={onUpdateUserInfo} />}
        </View>
    );

    const { source, target } = navigation.state.params
    const onUpdateUserInfo = async () => {
        const token = await AsyncStorage.getItem('userToken');
        fetch(`${api}/user/update`, {
            method: 'post',
            body: JSON.stringify({ avatar }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': token,
            }),
        }).then((response) => {
            response.json().then(({ userInfo }) => {
                const { username } = userInfo

                setstate({
                    ...state,
                    user: {
                        name: username
                    }
                })
            });
        })
            .catch((err) => {
                alert(err);
            });
    }
    return (
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <Header title="Edit"
                left={<RenderHeaderLeft />}
                right={<RenderHeaderRight target={target} />} />
            <View>
                {(target === 'avatar') ? <Image style={styles.avatar} source={{ uri: source }}></Image> :
                    <TextInput placeholder="name"></TextInput>}
            </View>
        </SafeAreaView>
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'stretch',
        height: 300
    }
})

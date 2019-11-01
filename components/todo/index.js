import React from 'react'
import { View, Text } from 'native-base';
import { SafeAreaView, StyleSheet,TextInput, TouchableOpacity, FlatList, Switch } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row'
    },
    inner: {
        flex:1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
    },
    title:{
        fontSize: 20,
        padding:15
    },
    todo: {
        height: 50,
        width: 300,
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    input:{
        flex: 1,
        height: 50,
        lineHeight: 50,
        padding: 15
    },
    addBtn: {
       paddingLeft: 15,
       paddingRight: 15,
       borderLeftWidth: 1,
       borderLeftColor: '#f2f2f2'
    },
    btnTxt: {
        height: 50,
        lineHeight: 50
    },
    todoList: {
      marginTop:15,
      height: 300,
      width: 300,
      padding: 15,
      backgroundColor: '#FFF'
    }, 
    todoListItem: {
        width: 300,
        borderBottomColor: 'cyan',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    todoListCheckbox:{
 
    },
    todoListTitle: {
        flex: 1,
        fontSize: 16,
        height: 45,
        lineHeight: 45
    },
    todoListTitleDone: {
        flex: 1,
        fontSize: 16,
        height: 45,
        lineHeight: 45,
        color: '#ccc',
        textDecorationLine: 'line-through'
    }
})

export default TodoApp = () => {
    const [state, setState] = React.useState({
        data: [{
            title: 'test',
            status: 1
        }],
        title: ''
    })
    const updateTitle = React.useCallback((title) => {
         setState( prevState => ({
            ...prevState,
            title: title
        }))
     }, [state]);
    const addTodo =  React.useCallback(() => {
        const {title, data } = state
        data.push({
            title: title
        })
        setState( () => ({
            title: '',
            data : state.data
        }))
        
    }, [state]);
    const Item =({ title, status }) => {
        return (
          <View style={styles.todoListItem}>
            <Text style={status !== 1 ? styles.todoListTitle : styles.todoListTitleDone }>{title}</Text>
          </View>
        );
      }
    const TodoList = ({data}) => {
       return (
        <View style={styles.todoList} key={data.length}>
           <FlatList
           data={data}
           extraData={data}
           renderItem={({ item }) => <Item title={item.title} status={item.status} />}
           keyExtractor={index => index}
         />
        </View>
      )
    }
  return(
      <SafeAreaView style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>
                    this is a TodoApp
                </Text>
                <View style={styles.todo}> 
                    <TextInput style={styles.input}  placeholder="todos" value={state.title} onChangeText={(title) => updateTitle(title)}/>
                    <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
                      <Text style={styles.btnTxt}>Add</Text>
                    </TouchableOpacity>
                </View>
                <TodoList data={state.data} key={state.data.length}></TodoList>
            </View>
      </SafeAreaView>
  )
}
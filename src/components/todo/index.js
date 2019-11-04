import React from 'react'
import { View, Text } from 'native-base';
import { SafeAreaView, StyleSheet,TextInput, TouchableOpacity, FlatList, SwipeableFlatList, TouchableHighlight } from 'react-native';
import VisibilityFilter from './visibilityFilter';
import { connect } from 'react-redux';
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
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        paddingLeft: 10
    },
    todoListTitle: {
        fontSize: 16,
        height: 45,
        lineHeight: 45
    },
    todoListTitleDone: {
        fontSize: 16,
        height: 45,
        lineHeight: 45,
        color: '#ccc',
        textDecorationLine: 'line-through'
    },
    //侧滑菜单的样式
  quickAContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 45,
    lineHeight: 45,
  },
  quick: {
    backgroundColor: "#ff1d49",
    flex: 1,
    alignItems: 'center',//水平靠右
    justifyContent: 'center',//上下居中
    width: 80,
    textAlign: 'center',
    borderBottomColor: 'cyan',
    borderBottomWidth: 1,

  },
  delete: {
    color: "#FFF"
  }
})

TodoApp = () => {
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
           <SwipeableFlatList
           data={data}
           extraData={data}
           renderItem={({ item }) => <Item title={item.title} status={item.status} />}
           keyExtractor={index => index}
            //2创建侧滑菜单
          renderQuickActions={() => getQuickActions()}//创建侧滑菜单
          maxSwipeDistance={100}//可展开（滑动）的距离
          bounceFirstRowOnMount={false}//进去的时候不展示侧滑效果
         />
        </View>
      )
    }

    //侧滑菜单渲染
  const getQuickActions = () => {
    return <View style={styles.quickAContent}>
      <TouchableHighlight
        onPress={() => alert("确认删除？")}
      >
        <View style={styles.quick}>
          <Text style={styles.delete}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  };
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
                <VisibilityFilter ></VisibilityFilter>
            </View>
      </SafeAreaView>
  )
}

const mapStateToProps = ({todos}) => {
  console.log(todos)
  return todos
}
export default connect(mapStateToProps)(TodoApp)

import { Keyboard, StyleSheet, TouchableNativeFeedback, View,} from 'react-native';
import {useState} from 'react';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {


  const [todoList, setTodoList] = useState<ITodo[]>([])

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max + min + 1)) + min
  }
  const addTodo = (title: string) => {
    alert(title)
    const todo = {id: randomInteger(1, 1000), title: title};
    setTodoList([...todoList, todo])
  
  }
  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter(todo => todo.id != id)
    setTodoList(newTodo);
  }

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss}>
     <View style={styles.container}>
      <InputTodo addTodo={addTodo}  />
      <ListTodo 
      todoList={todoList}
      deleteTodo={deleteTodo}
      />
    </View> 
    </TouchableNativeFeedback>
    
      
      
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60, color: "red",
    paddingTop: 50,
    paddingHorizontal: 20
  },
});

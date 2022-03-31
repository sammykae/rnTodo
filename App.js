import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todo, setTodo] = useState([
    {id: 1, text: 'Buy Tea'},
    {id: 2, text: 'Play Game'},
    {id: 3, text: 'Code'},
  ]);

  const Delete = id => {
    setTodo(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
    ToastAndroid.show('Task Deleted', 2000);
  };
  const Submit = text => {
    if (text.length > 3) {
      setTodo(prevTodos => {
        return [{text: text, id: Math.random().toString()}, ...prevTodos];
      });
      ToastAndroid.show('Task Added', 2000);
    } else {
      Alert.alert('INPUT ERROR', 'Text Must Be More Than 3 Characters Long', [
        {text: 'Got It', onPress: () => console.log('Alert Closed')},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.content}>
          <AddTodo Submit={Submit} />

          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({item}) => <TodoItem Delete={Delete} item={item} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },

  list: {
    flex: 1,
    marginTop: 20,
  },
});

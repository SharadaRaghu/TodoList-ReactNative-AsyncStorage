import React, {useState} from 'react';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import InputModal from '../components/InputModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({todos, setTodos}) => {
  const handleClearTodos = () => {
    //to clear all our todos we settodos to empty array
    AsyncStorage.setItem('storedTodos', JSON.stringify([]))
      .then(() => {
        setTodos([]);
      })
      .catch(error => console.log(error));
  };

  //modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false); //dont want modal to be displayed first so set initial state as false
  const [buttonVisible, setButtonVisible] = useState(true); //dont want modal to be displayed first so set initial state as false
  const [todoInputValue, setTodoInputValue] = useState();

  const handleAddTodo = todo => {
    const newTodos = [...todos, todo];

    AsyncStorage.setItem('storedTodos', JSON.stringify(newTodos))
      .then(() => {
        // console.log('inside set item');
        setTodos(newTodos);
        setModalVisible(false);
        setButtonVisible(true);
      })
      .catch(error => console.log(error));
  };
  //editing

  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleTriggerEdit = item => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setButtonVisible(false);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = editedTodo => {
    const newTodos = [...todos]; //assign old todo
    const todoIndex = todos.findIndex(todo => todo.key === editedTodo.key); //position to which new todo to be assigned
    newTodos.splice(todoIndex, 1, editedTodo); //to replace todo item have identified, passed it as para to slice function

    AsyncStorage.setItem('storedTodos', JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
        setModalVisible(false);
        setButtonVisible(true);
        setTodoToBeEdited(null);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        buttonVisible={buttonVisible}
        setButtonVisible={setButtonVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;

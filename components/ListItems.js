import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {appStyles} from '../styles/appStyles';

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../styles/colors';
import {
  SwipedTodoText,
  TodoText,
  ListView,
  ListViewHidden,
  HiddenButton,
} from '../styles/appStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItems = ({todos, setTodos, handleTriggerEdit}) => {
  const [swipedRow, setSwipedRow] = useState(null); //track state of list items, to keep track of key of currently swiped row

  const handleDeleteTodo = (rowMap, rowKey) => {
    //rowmap comes with information about all list items
    const newTodos = [...todos]; //spread operator to spread all our todos
    const todoIndex = todos.findIndex(todo => todo.key === rowKey); //finding index of the particular todo item, whose key is equal to the current key of the selected to do item
    newTodos.splice(todoIndex, 1); //splice function on new todos array, to get rid of to do item
    //1 - no of todo to remove of the identified index
    //then reset value of todos using settodos func.

    AsyncStorage.setItem('storedTodos', JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
      })
      .catch(error => console.log(error));
  };

  return (
    <SwipeListView
      data={todos}
      renderItem={data => {
        //for styling currently swiped to do row, (to check if the data item has the same key as swiped row, if thats the case we change our todotext to swipe todo text)
        const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText; //rowtext to style our to do value
        return (
          <ListView
            underlayColor={colors.primary}
            onPress={() => {
              handleTriggerEdit(data.item);
            }}>
            <>
              <RowText>{data.item.title}</RowText>
              <Text style={appStyles.TodoDate}>{data.item.date}</Text>
            </>
          </ListView>
        );
      }}
      renderHiddenItem={(data, rowMap) => {
        return (
          //need to pass rowmap and data item key, so we pass argumnets to rendehiddenitem
          <ListViewHidden>
            <HiddenButton
              onPress={() => handleDeleteTodo(rowMap, data.item.key)}>
              <Entypo name="trash" size={25} color={colors.secondary} />
            </HiddenButton>
          </ListViewHidden>
        );
      }}
      //properties of swipe list view
      leftOpenValue={80} //to determine how far the list item can swipe from the left
      previewRowKey={'1'} //gives quick preview whenever our app is open
      previewOpenValue={80}
      previewOpenDelay={2000}
      disableLeftSwipe={true} //using right swipe, hence
      showsVerticalScrollIndicator={false}
      style={{flex: 1, paddingBottom: 30, marginBottom: 40}}
      onRowOpen={rowKey => {
        //this takes function with current rowkey as an argumne
        setSwipedRow(rowKey); //using this we set value of swipedrow
      }}
      onRowClose={() => {
        setSwipedRow(null);
      }}
    />
  );
};

export default ListItems;

import React from 'react';
import {Modal, Text} from 'react-native';
import {
  ModalAction,
  ModalButton,
  ModalContainer,
  ModalView,
  ModalActionGroup,
  StyledInput,
  ModalIcon,
  appStyles,
} from '../styles/appStyles';
import colors from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InputModal = ({
  modalVisible,
  setModalVisible,
  buttonVisible,
  setButtonVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  todos,
  todoToBeEdited,
  setTodoToBeEdited,
  handleEditTodo,
}) => {
  const handleCloseModal = () => {
    setModalVisible(false);
    setButtonVisible(true);
    setTodoInputValue('');
    setTodoToBeEdited(null);
  };

  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        date: new Date().toUTCString(), //date in the format of initial todos
        key: `${
          (todos[todos.length - 1] && //if todo value is not undefined we proceed to other half
            parseInt(todos[todos.length - 1].key) + 1) || //here i want to check for the key of last item. since key is string we use parseint
          //once done we increase by 1 at end,
          //this means, if our array is not empty ,we check for the key of last element,
          //convert it to integer and add 1 to it, returning new value as a string, to be used as a key fr new todo
          //if our array is empty, current input value would be our 1st todo
          1
        }`, //key is not equal to any todo we have,clculate it based on no of todos in the array
      }); //to check if we have valid value at the index of length of todo-1
      //reduce index -1, to return valid index
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      });
    }

    setTodoInputValue('');
    handleCloseModal();
  };

  return (
    <>
      {buttonVisible ? (
        <ModalButton
          onPress={() => {
            setButtonVisible(false);
            setModalVisible(true);
          }}>
          <AntDesign name="plus" size={30} color={colors.secondary} />
        </ModalButton>
      ) : null}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible} //when to show when not to show, use state to manage it
        onRequestClose={handleCloseModal}>
        <ModalContainer>
          {/* <ImageBackground
            source={require('../styles/1.jpeg')}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              flexWrap: 'wrap',
            }}> */}
          <ModalView>
            <ModalIcon>
              <Text style={appStyles.HeaderTitle}></Text>
              <AntDesign
                name="edit"
                size={30}
                color={colors.tertiary}
                style={{alignSelf: 'center'}}
              />
            </ModalIcon>

            <StyledInput
              placeholder="Add a Todo"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={true}
              onChangeText={text => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>

              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={colors.tertiary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
          {/* </ImageBackground> */}
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;

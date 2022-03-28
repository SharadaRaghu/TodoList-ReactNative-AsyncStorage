import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../styles/colors';
import styled from 'styled-components';

import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
`;

export const SwipedTodoText = styled(TodoText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${colors.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`;

export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 28px;
`;

export const StyledInput = styled.TextInput`

  width: 300px;
  height: 50px;
  background-color:${colors.tertiary};
  padding: 10px
  font-size: 16px;
  font-family: cursive;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
  
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: 'white';
  borderradius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const Container = styled.SafeAreaView`
  background-color: ${colors.primary};

  paddingbottom: 0px;
  flex: 1;
  paddingtop: 10px;
`;

export const appStyles = StyleSheet.create({
  HeaderView: {
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  HeaderTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    color: colors.tertiary,
    fontFamily: 'cursive',
    fontStyle: 'italic',
  },
  ListContainer: {
    marginBottom: 30,
    flex: 1,
    paddingBottom: 40,
  },

  TodoDate: {
    fontSize: 10,

    color: colors.alternative,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});

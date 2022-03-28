import React from 'react';
import {View, Text} from 'react-native';
import {appStyles} from '../styles/appStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../styles/colors';
import {HeaderButton} from '../styles/appStyles';

const Header = ({handleClearTodos}) => {
  return (
    <View style={appStyles.HeaderView}>
      <Text style={appStyles.HeaderTitle}>To-Do</Text>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo
          name="trash"
          size={25}
          color={colors.tertiary}
          style={{marginRight: 15, marginTop: 10}}
        />
      </HeaderButton>
    </View>
  );
};

export default Header;

import React, {Component} from 'react';
import Dashboard from './src/view/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListElementViewPage} from './src/view/ListElementViewPage';
import {RecordFlatList} from './src/view/RecordFlatList';
import {AddNewFilmForm} from './src/view/AddNewFilmForm'
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Dashboard} />
          <Stack.Screen name="ViewData" component={ListElementViewPage} />
          <Stack.Screen name="characterList" component={RecordFlatList} />
          <Stack.Screen name="addNewFilmForm" component={AddNewFilmForm} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { View, FlatList } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AddInput from './components/AddInput/AddInput';
import TodoList from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import Empty from './components/Empty/Empty';

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => [
      {
        value,
        key: Math.random().toString(),
      },
      ...prevTodo,
    ]);
  };

  const deleteItem = (key) => {
    setData((prevTodo) => prevTodo.filter((todo) => todo.key !== key));
  };
  if (fontsLoaded) {
    return (
      <ComponentContainer>
        <View>
          <StatusBar
            barStyle="light-content"
            backgroundColor="midnightblue"
          />
        </View>

        <View>
          <FlatList
            data={data}
            ListHeaderComponent={<Header />}
            ListEmptyComponent={<Empty />}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )}
          />
          <View>
            <AddInput submitHandler={submitHandler} />
          </View>
        </View>
      </ComponentContainer>
    );
  }
  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => {
        setFontsLoaded(true);
      }}
    />
  );
}

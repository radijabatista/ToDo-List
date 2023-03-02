import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const ComponentContainer = styled.View`
    flex-direction: row; 
`;

const InputContainer = styled.View`
    flex-direction: row;
    border-radius: 10px;
`;

const Input = styled.TextInput`
    font-size: 20px;
    background-color: white;
    width: 300px;
    margin-right: 20px;
    padding: 10px;
    margin-bottom:20px;
    border-radius:10px;
`;

const SubmitButton = styled.TouchableOpacity`
    width: 50px;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    margin-bottom: 20px;
    border-radius: 50px;
`;

function AddInput({ submitHandler }) {
  const [value, setValue] = useState('');

  const addText = (text) => {
    setValue(text);
  };

  return (
    <ComponentContainer>
      <InputContainer>
        <Input placeholder="Add Task..." onChangeText={addText} />
      </InputContainer>
      <SubmitButton
        onPress={() => {
          setValue(submitHandler(value));
        }}
      >
        <Text>Submit</Text>
      </SubmitButton>

    </ComponentContainer>
  );
}

export default AddInput;

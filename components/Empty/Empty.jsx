import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 650px;
`;

const EmptyImage = styled.Image`
    width: 350px;
    height:200px;
`;

const EmptyText = styled.Text`
    color: white;
    font-family: poppins-bold;
    margin-top: 30px;
    font-size: 30px;
`;

function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage source="Add Image here" />
      <EmptyText>Add To-Do.</EmptyText>
    </ComponentContainer>
  );
}

export default Empty;

// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const ItemCard = ({ item }: any) => (
  <Container>
    <a href={item.url}>
      <h3>{item.title}</h3>
    </a>
  </Container>
);

export default ItemCard;

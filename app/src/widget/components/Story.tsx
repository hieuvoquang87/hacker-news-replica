import React from 'react';
import styled from 'styled-components';
import { Story } from '../types';

const StyledStory = styled.div`
  border: solid black 1px;
  display: flex;
  padding: 20px;
  height: 100px;
`;

type StoryProps = {
  item: Story;
};

export default ({ item }: StoryProps): JSX.Element => {
  return <StyledStory>{item.title}</StyledStory>;
};

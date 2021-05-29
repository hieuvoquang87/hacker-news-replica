import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Container from '../components/Container';
import Story from './Story';

import useHistory from '../hooks/useHistory';

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ClearHistoryButton = styled.button`
  border: solid black 1px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  height: 36px;
  width: 150px;
  margin: 0 30px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
  width: 150px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 400px;
  align-items: center;
`;

const Main = (): JSX.Element => {
  const { loadedStories, clearHistory } = useHistory();
  return (
    <Container style={{ flexDirection: 'column' }}>
      <Row>
        <Title>History</Title>
        <ClearHistoryButton onClick={clearHistory}>
          Clear History
        </ClearHistoryButton>
      </Row>
      <StoryList>
        {loadedStories.map((story) => (
          <Story key={story.id} item={story} />
        ))}
      </StoryList>
    </Container>
  );
};

export default Main;

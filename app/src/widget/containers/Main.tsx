import React, { useState } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Container from '../components/Container';
import Story from './Story';
import History from './History';

import BookmarkContext from '../contexts/BookmarkContext';
import HistoryContext from '../contexts/HistoryContext';

import InfiniteScroller from '../components/InfiniteScroller';
import useMain from '../hooks/useMain';

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  button {
    border: solid black 1px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    width: 150px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
`;

type NavBarProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setCurrentPage }: NavBarProps): JSX.Element => {
  return (
    <StyledNavBar>
      <button onClick={() => setCurrentPage('NEW_STORY')}>New Stories</button>
      <button onClick={() => setCurrentPage('HISTORY')}>History</button>
    </StyledNavBar>
  );
};

const Main = (): JSX.Element => {
  const {
    newStoryIds,
    newStories,
    bookmarks,
    loadedStories,
    setBookmarks,
    setLoadedStories,
    loadNextStories,
  } = useMain();

  const [currentPage, setCurrentPage] = useState('NEW_STORY');
  return (
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks }}>
      <HistoryContext.Provider value={{ loadedStories, setLoadedStories }}>
        <Page style={{ flexDirection: 'column' }}>
          <Title>Hacker News</Title>
          <NavBar setCurrentPage={setCurrentPage} />
          {currentPage === 'NEW_STORY' && (
            <Container style={{ flexDirection: 'column' }}>
              <Title>New Story</Title>
              <InfiniteScroller
                hasMore={newStories.length < newStoryIds.length}
                onNext={() => setTimeout(loadNextStories, 1000)}
              >
                {newStories.map((item, idx) => (
                  <Story key={idx} item={item} />
                ))}
              </InfiniteScroller>
            </Container>
          )}
          {currentPage === 'HISTORY' && <History />}
        </Page>
      </HistoryContext.Provider>
    </BookmarkContext.Provider>
  );
};

export default Main;

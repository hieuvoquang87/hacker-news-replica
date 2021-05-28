import React from 'react';
import Page from '../components/Page';
import Container from '../components/Container';
import Story from './Story';

import BookmarkContext from '../contexts/BookmarkContext';

import InfiniteScroller from '../components/InfiniteScroller';
import useMain from '../hooks/useMain';

const Main = (): JSX.Element => {
  const { newStoryIds, newStories, loadNextStories, bookmarks, setBookmarks } =
    useMain();
  return (
    <BookmarkContext.Provider value={{ bookmarks, setBookmarks }}>
      <Page>
        <Container style={{ flexDirection: 'column' }}>
          <InfiniteScroller
            hasMore={newStories.length < newStoryIds.length}
            onNext={() => setTimeout(loadNextStories, 1000)}
          >
            {newStories.map((item, idx) => (
              <Story key={idx} item={item} />
            ))}
          </InfiniteScroller>
        </Container>
      </Page>
    </BookmarkContext.Provider>
  );
};

export default Main;

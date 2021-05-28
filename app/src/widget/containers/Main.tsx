import React from 'react';
import Page from '../components/Page';
import Container from '../components/Container';
import Story from './Story';
// import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScroller from '../components/InfiniteScroller';
import useMain from '../hooks/useMain';

const Main = (): JSX.Element => {
  const { newStoryIds, newStories, loadNextStories } = useMain();
  return (
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
  );
};

export default Main;

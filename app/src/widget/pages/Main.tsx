import React from 'react';
import Page from '../components/Page';
import Container from '../components/Container';
import Story from '../components/Story';
import useMain from '../hooks/useMain';

const Main = (): JSX.Element => {
  const { newStories } = useMain();
  return (
    <Page>
      <Container style={{ flexDirection: 'column' }}>
        {newStories.map((item, idx) => (
          <Story key={idx} item={item} />
        ))}
      </Container>
    </Page>
  );
};

export default Main;

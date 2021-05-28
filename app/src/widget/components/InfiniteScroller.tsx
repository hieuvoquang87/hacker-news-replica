import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

type InfiniteScrollerProps = {
  children: JSX.Element[];
  hasMore: boolean;
  onNext: any;
};

const LoadingSpinner = styled.div`
  border: solid black 1px;
  line-height: 60px;
  text-align: center;
`;

const InfiniteScroller = ({
  children,
  hasMore,
  onNext,
}: InfiniteScrollerProps): JSX.Element => {
  const length = children?.length || 0;
  return (
    <InfiniteScroll
      dataLength={length}
      hasMore={hasMore}
      next={onNext}
      loader={<LoadingSpinner>Loading...</LoadingSpinner>}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScroller;

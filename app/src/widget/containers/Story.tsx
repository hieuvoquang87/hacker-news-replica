import React from 'react';
import styled from 'styled-components';
import { Story } from '../types';

import useStory from '../hooks/useStory';
import useBookmark from '../hooks/useBookmark';

import Comment from './Comment';
import Bookmark from '../components/Bookmark';

type StoryProps = {
  item: Story;
};

const StyledStory = styled.div`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px 0;
`;

const Title = styled.div`
  line-height: 30px;
  font-size: 20px;
  width: 100%;
`;

const CommentSummary = styled.div`
  line-height: 20px;
  font-size: 10px;
`;

const CommentList = styled.div`
  padding-top: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ({ item }: StoryProps): JSX.Element => {
  const { comments, commentIds, loadComment } = useStory(item);
  const { hasBookmarked, bookmarkItem, removeBookmark } = useBookmark(item);
  return (
    <StyledStory key={item.id}>
      <Title>{item.title}</Title>
      <Bookmark
        hasBookmarked={hasBookmarked}
        bookmarkItem={bookmarkItem}
        removeBookmark={removeBookmark}
      />
      <CommentSummary
        style={{ cursor: commentIds.length ? 'pointer' : '' }}
        onClick={loadComment}
      >
        Comments: {commentIds.length}
      </CommentSummary>

      <CommentList>
        {comments.map((comment) => (
          <Comment key={comment.id} item={comment} />
        ))}
      </CommentList>
    </StyledStory>
  );
};

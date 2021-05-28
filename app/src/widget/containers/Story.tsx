import React from 'react';
import styled from 'styled-components';
import { Story } from '../types';

import useStory from '../hooks/useStory';

import Comment from './Comment';

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

export default ({ item }: StoryProps): JSX.Element => {
  const { comments, commentIds, loadComment } = useStory(item);

  return (
    <StyledStory>
      <Title>{item.title}</Title>
      <CommentSummary
        style={{ cursor: commentIds.length ? 'pointer' : '' }}
        onClick={loadComment}
      >
        Comments: {commentIds.length}
      </CommentSummary>
      <CommentList>
        {comments.map((comment) => (
          <Comment item={comment} />
        ))}
      </CommentList>
    </StyledStory>
  );
};

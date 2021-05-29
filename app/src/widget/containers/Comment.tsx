import React from 'react';
import styled from 'styled-components';
import { Comment } from '../types';

import useComment from '../hooks/useComment';

type CommentProps = {
  item: Comment;
};

const StyledComment = styled.div`
  border: solid black 1px;
  font-size: 12px;
  padding: 20px;
  margin: 10px 0;
`;

const CommentSummary = styled.div`
  line-height: 20px;
  font-size: 10px;
`;

const CommentList = styled.div`
  padding-top: 20px;
`;

const CommentContainer = ({ item }: CommentProps) => {
  const { commentIds, comments, loadComment } = useComment(item);
  return (
    <StyledComment key={item.id}>
      <div dangerouslySetInnerHTML={{ __html: item.text }} />
      <CommentSummary
        style={{ cursor: commentIds.length ? 'pointer' : '' }}
        onClick={loadComment}
      >
        Comments: {commentIds.length}
      </CommentSummary>
      <CommentList>
        {comments.map((comment) => (
          <CommentContainer key={comment.id} item={comment} />
        ))}
      </CommentList>
    </StyledComment>
  );
};

export default CommentContainer;

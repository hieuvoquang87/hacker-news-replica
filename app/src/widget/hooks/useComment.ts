import { useState, useCallback } from 'react';
import { Comment } from '../types';
import { getComments } from '../services/hnService'

const useComment = (comment: Comment) => {
  const commentIds = comment?.kids || []  
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComment = useCallback(() => {
    getComments(commentIds).then((data) => {
      setComments(data)
    })
  }, [Comment, commentIds]) 

  return {
    commentIds,
    comments,
    loadComment
  }
}

export default useComment;
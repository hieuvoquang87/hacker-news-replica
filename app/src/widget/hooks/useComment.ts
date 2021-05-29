import { useState, useCallback, useMemo } from 'react';
import { Comment } from '../types';
import { getComments } from '../services/hnService'

const useComment = (comment: Comment) => {
  const commentIds = useMemo(() => comment?.kids || [], [comment])  
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComment = useCallback(() => {
    getComments(commentIds).then((data) => {
      setComments(data)
    })
  }, [commentIds]) 

  return {
    commentIds,
    comments,
    loadComment
  }
}

export default useComment;
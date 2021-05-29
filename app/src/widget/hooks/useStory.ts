import { useState, useCallback, useMemo } from 'react';
import { Story, Comment } from '../types';
import { getComments } from '../services/hnService';

const useStory = (story: Story) => {
  const commentIds = useMemo(() => story?.kids || [], [story]) 
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

export default useStory;
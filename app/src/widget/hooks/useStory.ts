import { useState, useCallback } from 'react';
import { Story, Comment } from '../types';
import { getComments } from '../services/hnService'

const useStory = (story: Story) => {
  const commentIds = story?.kids || []  
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComment = useCallback(() => {
    getComments(commentIds).then((data) => {
      setComments(data)
    })
  }, [story, commentIds]) 

  return {
    commentIds,
    comments,
    loadComment
  }
}

export default useStory;
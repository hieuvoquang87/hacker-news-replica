import { useState, useEffect } from 'react';
import { Story } from '../types';
import { getNewStoryIds, getNewStories } from '../services/hnService'

type MainHook = {
  newStoryIds: number[]
  newStories: Story[]

}

export default (): MainHook => {
  const [newStoryIds, setNewStoryIds] = useState<number[]>([])
  const [newStories, setNewStories] = useState<Story[]>([]);
  useEffect(() => {
    getNewStoryIds().then((storyIds) => {
      setNewStoryIds(storyIds)
      getNewStories(storyIds.slice(0,5)).then((stories) => {
        setNewStories(stories)
      })
    })
  }, [])

  return {
    newStoryIds,
    newStories
  }
}
import { useState, useEffect, useCallback } from 'react';
import { Story } from '../types';
import { getNewStoryIds, getNewStories } from '../services/hnService'

type MainHook = {
  newStoryIds: number[]
  newStories: Story[]
  loadNextStories: () => void
}

const ITEMS_PER_PAGE = 10;

export default (): MainHook => {
  const [newStoryIds, setNewStoryIds] = useState<number[]>([])
  const [newStories, setNewStories] = useState<Story[]>([]);
  const [loadedStoryIds, setLoadedStoryIds] = useState<number[]>([]);

  useEffect(() => {
    getNewStoryIds().then((storyIds) => {
      const loadingIds = storyIds.slice(0, ITEMS_PER_PAGE)
      getNewStories(loadingIds).then((stories) => {
        setNewStoryIds(storyIds)
        setNewStories(stories)
        setLoadedStoryIds(loadingIds)
      })
    })
  }, [])

  const loadNextStories = () => {
    const loadedStoriesLength = loadedStoryIds.length;
    const loadingIds = newStoryIds.slice(loadedStoriesLength, loadedStoriesLength + ITEMS_PER_PAGE)
    getNewStories(loadingIds).then((stories) => {
      setNewStories([...newStories, ...stories])
      setLoadedStoryIds([...loadedStoryIds, ...loadingIds])
      setNewStoryIds(newStoryIds)
    })
  }

  return {
    newStoryIds,
    newStories,
    loadNextStories
  }
}
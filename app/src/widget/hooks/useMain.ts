import { useState, useEffect } from 'react';
import { Story } from '../types';
import { getNewStoryIds, getNewStories } from '../services/hnService'
import { getBookmarkList } from '../services/cacheService'

type MainHook = {
  newStoryIds: number[]
  newStories: Story[]
  bookmarks: number[]
  setBookmarks: React.Dispatch<React.SetStateAction<number[]>>
  loadNextStories: () => void
}

const ITEMS_PER_PAGE = 10;

export default (): MainHook => {
  const [newStoryIds, setNewStoryIds] = useState<number[]>([])
  const [newStories, setNewStories] = useState<Story[]>([]);
  const [loadedStoryIds, setLoadedStoryIds] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([])

  // Init function 
  useEffect(() => {
    getNewStoryIds().then((storyIds) => {
      const loadingIds = storyIds ? storyIds.slice(0, ITEMS_PER_PAGE) : [];
      getNewStories(loadingIds).then((stories) => {
        setNewStoryIds(storyIds)
        setNewStories(stories)
        setLoadedStoryIds(loadingIds)
      })
    })
    const bookmarkList = getBookmarkList() || [];
    setBookmarks(bookmarkList)
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
    bookmarks,
    setBookmarks,
    loadNextStories,
  }
}
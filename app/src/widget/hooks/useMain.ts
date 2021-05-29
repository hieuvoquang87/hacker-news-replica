import { useState, useEffect } from 'react';
import { Story } from '../types';
import { getNewStoryIds, getNewStories } from '../services/hnService'
import { getBookmarkList, getHistory, saveHistory } from '../services/cacheService'

type MainHook = {
  newStoryIds: number[]
  newStories: Story[]
  bookmarks: number[]
  loadedStories: Story[]
  setBookmarks: React.Dispatch<React.SetStateAction<number[]>>
  setLoadedStories: React.Dispatch<React.SetStateAction<Story[]>>
  loadNextStories: () => void
}

const ITEMS_PER_PAGE = 10;

const generateHistory = (currentHistory: Story[], newStories: Story[] ): Story[] => {
  const map = [...currentHistory, ...newStories].reduce((acc, item) => {
    acc.set(item.id, item);
    return acc;
  }, new Map<number, Story>())
  return Array.from(map.values());
}

const useMain = (): MainHook => {
  const [newStoryIds, setNewStoryIds] = useState<number[]>([])
  const [newStories, setNewStories] = useState<Story[]>([]);
  const [loadedStories, setLoadedStories] = useState<Story[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([])

  // Init function 
  useEffect(() => {
    getNewStoryIds().then((storyIds) => {
      const loadingIds = storyIds ? storyIds.slice(0, ITEMS_PER_PAGE) : [];
      getNewStories(loadingIds).then((stories) => {
        setNewStoryIds(storyIds)
        setNewStories(stories)

        const storyHistory = getHistory() || [];
        const newHistory = generateHistory(storyHistory, stories);
        setLoadedStories(newHistory)
        saveHistory(newHistory)
      })
    })
    const bookmarkList = getBookmarkList() || [];
    setBookmarks(bookmarkList)
    
  }, [])

  const loadNextStories = () => {
    const loadedStoriesLength = loadedStories.length;
    const loadingIds = newStoryIds.slice(loadedStoriesLength, loadedStoriesLength + ITEMS_PER_PAGE)
    getNewStories(loadingIds).then((stories) => {
      setNewStories([...newStories, ...stories])
      setNewStoryIds(newStoryIds)

      const history = generateHistory(loadedStories, stories);
      setLoadedStories(history)
      saveHistory(history)
    })
  }

  return {
    newStoryIds,
    newStories,
    bookmarks,
    loadedStories,
    setBookmarks,
    setLoadedStories,
    loadNextStories,
  }
}

export default useMain;
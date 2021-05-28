import axios from 'axios';
import { Story, Comment } from '../types'

const HACKER_NEWS_API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const getItemPromise = <T>(itemId: number): Promise<T> => {
  const requestUrl = `${HACKER_NEWS_API_BASE_URL}/item/${itemId}.json`;
  return axios.get(requestUrl).then((result) => result.data || {});
} 

export const getNewStoryIds = async (): Promise<number[]> => {
  try {
    const requestUrl = `${HACKER_NEWS_API_BASE_URL}/newstories.json`;
    const result = await axios.get(requestUrl);
    return result.data || []
  } catch (error) {
    return []
  }
}

export const getNewStories = async (storyIds: number[]): Promise<Story[]> => {
  try {
    const promises = storyIds.map((storyId) => {
      return getItemPromise<Story>(storyId)
    })
    return await Promise.all(promises);
  } catch (error) {
    return []
  }
  
}

export const getComments = async (commentIds: number[]) => {
  try {
    const promises = commentIds.map((commentId) => {
      return getItemPromise<Comment>(commentId)
    })
    return await Promise.all(promises);
  } catch (error) {
    return []
  }
}
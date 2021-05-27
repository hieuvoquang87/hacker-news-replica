import axios from 'axios';
import { Item, Story, Comment } from '../types'

const HACKER_NEWS_API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const getItemPromise = <T>(itemId: number): Promise<T> => {
  const requestUrl = `${HACKER_NEWS_API_BASE_URL}/item/${itemId}.json`;
  return axios.get(requestUrl).then((result) => result.data);
} 

export const getNewStoryIds = async (): Promise<number[]> => {
  const requestUrl = `${HACKER_NEWS_API_BASE_URL}/newstories.json`;
  const result = await axios.get(requestUrl);
  return result.data;
}

export const getNewStories = async (storyIds: number[]): Promise<Story[]> => {
  const promises = storyIds.map((storyId) => {
    return getItemPromise<Story>(storyId)
  })
  const result = await Promise.all(promises);
  return result;
}

export const getComments = async (commentIds: number[]) => {

}
import {saveItemWithKey, getItemWithKey } from '../utils/localStorageUtil';
import { Story } from '../types'

const BOOKMARK_KEY = 'hn-bookmarks';
const HISTORY_KEY = 'hn-history';

export const saveBookmarkList = (bookmarks: number[]): boolean => {
  return saveItemWithKey(BOOKMARK_KEY, bookmarks)
}

export const getBookmarkList = (): number[] => {
  return getItemWithKey(BOOKMARK_KEY)
}

export const saveHistory = (history: Story[]): boolean => {
  return saveItemWithKey(HISTORY_KEY, history)
}

export const getHistory = (): Story[] => {
  return getItemWithKey(HISTORY_KEY)
}
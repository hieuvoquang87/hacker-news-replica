import {saveItemWithKey, getItemWithKey } from '../utils/localStorageUtil';

const BOOKMARK_KEY = 'hn-bookmarks';

export const saveBookmarkList = (bookmarks: number[]): boolean => {
  return saveItemWithKey(BOOKMARK_KEY, bookmarks)
}

export const getBookmarkList = (): number[] => {
  return getItemWithKey(BOOKMARK_KEY)
}
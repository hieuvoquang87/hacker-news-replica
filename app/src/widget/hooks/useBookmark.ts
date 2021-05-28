import { useContext, useCallback, useMemo } from 'react';
import BookmarkContext from '../contexts/BookmarkContext';
import { saveBookmarkList } from '../services/cacheService'
import { Item } from '../types';

const useBookmark = (item: Item) => {
  const { bookmarks, setBookmarks } = useContext(BookmarkContext);

  const hasBookmarked = useMemo(() => bookmarks?.length ? bookmarks.includes(item.id) : false, [item, bookmarks])

  const bookmarkItem = useCallback(() => {
    const newBookmarks = [...bookmarks, item.id];
    saveBookmarkList(newBookmarks)
    setBookmarks(newBookmarks)
  }, [bookmarks])

  const removeBookmark = useCallback(() => {
    const bookmarkedItemIdx = bookmarks.indexOf(item.id);
    if(bookmarkedItemIdx > -1) {
      bookmarks.splice(bookmarkedItemIdx, 1);
      const newBookmarks = [...bookmarks];
      saveBookmarkList(newBookmarks);
      setBookmarks(newBookmarks);
    }
  }, [bookmarks])

  return {
    hasBookmarked,
    bookmarkItem,
    removeBookmark
  }
}

export default useBookmark;
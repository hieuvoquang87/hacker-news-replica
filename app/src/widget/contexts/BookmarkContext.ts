import React from 'react'

type BookmarkContextProps = {
  bookmarks: number[]
  setBookmarks: React.Dispatch<React.SetStateAction<number[]>>
}

const BookmarkContext = React.createContext<BookmarkContextProps>({ 
  bookmarks: [], 
  setBookmarks: () => {}
});

export default BookmarkContext;
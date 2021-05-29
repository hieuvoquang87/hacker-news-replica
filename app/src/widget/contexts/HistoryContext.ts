import React from 'react'
import { Story } from '../types'
type HistoryContextProps = {
  loadedStories: Story[]
  setLoadedStories: React.Dispatch<React.SetStateAction<Story[]>>
}

const HistoryContext = React.createContext<HistoryContextProps>({ 
  loadedStories: [], 
  setLoadedStories: () => {}
});

export default HistoryContext;
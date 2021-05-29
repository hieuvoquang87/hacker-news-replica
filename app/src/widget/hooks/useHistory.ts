import { useCallback, useContext } from 'react';
import HistoryContext from '../contexts/HistoryContext';
import { saveHistory } from '../services/cacheService'


const useHistory = () => {
  const { loadedStories, setLoadedStories } = useContext(HistoryContext);

  const clearHistory = useCallback(() => {
    saveHistory([]);
    setLoadedStories([]);
  }, [setLoadedStories])
  
  return {
    loadedStories,
    setLoadedStories,
    clearHistory
  }
}

export default useHistory;
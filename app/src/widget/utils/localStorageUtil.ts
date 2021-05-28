export const saveItemWithKey = (key: string, data: Object) => {
  if(typeof window !== 'undefined') {
    const dataString = JSON.stringify(data)
    window.localStorage.setItem(key, dataString)
    return true;
  }
  return false;
} 

export const getItemWithKey = (key: string) => {
  if(typeof window !== 'undefined') {
    try {
      const dataString = window.localStorage.getItem(key);
      return dataString ? JSON.parse(dataString) : null;
    } catch (e) {
      return null;
    }
  }
}
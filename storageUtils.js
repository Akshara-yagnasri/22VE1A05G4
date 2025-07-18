export const saveUrlToStorage = (data) => {
  try {
    const existingUrls = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    existingUrls.push(data);
    localStorage.setItem('shortenedUrls', JSON.stringify(existingUrls));
  } catch (error) {
    console.error('Error saving URL to storage:', error);
  }
};

export const getStoredUrls = () => {
  try {
    const storedUrls = JSON.parse(localStorage.getItem('shortenedUrls'));
    return storedUrls || [];
  } catch (error) {
    console.error('Error retrieving URLs from storage:', error);
    return [];
  }
};

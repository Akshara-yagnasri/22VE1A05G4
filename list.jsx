import React, { useEffect, useState } from 'react';
import { getStoredUrls } from '../utils/storageUtils';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    setUrls(getStoredUrls());
  }, []);

  return (
    <div>
      <h3>Your Shortened URLs</h3>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Clicks</th>
            <th>Created At</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((item, idx) => (
            <tr key={idx}>
              <td><a href={item.shortUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></td>
              <td>{item.originalUrl}</td>
              <td>{item.clicks || 0}</td>
              <td>{item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}</td>
              <td>{item.expirationDate ? new Date(item.expirationDate).toLocaleDateString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;

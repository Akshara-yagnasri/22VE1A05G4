import React, { useState } from 'react';
import axios from 'axios';
import { saveUrlToStorage } from '../utils/storageUtils';

const Form = () => {
  const [url, setUrl] = useState('');
  const [expiration, setExpiration] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/shorten', {
        originalUrl: url,
        expirationDate: expiration || null,
      });
      if (res.data?.shortUrl) {
        setShortUrl(res.data.shortUrl);
        saveUrlToStorage(res.data);
      } else {
        setError('Failed to shorten URL');
      }
    } catch (err) {
      setError('Error shortening URL');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <div>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          required
          style={{ width: '60%', marginRight: '1rem' }}
        />
        <input
          type="date"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="Expiration date (optional)"
          style={{ marginRight: '1rem' }}
        />
        <button type="submit">Shorten</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </p>
      )}
    </form>
  );
};

export default Form;

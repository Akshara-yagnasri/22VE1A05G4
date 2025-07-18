import React, { useEffect, useState } from 'react';

const Click = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/statistics')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
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
        {stats.map((item, idx) => (
          <tr key={idx}>
            <td><a href={item.shortUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></td>
            <td>{item.originalUrl}</td>
            <td>{item.clicks}</td>
            <td>{new Date(item.createdAt).toLocaleString()}</td>
            <td>{item.expirationDate ? new Date(item.expirationDate).toLocaleDateString() : 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Click;

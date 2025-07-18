import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
  const { code } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/redirect/${code}`)
      .then(res => res.json())
      .then(data => {
        if (data?.originalUrl) {
          window.location.href = data.originalUrl;
        } else {
          alert("Invalid or expired link.");
        }
      });
  }, [code]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;

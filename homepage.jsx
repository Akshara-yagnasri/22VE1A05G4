import React from 'react';
import Form from '../components/form';
import List from '../components/list';

const Home = () => (
  <div style={{ padding: '2rem' }}>
    <h1>URL Shortener</h1>
    <Form />
    <List />
  </div>
);

export default Home;

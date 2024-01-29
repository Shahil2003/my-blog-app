import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-container">
        {blogs.map(blog => (
          <div className="card" key={blog.id}>
            <p>ID: {blog.id}</p>
            <p>Title: {blog.title}</p>
          </div>
        ))}
      </div>

      <div className="list-container">
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <p>ID: {blog.id}</p>
              <p>Title: {blog.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Post } from "./Post"

const Forums = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from the database
  useEffect(() => {
    const fetchPosts = async () => {
      // Replace with your API call to fetch posts
      const response = await fetch('./tempposts.json');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const stringToColor = (str) => {
    // Hash the string
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    // Convert the hash into a 6 digit hexadecimal code
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }
  
    return color;
  }
  



  return (
    <Container>
      <div className='forums-list'>
        {posts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="forum-post">
              <div className='forum-post-header' style={{backgroundColor: stringToColor(post.title)}}>
                <h3>{post.title}</h3>
                <h4>By <span style={{fontWeight: "bold"}}>{post.author}</span> at {new Date(post.date).toLocaleString()}</h4>
              </div>
              <p>{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Forums;


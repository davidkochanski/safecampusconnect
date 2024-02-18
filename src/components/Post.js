// Post.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Loading from './Loading';

const Post = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/tempposts.json');
      const posts = await response.json();
      const foundPost = posts.find(p => p.id === parseInt(postId, 10));
      setPost(foundPost);
    };

    fetchPost();
  }, [postId]);

  if (!post) return <Loading/>

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
  
  const goBack = () => {
    history.goBack();
  }

  const formatDateNicely = (dateTimeString) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateTimeString);

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    let hour = date.getHours();
    const minute = date.getMinutes();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'

    const formattedMinute = minute < 10 ? '0' + minute : minute;

    return `${month}. ${day} ${year} @ ${hour}:${formattedMinute} ${amPm}`;
}


  return (
    <>
    <div className='post-container'>
        <div className="post">
        <h2 style={{backgroundColor: post.colour}}>{post.title}</h2>
        <h4>By {post.author} at {formatDateNicely(new Date(post.date))}</h4>
        <p>{post.content}</p>
        </div>
        <button onClick={goBack} type="button">&lt; Back</button>

    </div>

    </>
  );
};

export default Post;

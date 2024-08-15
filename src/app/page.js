"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Main from "./components/Home/Main";
import Search from "./components/Home/Search";
import List from "./components/Home/List";
import Posts from "./components/Home/Posts";
import CreatePost from "./components/Home/CreatePost"; 
// import List from "./components/Home/List"; // Import GameList
import app from './pages/shared/FirebaseConfig';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false); 

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = [];
      querySnapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postsData);
      setFilteredPosts(postsData); 
    };

    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
    setFilteredPosts([newPost, ...posts]);
    setShowCreatePost(false);
  };

  const handleSearch = (term) => {
    const filtered = posts.filter(post =>
      post.zipcode.trim() === term.trim() || // Search by zipcode
      post.title.toLowerCase().includes(term.toLowerCase()) || // Search by title
      post.description.toLowerCase().includes(term.toLowerCase()) // Search by description
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <Navbar onShowCreatePost={() => setShowCreatePost(true)} />
      {showCreatePost ? (
        <CreatePost onPostCreated={handlePostCreated} /> 
      ) : (
        <>
          <Main />
          <Search onSearch={handleSearch} />
          <List onGameSelect={handleSearch} /> {/* Pass the handleSearch function */}
          {/* <List /> */}
          {filteredPosts.length > 0 ? (
            <Posts posts={filteredPosts} />
          ) : (
            <p>No posts found for this search term.</p>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

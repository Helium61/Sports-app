import React from 'react';
import PostItem from './PostItem';

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-auto max-w-4xl">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

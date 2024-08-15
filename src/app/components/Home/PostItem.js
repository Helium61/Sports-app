import React, { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '../../pages/shared/FirebaseConfig';

const PostItem = ({ post }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'posts', post.id));
      // Trigger state update or pass down function to remove post from UI
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-500 dark:border-gray-700 mt-10">
      {/* {post.image && <img className="rounded-t-lg" src={post.image} alt={post.title} />} */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="mb-4 text-gray-700 dark:text-white">
          {post.description}
        </p>
        <p className="mb-1 text-white">Zipcode: {post.zipcode}</p>
        <p className="text-white">Posted on: {new Date(post.date).toLocaleDateString()}</p>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          •••
        </button>
        {showMenu && (
          <div className="absolute top-8 right-2 bg-white border border-gray-200 rounded shadow-lg">
            <button
              onClick={handleDelete}
              className="block px-4 py-2 text-red-600 hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;

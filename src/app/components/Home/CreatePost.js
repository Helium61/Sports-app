import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../pages/shared/FirebaseConfig';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [zipcode, setZipcode] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      description,
      zipcode, 
      date: new Date().toISOString(),
    };

    try {
      const postRef = collection(db, 'posts');
      const docRef = await addDoc(postRef, postData);
      onPostCreated({ id: docRef.id, ...postData });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

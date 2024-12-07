import React from 'react'

// SessionForm.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const SessionForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    date: '',
    title: '',
    summary: '',
    startingLocation: '',
    endingLocation: '',
    lootFound: '',
    photos: [], // This will hold URLs of uploaded photos
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save form data to Firestore
      const docRef = await addDoc(collection(db, 'sessions'), formData);
      console.log('Document written with ID: ', docRef.id);
      // Reset form or redirect as needed
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Session Title" />
      {/* Add other input fields similarly */}
      <button type="submit">Submit Session</button>
    </form>
  );
};

export default SessionForm;
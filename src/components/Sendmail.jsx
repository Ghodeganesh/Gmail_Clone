
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FaRegWindowMinimize } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../Reducs/appSlice';
import { db } from '../../Firbase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Sendmail = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const open = useSelector((store) => store.appslice.open);
  const dispatch = useDispatch();

  const handleCloseCompose = () => {
    dispatch(setOpen(false));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.to || !formData.subject || !formData.message) {
      alert('All fields are required!');
      return;
    }

    try {
      await addDoc(collection(db, 'Emails'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFormData({ to: '', subject: '', message: '' });
      dispatch(setOpen(false));
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div
      className={`${
        open ? 'block' : 'hidden'
      } max-w-full md:max-w-[800px] mx-auto bg-white shadow-lg rounded-t-2xl`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b">
        <h1 className="font-semibold text-gray-800">New Message</h1>
        <div className="flex items-center gap-2">
          <button
            aria-label="Minimize"
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaRegWindowMinimize size="14px" />
          </button>
          <button
            onClick={handleCloseCompose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <RxCross2 size="18px" />
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-4">
        <input
          value={formData.to}
          name="to"
          onChange={handleInputChange}
          type="email"
          placeholder="To"
          className="w-full border-b py-2 px-3 text-gray-700 outline-none focus:border-blue-500"
          required
        />
        <input
          value={formData.subject}
          name="subject"
          onChange={handleInputChange}
          type="text"
          placeholder="Subject"
          className="w-full border-b py-2 px-3 text-gray-700 outline-none focus:border-blue-500"
          required
        />
        <textarea
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          rows="10"
          placeholder="Message"
          className="w-full border py-2 px-3 text-gray-700 outline-none focus:border-blue-500 resize-none"
          required
        />
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Sendmail;

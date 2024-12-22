

import React, { useEffect, useState, useMemo } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../Firbase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../Reducs/appSlice';

const Multimassage = () => {
  const dispatch = useDispatch();
  const { Emails, searchText } = useSelector((store) => store.appslice);
  const [tempEmails, setTempEmails] = useState(Emails);

  // Fetch emails from Firestore and listen to changes
  useEffect(() => {
    const q = query(collection(db, 'Emails'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe();
  }, [dispatch]);

  // Memoized filtering of emails based on search text
  const filteredEmails = useMemo(() => {
    return Emails.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [Emails, searchText]);

  return (
    <div className="email-list">
      {filteredEmails.length > 0 ? (
        filteredEmails.map((email, index) => <Message  key={index} data={email} />)
      ) : (
        <p className="text-center  text-gray-500">No emails found</p>
      )}
    </div>
  );
};

export default Multimassage;

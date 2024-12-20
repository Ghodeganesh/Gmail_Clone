import React, { useEffect } from 'react'
import Message from "./Message"
import { FaRegSquare } from "react-icons/fa";
import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../Firbase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../Reducs/appSlice';
// import store from '../Reducs/strore'
const Multimassage = () => {

  const dispatch = useDispatch()
  const { Emails } = useSelector(store => store.appslice)
  useEffect(() => {
    const q = query(collection(db, "Emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (Snapshot) => {
      const allEmails = Snapshot.docs.map((data) => ({ ...data.data(), id: data.id }))
      console.log(allEmails)
      dispatch(setEmails(allEmails))

    })
    return () => unsubscribe()
  }, [])


  return (
    <div>
      {
        Emails.map((data, index) => {
          return <Message key={index} data={data} />
        })
      }
    </div>
  )
}

export default Multimassage;
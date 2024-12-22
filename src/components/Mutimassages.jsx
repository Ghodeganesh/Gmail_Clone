import React, { useEffect, useState } from 'react'
import Message from "./Message"
import { FaRegSquare } from "react-icons/fa";
import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../Firbase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../Reducs/appSlice';
// import store from '../Reducs/strore'
// import { searchText } from '../Reducs/appSlice';

const Multimassage = () => {

  const dispatch = useDispatch()

  const { Emails, searchText } = useSelector(store => store.appslice)
  const [tempEmails, setTempEmails] = useState(Emails)

  useEffect(() => {
    const q = query(collection(db, "Emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (Snapshot) => {
      const allEmails = Snapshot.docs.map((data) => ({ ...data.data(), id: data.id }))
      console.log(allEmails)
      dispatch(setEmails(allEmails))

    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const filterData = Emails.filter((email) => {
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
    })
    setTempEmails(filterData)
  }, [searchText, Emails])



  return (
    <div>
      {
        tempEmails.map((data, index) => {
          return <Message key={index} data={data} />
        })
      }
    </div>
  )
}

export default Multimassage;
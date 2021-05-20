import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import InboxIcon from "@material-ui/icons/Inbox";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import TabItem from "./partials/TabItem";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  colorRed: {
    fill: "rgb(220, 38, 38) !important",
  },
}));

const Tabs = () => {

  const [emails, setEmails] = useState([]);
  
  useEffect(() => {
    db.collection('emails').orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id:doc.id,
          data: doc.data(),
        }))
      )
    })
  }, []);

  const classes = useStyles();
  return (
    <div className="h-screen overflow-y-scroll">
      <div className="grid grid-cols-5 gap-0">
        <button type="button" className="flex items-center px-5 py-2.5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none relative">
          <span className="mr-4">
            <InboxIcon className={classes.colorRed} />
          </span>
          <div className="flex flex-col items-start justify-center text-red-600">
            <span>Birincil</span>
          </div>
          <div className="absolute bottom-0 h-1 bg-red-600 rounded-t-md w-11/12 -ml-2"></div>
        </button>
        <button type="button" className="flex items-center px-5 py-2.5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none">
          <span className="mr-4">
            <GroupIcon />
          </span>
          <div className="flex flex-col items-start justify-center primaryColor">
            <span>Sosyal</span>
          </div>
        </button>
        <button type="button" className="flex items-center px-5 py-2.5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none">
          <span className="mr-4">
            <LocalOfferIcon />
          </span>
          <div className="flex flex-col items-start justify-center primaryColor">
            <span>
              Tanıtımlar
              <span className="bg-green-700 text-white px-1 text-xs font-semibold ml-3 rounded inline-block leading-5">35 Yeni</span>
            </span>
            <span className="text-xs opacity-60">Lorem İpsum Dolor</span>
          </div>
        </button>
        <button type="button" className="flex items-center px-5 py-2.5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none">
          <span className="mr-4">
            <LocalOfferIcon />
          </span>
          <div className="flex flex-col items-start justify-center primaryColor">
            <span className="flex items-center">
              Güncellemeler
              <span className="bg-yellow-600 text-white px-1 text-xs font-semibold ml-3 rounded inline-block leading-5">50 Yeni</span>
            </span>
            <span className="text-xs opacity-60">Lorem İpsum Dolor</span>
          </div>
        </button>
        <button type="button" className="flex items-center px-5 py-2.5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none">
          <span className="mr-4">
            <QuestionAnswerIcon />
          </span>
          <div className="flex flex-col items-start justify-center primaryColor">
            <span className="flex items-center">Forumlar</span>
          </div>
        </button>
      </div>
      <div>
        {emails.map(({id, data: {to,subject, message, timestamp}}) => (
          <TabItem key={id} id={id} to={to} subject={subject} message={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;

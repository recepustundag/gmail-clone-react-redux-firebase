import React from "react";
import { useSelector } from 'react-redux'

import { IconButton, Button, makeStyles, Avatar } from "@material-ui/core";

/* icons */
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

import DetailsActions from "./DetailActions";
import { selectDetailMail } from '../features/mail/mailSlice'
import { selectUser } from "../features/user/userSlice";

const useStyles = makeStyles(() => ({
  buttonInbox: {
    fontSize: "12px",
    padding: "2px",
    backgroundColor: "rgb(221, 221, 221)",
    color: "rgb(102, 102, 102)",
  },
}));

const Details = () => {
  const classes = useStyles();

  const mail = useSelector(selectDetailMail)
  const user = useSelector(selectUser)
  return (
    <div>
      <DetailsActions />
      <div className="p-4">
        <div className="flex items-center space-x-1 pl-8">
          <div className="text-3xl">{mail.subject}</div>
          <IconButton color="primary" component="span">
            <LabelImportantIcon />
          </IconButton>
          <Button className={classes.buttonInbox}>Gelen Kutusu</Button>
        </div>
        <div className="py-6 flex items-start">
          <div className="w-16">
            <Avatar alt={mail.to} src={user.photoUrl} />
          </div>
          <div className="flex flex-col items-start px-4">
            <div className="font-semibold text-lg flex items-start">
              {mail.to}
              <span className="text-gray-400 text-sm ml-2"> {`<${mail.time}>`} </span>
            </div>
            <div className="text-gray-400 text-sm">Alıcı: Ben</div>
            <div className="leading-9">
              <p>
                {mail.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

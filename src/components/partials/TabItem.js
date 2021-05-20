import React from "react";
import { useHistory } from "react-router-dom";

/* core */
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";

/* icons */
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mail/mailSlice";
const TabItem = ({ id, to, subject, message, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const detailMail = () => {
    dispatch(
      selectMail({
        id,
        to,
        subject,
        message,
        time,
      })
    );
    history.push('/email')
  };

  return (
    <div className="flex items-center text-sm relative px-3 cursor-pointer transition duration-300 ease-in-out border border-gray-200 tab-item">
      <div className="flex items-center">
        <Checkbox size="small" color="default" inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
        <IconButton color="primary" component="span">
          <StarIcon fontSize="small" />
        </IconButton>
        <IconButton color="primary" component="span">
          <LabelImportantIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="primaryColor whitespace-nowrap mr-16">{to}</div>
      <div onClick={detailMail} className="w-full flex items-center justify-between">
        <div className="primaryColor truncate max-w-3xl">
          {subject} - {message}
        </div>
        <div className="primaryColor text-xs relative right-0">{time}</div>
      </div>
      <div className="flex items-center absolute right-0 opacity-0 transition bg-white duration-150 ease-in-out right-action">
        <IconButton color="primary" component="span">
          <ArchiveIcon />
        </IconButton>
        <IconButton color="primary" component="span">
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" component="span">
          <EmailIcon />
        </IconButton>
        <IconButton color="primary" component="span">
          <WatchLaterIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TabItem;

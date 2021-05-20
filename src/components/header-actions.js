import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

/* icons */
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import DialpadIcon from '@material-ui/icons/Dialpad';

import profilePhoto from '../assets/img/avatar.jpg'

const useStyles = makeStyles((theme) => ({
  normal: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const HeaderActions = () => {
  const classes = useStyles();

  return (
    <div className="flex items-center justify-end px-3 space-x-1">
      <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2"><HelpOutlineIcon /></button>
      <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2"><SettingsIcon /></button>
      <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2"><DialpadIcon /></button>
      <Avatar alt="Recep Üstündağ" src={profilePhoto} className={classes.normal} />
    </div>
  )
}

export default HeaderActions

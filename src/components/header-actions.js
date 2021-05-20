import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

/* icons */
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import DialpadIcon from '@material-ui/icons/Dialpad';

import { logout, selectUser } from '../features/user/userSlice';
import { auth } from '../firebase';

const useStyles = makeStyles((theme) => ({
  normal: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const HeaderActions = () => {

  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(logout());
    })
  }

  return (
    <div className="flex items-center justify-end px-3 space-x-1">
      <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2"><HelpOutlineIcon /></button>
      <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2"><SettingsIcon /></button>
      <button type="button" className="flex items-center justiy-center transition duration-300 hover:bg-gray-100 rounded-full p-2"><DialpadIcon /></button>
      <Avatar onClick={signOut} alt="Recep Üstündağ" src={user.photoUrl} className={classes.normal} />
    </div>
  )
}

export default HeaderActions

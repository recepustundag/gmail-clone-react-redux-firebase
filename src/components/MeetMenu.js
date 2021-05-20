import React from 'react'

/* icons */
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';

/* components */
import Item from './partials/MenuItems'


const MeetMenu = ({title}) => {
  return (
    <div className="h-64 overflow-y-scroll border-b-2 border-gray-100">
      <span className="pl-8 py-2 inline-block text-sm font-semibold">Meet</span>
      <Item icon={<VideocamIcon fontSize="small" />} name="Yeni Toplantı" />
      <Item icon={<KeyboardIcon fontSize="small" />} name="Toplantıya Katıl" />
    </div>
  )
}

export default MeetMenu

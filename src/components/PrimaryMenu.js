import React from 'react'

/* icons */
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import LabelIcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* components */
import Item from './partials/MenuItems'
import { red } from '@material-ui/core/colors';


const PrimaryMenu = () => {
  return (
    <div className="h-64 overflow-hidden hover:overflow-y-scroll border-b-2 border-gray-100">
      <Item icon={<InboxIcon fontSize="small" style={{color: red[600]}} />} name="Gelen Kutusu" notification={14} className="bg-red-200 text-red-600 font-semibold" />
      <Item icon={<StarIcon fontSize="small" />} name="Yıldızlı" />
      <Item icon={<WatchLaterIcon fontSize="small" />} name="Ertelenenler" />
      <Item icon={<LabelImportantIcon fontSize="small" />} name="Önemli" />
      <Item icon={<SendIcon fontSize="small" />} name="Gönderilmiş Postalar" />
      <Item icon={<NoteIcon fontSize="small" />} name="Taslaklar" />
      <Item icon={<LabelIcon fontSize="small" />} name="Kategoriler" />
      <Item icon={<LabelIcon fontSize="small" />} name="Belgelerim" />
      <Item icon={<ExpandMoreIcon fontSize="small" />} name="Diğer" />
    </div>
  )
}

export default PrimaryMenu

import React from "react";
import { Link } from "react-router-dom";

/* core */
import { Tooltip, Button, IconButton, makeStyles } from "@material-ui/core";

/* icons */
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles(() => ({
  fontSize: {
    fontSize: "12px",
    padding: "8px",
  },
}));

const ContentActions = () => {
  const classes = useStyles();
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      <div className="flex items-center">
        <Tooltip title="Gelen Kutusuna Geri Dön">
          <Link to="/">
            <IconButton color="primary" component="span">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Arşivle">
          <IconButton color="primary" component="span">
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Spam Bildir">
          <IconButton color="primary" component="span">
            <ReportIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sil">
          <IconButton color="primary" component="span">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <div className="h-7 border-r-2 border-gray-200 px-2"></div>
        <Tooltip title="Okunmadı Olarak işaretle">
          <IconButton color="primary" component="span">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Ertele">
          <IconButton color="primary" component="span">
            <WatchLaterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Görevlere Ekle">
          <IconButton color="primary" component="span">
            <PostAddIcon />
          </IconButton>
        </Tooltip>
        <div className="h-7 border-r-2 border-gray-200 px-2"></div>
        <Tooltip title="Taşı">
          <IconButton color="primary" component="span">
            <FolderSpecialIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Etiketler">
          <IconButton color="primary" component="span">
            <LabelIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Diğer">
          <IconButton color="primary" component="span">
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        <Button className={classes.fontSize}>50 satırdan 1-50 arası</Button>
        <IconButton color="primary" component="span">
          <ChevronLeftIcon />
        </IconButton>
        <IconButton color="primary" component="span">
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ContentActions;

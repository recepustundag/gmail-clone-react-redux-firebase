import React from "react";

/* core */
import { Checkbox, Tooltip, Button, IconButton, makeStyles } from '@material-ui/core'

/* icons */
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
        <Tooltip title="Add" aria-label="Tümünü Seç">
          <>
            <button type="Seçin">
              <Checkbox color="default" inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
            </button>
            <button type="button">
              <ExpandMoreIcon fontSize="small" />
            </button>
          </>
        </Tooltip>
        <Tooltip title="Add" aria-label="Yenile">
          <IconButton color="primary" component="span">
            <RefreshIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="Diğer">
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

import * as React from "react";
import {
  useRAAFSelect,
  useRAAFDispatch,
} from "../../";
import {
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Icon,
  selectShared,
  setSharedKey,
} from "../../";

export default function Notification() {
  const dispatch = useRAAFDispatch();
  const shared = useRAAFSelect(selectShared);
  const {
    notification, 
  } = shared;
  if( !notification ) return null;
  let { code, severity, message } = notification;
  if ( typeof message !== "string") return null;
  const closeSnackbar = () =>  dispatch(setSharedKey({
    key: "notification", 
    value: null 
  }))
  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical: "top", 
        horizontal: "right" 
      }}
      autoHideDuration={ 3500 }
      onClose={ closeSnackbar }>
      <Alert 
        onClose={ closeSnackbar }
        // @ts-ignore
        severity={severity}>
        {code !== 0 ? <b>{code}&nbsp;</b> : null }
        <br />
        { message }
      </Alert>
    </Snackbar>
  )
};

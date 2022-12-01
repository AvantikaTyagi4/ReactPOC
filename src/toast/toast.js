import { Snackbar,Alert } from "@mui/material";
import * as React from 'react';
export default function Toast(){

    const  setOpen =true;

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        this.setState({ setOpen: false });
      };
    return (
        <Snackbar
            open={setOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            // message=""
            // action={action}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
              variant="filled"
            >
              Entered wrong credentials
            </Alert>
          </Snackbar>
    );

}
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Alert} from "@mui/material";
import {Dispatch, SetStateAction, useCallback} from "react";

interface Props {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
}

export default function AgentIsDisabledDialog({open, setOpen}: Props) {

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"It was grey. Why did you click that? 😠"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Alert severity="error">Sowwwy, this agent does not have any current lineups at the moment. Please, check back later!</Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

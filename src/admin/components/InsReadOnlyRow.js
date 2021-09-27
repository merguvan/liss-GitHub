import React from "react";
import { TableCell, TableRow, Button, makeStyles } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
  admin_cell: {
  },
  // bg: {
  //   backgroundColor: "#DFFDFF",
  // },
  primary: {
    background:"#9CB380",
    color:"white",
  },
  secondary: {
    background: "#E66B4C",
    color:"white",
  },
  
});

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.bg}>
      <TableCell className={classes.admin_cell}>{contact.fullName}</TableCell>
      <TableCell className={classes.admin_cell}>{contact.address}</TableCell>
      <TableCell className={classes.admin_cell}>{contact.phoneNumber}</TableCell>
      <TableCell className={classes.admin_cell}>{contact.email}</TableCell>
      <TableCell className={(classes.admin_cell, classes.actions)}>
      <Stack spacing={2} direction="row"className={(classes.action)}>
        <Button 
        className={(classes.primary)}
        variant="contained" 
         size="small"
         type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <EditIcon/>
        </Button >
        <Button
        className={(classes.secondary)}
          variant="contained"
          size="small"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <DeleteIcon/>
        </Button>
      </Stack>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;

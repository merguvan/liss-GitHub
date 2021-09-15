import React from "react";
import {TableCell, TableRow, Button, makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  cell:{
    padding:5,
    paddingLeft:15,
  }
});

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell>{contact.fullName}</TableCell>
      <TableCell>{contact.address}</TableCell>
      <TableCell>{contact.phoneNumber}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell className={classes.cell}>
        <Button
          color="secondary"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button
        color="primary"
        type="button" onClick={() => handleDeleteClick(contact.id)}>
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;

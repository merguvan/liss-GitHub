import React from "react";
import { TableCell, TableRow, Button, makeStyles } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles({
  admin_cell: {
    padding: 5,
    paddingLeft: 15,
  },
  // bg: {
  //   backgroundColor: "#DFFDFF",
  // },
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
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <EditIcon/>
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <DeleteIcon/>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;

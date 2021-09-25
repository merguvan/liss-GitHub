import React from "react";
import { TableCell, TableRow, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  admin_cell:{
    padding:5,
    paddingLeft:15,
  }
});

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.admin_cell}>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell className={classes.admin_cell}>
        <Button color="primary" type="submit">Save</Button>
        <Button color="primary" type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;

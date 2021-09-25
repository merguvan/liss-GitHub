import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <TableRow>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
      <Button
          variant="outlined"
          size="small"
          color="secondary" 
          type="submit"><SaveIcon/>
      </Button>
      <Button
          variant="contained"
          size="small"
          color="primary" 
          type="button" 
          onClick={handleCancelClick}>
          <CancelIcon/>
      </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;
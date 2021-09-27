import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json";
import InsReadOnlyRow from "../components/InsReadOnlyRow";
import InsEditableRow from "../components/InsEditableRow";
import DownloadIcon from '@mui/icons-material/Download'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Button
} from "@material-ui/core";
const admin_Main_Styles = makeStyles({
  admin_table: {
    minWidth: 650,
    fontWeight: 300,
  },
  // bg: {
  //   backgroundColor: "#E5E1EE",
  // },
  download:{
    fontWeight:700,
  }
});
const App = () => {
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  const classes = admin_Main_Styles();

  return (
    <TableContainer component={Paper} className="app-container">
    <div className="flex-container">
      <h2>Institutional</h2>
      <Button
      className={(classes.download)}
      variant="outlined" 
      startIcon={<DownloadIcon />}>Download</Button>
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <Table className={classes.admin_table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <InsEditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <InsReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </form>
    </TableContainer>
  );
};

export default App;
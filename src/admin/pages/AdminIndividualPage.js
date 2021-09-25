import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const admin_Main_Styles = makeStyles({
  admin_table: {
    minWidth: 650,
  },
  bg: {
    backgroundColor: "#E5E1EE",
  },
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

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Individual" value="1" />
            <Tab label="Institutional" value="2" />
            <Tab label="Admin" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TableContainer component={Paper} className="app-container">
          <h2>Individual</h2>
            <form onSubmit={handleEditFormSubmit}>
              <Table className={classes.admin_table} aria-label="simple table">
                <TableHead className={classes.bg}>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Nationality</TableCell>
                    <TableCell>Work Permit</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
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
        </TabPanel>
        <TabPanel value="2">
        <TableContainer component={Paper} className="app-container">
        <h2>Institutional</h2>
            <form onSubmit={handleEditFormSubmit}>
              <Table className={classes.admin_table} aria-label="simple table">
                <TableHead className={classes.bg}>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Nationality</TableCell>
                    <TableCell>Work Permit</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
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
        </TabPanel>
        <TabPanel value="3">
        <TableContainer component={Paper} className="app-container">
        <h2>Admin</h2>
            <form onSubmit={handleEditFormSubmit}>
              <Table className={classes.admin_table} aria-label="simple table">
                <TableHead className={classes.bg}>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Nationality</TableCell>
                    <TableCell>Work Permit</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
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
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default App;

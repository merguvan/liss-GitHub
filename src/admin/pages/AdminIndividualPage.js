import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
import IndReadOnlyRow from "../components/IndReadOnlyRow";
import IndEditableRow from "../components/IndEditableRow";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import exportFromJSON from "export-from-json";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Button,
} from "@material-ui/core";

const downloadXL = () => {
  let time = format(new Date(), "hh/mm");
  let date = format(new Date(), "yyyy/MM/dd");

  const fileName = "Individuals date_" + date + "_time_" + time;
  const exportType = exportFromJSON.types.xls;
  exportFromJSON({ data, fileName, exportType });
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
  },
}));

const admin_Main_Styles = makeStyles({
  admin_table: {
    minWidth: 650,
  },
  download: {
    fontWeight: 700,
  },
  // bg: {
  //   backgroundColor: "#E5E1EE",
  // },
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
        <h2>Individual</h2>
        <Button
          onClick={downloadXL}
          className={classes.download}
          variant="outlined"
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <Table className={classes.admin_table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Work Permit</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Courses</StyledTableCell>
              <StyledTableCell>Theses</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <IndEditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <IndReadOnlyRow
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

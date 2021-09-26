import React from "react";
import { TableCell, TableRow, Button, makeStyles } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles({
  admin_cell: {
  },
  // bg: {
  //   backgroundColor: "#DFFDFF",
  // },
});

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.bg}>
      <TableCell className={classes.admin_cell}>{contact.fullName}</TableCell>
      <TableCell className={classes.admin_cell}>{contact.address}</TableCell>
      <TableCell className={classes.admin_cell}>
        {contact.phoneNumber}
      </TableCell>
      <TableCell className={classes.admin_cell}>{contact.email}</TableCell>
      <TableCell className={classes.admin_cell}>{contact.email}</TableCell>
      <TableCell className={classes.admin_cell}>{contact.email}</TableCell>
      <TableCell className={classes.admin_cell}>
      <Stack spacing={2} direction="row"className={(classes.actions)}>
        <BootstrapButton variant="contained" disableRipple
          onClick={(event) => handleEditClick(event, contact)}
        >
          <EditIcon/>
        </BootstrapButton >
        <Button
          variant="contained"
          size="small"
          color="primary"
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

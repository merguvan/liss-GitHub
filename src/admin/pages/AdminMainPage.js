import React from "react";
import AdminIndividualPage from "./AdminIndividualPage";
import AdminInstitutionalPage from "./AdminInstitutionalPage";
import AdminPage from "./AdminPage";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./App.css";

const AdminMainPage = () => {  
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1"}}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingLeft:"4%" }}>
        <TabList sx={{ p: 1 }} variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Individual" value="1" />
          <Tab label="Institutional" value="2" />
          <Tab label="Admin" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <AdminIndividualPage/>
      </TabPanel>
      <TabPanel value="2">
      <AdminInstitutionalPage/>
      </TabPanel>
      <TabPanel value="3">
        <AdminPage/>
     </TabPanel>
    </TabContext>
  </Box>
  );
};

export default AdminMainPage;

import { Fragment, useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import schema from "./schema.json";
import uischema from "./uischema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { makeStyles } from "@material-ui/core/styles";
import { Link} from "react-router-dom";
import "./addressJSON.css"
import { AirlineSeatLegroomExtra } from "@material-ui/icons";

const initalData={
      address:[{personAddressType:"Legal"}]
}

const useStyles = makeStyles((_theme) => ({
  container: {
    padding: "1.5em",
    minWidth: "900px",
  },
  title: {
    textAlign: "center",
    padding: "0.5em",
  },
  dataContent: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "0.25em",
    backgroundColor: "#cecece",
    marginBottom: "1rem",
    padding: "1em",
    height: "22rem",
  },
  resetButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  demoform: {
    margin: "auto",
    padding: "1rem",
  },
}));


const renderers = [
  ...materialRenderers,
];

const ContactPerson = ({ history }) => {
  const classes = useStyles();
  const [jsonformsData, setJsonformsData] = useState(initalData);
  const [save, setSave] = useState(false);

  useEffect(() => {
    console.log(jsonformsData)
    if (
      Object.values(jsonformsData).join("") !==
      Object.values(setJsonformsData).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [jsonformsData, setJsonformsData]);

  const handleSubmit = (e) => {
    if (Object.values(setJsonformsData).join("").length > 0) {
      console.log("data sent");
    } else {
      console.log("fill all the values");
    }
  };

  console.log(jsonformsData);

  return (
    <div style={{"padding":"20px"}}>
      <Fragment>
      <Grid
        container
        justify={"center"}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={12}>

          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={jsonformsData}
              renderers={renderers}
              cells={materialCells}
              onChange={({ errors, data }) => setJsonformsData(data)}
            />
          </div>
        </Grid>
        
      </Grid>
        <footer style={{"display":"flex", "justifyContent":"center"}}>
          <Link to="/institutional">
            <Button
              variant="contained"
              color="blue"
              type="submit"
              onClick={handleSubmit}
            >
              {save ? "Save" : "Close"}
            </Button>
          </Link> 
        </footer>
    </Fragment>
    </div>
  );
};

export default ContactPerson;
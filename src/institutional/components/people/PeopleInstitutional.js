import { Fragment, useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import './App.css';
import schema from "./schema.json";
import uischema from "./uischema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import { makeStyles } from "@material-ui/core/styles";
import { person } from "@jsonforms/examples";
import { Link } from "react-router-dom";

const useStyles = makeStyles((_theme) => ({
  container: {
    padding: "1.5em",
    width: "100%",
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
    height: "2rem",
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

const initialData = {};

const renderers = [...materialRenderers];

const PeopleInstitutional = ({ history }) => {
  const classes = useStyles();
  const [jsonformsData, setJsonformsData] = useState(initialData);
  const [save, setSave] = useState(false);

  useEffect(() => {
    if (
      Object.values(jsonformsData).join("") !==
      Object.values(initialData).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [jsonformsData]);

  const handleSubmit = (e) => {
    if (Object.values(setJsonformsData).join("").length > 0) {
      console.log("data sent");
    } else {
      console.log("fill all the values");
    }
  };

  return (
    <Fragment>
      <Grid
        container
        justify={"center"}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={12}>
          <Typography variant={"h3"} className={classes.title}>
            Institution Information
          </Typography>
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
        <Grid item sm={12} className={classes.resetButton}>
          <Link to="/">
            <Button
              variant="contained"
              color="blue"
              type="submit"
              onClick={handleSubmit}
            >
              {save ? "Save" : "Close"}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PeopleInstitutional;

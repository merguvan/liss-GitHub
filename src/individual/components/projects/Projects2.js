import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import schema from "./schema.json";
import uischema from "./uischema.json";
import { Link } from "react-router-dom";

import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { Fragment } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { JsonForms } from "@jsonforms/react";

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

const renderers = [...materialRenderers];
const initialData = {
  project: [
    {
      project: {
        personGrantCurrency: "",
        personInstGrantAmount: "",
        personProjectGrantAmount: "",
        personProjectGrantProvider: "",
        personProjectName: "",
        personProjectNumber: "",
        personProjectRole: "",
        personProjectsOtherCurrency: "",
      },
    },
  ],
};
const Projects = (props) => {
  const classes = useStyles();
  const [jsonformsData, setJsonformsData] = useState(initialData);
  const [save, setSave] = useState(false);

  const [projects, setProjects] = useState({});
  const [show, setShow] = useState(true);
  const handleProjects = (e) => {
    setProjects({
      ...projects,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (Object.values(projects).length > 0) {
      console.log("data sent");
    } else {
      console.log("fill all the values");
    }
  };
  console.log(jsonformsData);
  return (
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
        <Grid item sm={12} className={classes.resetButton}>
          <Link to="/individual">
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

export default Projects;

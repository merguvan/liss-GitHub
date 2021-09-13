import { Fragment, useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import schema from "./schema.json";
import uischema from "./uischema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

import { addPersonalInfo } from "../../../actions/personalInfoActions";
import { useDispatch } from "react-redux";

const initalData = {
  address: [{ personAddressType: "Legal" }],
};

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

const ContactPerson = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [jsonformsData, setJsonformsData] = useState(initalData);

  const handleSubmit = (e) => {
    console.log(jsonformsData);
    if (
      (Object.keys(jsonformsData).length === 1 &&
        Object.keys(jsonformsData.address[0]).length > 1) ||
      Object.keys(jsonformsData).length > 1
    ) {
      console.log("object");
      dispatch(addPersonalInfo(jsonformsData));
    } else {
      history.push("/individual");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
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
        <footer style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="blue"
            type="submit"
            onClick={handleSubmit}
          >
            {(Object.keys(jsonformsData).length === 1 &&
              Object.keys(jsonformsData.address[0]).length > 1) ||
            Object.keys(jsonformsData).length > 1
              ? "Save"
              : "Close"}
          </Button>
        </footer>
      </Fragment>
    </div>
  );
};

export default ContactPerson;

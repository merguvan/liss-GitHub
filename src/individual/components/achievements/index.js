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
import { addAchivements } from "../../actions/achievements";
import { useDispatch } from "react-redux";

// const initalData={
//       address:[{personAddressType:"Legal"}]
// }

const useStyles = makeStyles((_theme) => ({
  container: {
    padding: "1.5em",
    width: "80%",
    margin: "auto",
    maxWidth: "100%",
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
  const [jsonformsData, setJsonformsData] = useState("");
  const [save, setSave] = useState("");

  useEffect(() => {
    const tempObject = jsonformsData;
    const keys = Object.keys(tempObject);
    keys.forEach((key) => {
      if (tempObject[key]?.length === 0 || !tempObject[key]) {
        delete tempObject[key];
      }
    });
    setJsonformsData(tempObject);
    Object.keys(jsonformsData).length > 0 ? setSave("Save") : setSave("Close");
  }, [jsonformsData]);

  const handleSubmit = (e) => {
    if ([...jsonformsData].length > 0) {
      dispatch(addAchivements(jsonformsData));
    } else {
      history.push("/individual");
    }
  };
  console.log(jsonformsData);
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
          <Link to="/individual">
            <Button
              variant="contained"
              color="blue"
              type="submit"
              onClick={handleSubmit}
            >
              {save}
            </Button>
          </Link>
        </footer>
      </Fragment>
    </div>
  );
};

export default ContactPerson;

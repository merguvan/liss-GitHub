import { Fragment, useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import newSchema from "./schema.json";
// import uischema from "./uischema.json";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import { makeStyles } from "@material-ui/core/styles";
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

const schemaTemplate = [
  {
    contactPhoneCode: {
      type: "string",
      description: "Country code",
      enum: ["+880", "+32", "+226", "+359"],
    },

    contactPhoneNo: {
      type: "number",
      description: "Please enter your phone number",
      minLength: 1,
      maxLength: 10,
    },

    contactPhoneType: {
      type: "string",
      description: "Please select phone type",
      enum: ["Personal", "Institutional", "Other"],
    },
  },
  {
    contactPhoneCode: {
      type: "string",
      description: "Country code",
      enum: ["+880", "+32", "+226", "+359"],
    },

    contactPhoneNo: {
      type: "number",
      description: "Please enter your phone number",
      minLength: 1,
      maxLength: 10,
    },

    contactPhoneType: {
      type: "string",
      description: "Please select phone type",
      enum: ["Personal", "Institutional", "Other"],
    },
  },
  {
    contactPhoneCode: {
      type: "string",
      description: "Country code",
      enum: ["+880", "+32", "+226", "+359"],
    },

    contactPhoneNo: {
      type: "number",
      description: "Please enter your phone number",
      minLength: 1,
      maxLength: 10,
    },

    contactPhoneType: {
      type: "string",
      description: "Please select phone type",
      enum: ["Personal", "Institutional", "Other"],
    },
  },
];
let uiSchemaTemplate = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Label",
      text: "Contact Phone",
    },

    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/contactPhoneType1",
          label: "Type",
        },
        {
          type: "Control",
          scope: "#/properties/contactPhoneCode1",
          label: "Phone code",
        },
        {
          type: "Control",
          scope: "#/properties/contactPhoneNo1",
          label: "Phone No",
        },
      ],
    },
  ],
};
const ContactPhone = ({ history }) => {
  const classes = useStyles();
  const [jsonformsData, setJsonformsData] = useState("");
  const [save, setSave] = useState(false);
  const [uischema, setUiSchema] = useState({});
  const [schema, setSchema] = useState({});

  useEffect(() => {
    const myObjects = schemaTemplate.map((obj, index) =>
      Object.fromEntries(
        Object.keys(obj).map((el, idx) => [el + index, Object.values(obj)[idx]])
      )
    );

    const tempObject = (object) => {
      let emptyObject = {};
      object.forEach((el) => {
        emptyObject = { ...emptyObject, ...el };
      });
      return emptyObject;
    };

    const schema = {
      type: "object",
      properties: {
        ...tempObject(myObjects),
      },
      required: ["contactPhoneCode0", "contactPhoneNo0", "contactPhoneType0"],
    };
    setSchema(schema);
    const [first, ...rest] = uiSchemaTemplate.elements;
    const tempUiObject = () => {
      const arr = schemaTemplate.map((el, idx) => {
        return {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/contactPhoneType" + idx,
              label: "Type",
            },
            {
              type: "Control",
              scope: "#/properties/contactPhoneCode" + idx,
              label: "Phone code",
            },
            {
              type: "Control",
              scope: "#/properties/contactPhoneNo" + idx,
              label: "Phone No",
            },
          ],
        };
      });
      console.log(arr);
      let emptyObject = [];
      arr.forEach((el) => {
        emptyObject = [...emptyObject, el];
      });
      return emptyObject;
    };
    console.log(uiSchemaTemplate);
    uiSchemaTemplate.elements = [first, ...tempUiObject()];
    console.log(uiSchemaTemplate);
    setUiSchema(uiSchemaTemplate);
    // console.log(uischema[0]);
  }, []);

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
            Contact Phone
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
              // onClick={handleSubmit}
            >
              {save ? "Save" : "Close"}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ContactPhone;

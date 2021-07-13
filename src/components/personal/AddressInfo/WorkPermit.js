import React from "react";
import { Form } from "react-bootstrap";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
const WorkPermit = () => {
  return (
    <div style={{ display: "flex" }}>
      <Form.Label>Work-permit</Form.Label>
      <Form.Control
        id="personWorkPermit"
        name="personWorkPermit"
        type="text"
        // value={addressInfo["personWorkPermit"]}
        // onChange={handlePersonAddressInfo}
        data-toggle="tooltip"
        data-placement="top"
        title="Please enter the country you can work in."
        placeholder=""
        aria-describedby="basic-addon3"
      />
      <div>
        <AiOutlinePlusSquare style={{ fontSize: "1rem" }} />
        <AiOutlineMinusSquare style={{ fontSize: "1rem" }} />
      </div>
    </div>
  );
};

export default WorkPermit;

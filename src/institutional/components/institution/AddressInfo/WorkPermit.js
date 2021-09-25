import React, { useEffect, useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const WorkPermit = ({ handlePersonAddressInfo }) => {
  const { addressInfo: storeAddressInfo } = useSelector(
    (state) => state.personalInfoReducer
  );
  const [addressInfo, setAddressInfo] = useState({ ...storeAddressInfo } || {});
  const [workPermits, setWorkPermits] = useState(
    addressInfo?.personWorkPermit?.split(";").length || 1
  );
  const [workPermitsArray, setWorkPermitsArray] = useState(
    Array.from({ length: workPermits }, (_, i) => i + 1)
  );
  const [workPermitValue, setWorkPermitValue] = useState(
    (addressInfo?.personWorkPermit &&
      Object.fromEntries(
        addressInfo.personWorkPermit
          ?.split(";")
          ?.map((value, idx) => [`workPermit${idx + 1}`, value])
      )) ||
      {}
  );
  const [buttonDisabilty, setButtonDisablity] = useState(true);

  useEffect(() => {
    setWorkPermitsArray(Array.from({ length: workPermits }, (_, i) => i + 1));
  }, [workPermits]);
  useEffect(() => {
    setButtonDisablity(
      [...document.querySelectorAll(".workPermit")]?.some(
        (el) => el?.value === ""
      ) ||
        document.querySelector(`#personWorkPermit${workPermitsArray.length}`)
          ?.value === ""
    );
  }, [workPermitsArray]);

  const handleMinusClick = (event, el) => {
    setWorkPermitsArray(workPermitsArray.filter((minus) => minus !== el));
    setWorkPermits((prev) => prev - 1);
    const tempObject = { ...workPermitValue };
    delete tempObject[`workPermit${el}`];
    setWorkPermitValue(tempObject);
  };
  return (
    <Col xs={12} md={6} lg={6}>
      <Form.Label>
        Work Permit
        <Button
          disabled={buttonDisabilty}
          onClick={() => {
            setWorkPermits((prev) => prev + 1);
          }}
        >
          Plus
        </Button>
      </Form.Label>
      {workPermitsArray.map((el, idx) => (
        <div key={el}>
          <Form.Control
            id={`personWorkPermit${el}`}
            className="workPermit"
            name={`workPermit${el}`}
            type="text"
            data-toggle="tooltip"
            data-placement="top"
            title="Please enter the country you can work in."
            placeholder=""
            aria-describedby="basic-addon3"
            value={workPermitValue[`workPermit${el}`]}
            onChange={handlePersonAddressInfo}
          />
          {el !== 1 && el === workPermitsArray.length && (
            <Button onClick={(event) => handleMinusClick(event, el)}>
              Minus
            </Button>
          )}
        </div>
      ))}
    </Col>
  );
};

export default WorkPermit;

import React, { useEffect, useState } from "react";
import {
  Modal,
  Container,
  Button,
  CloseButton,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { addAchivements } from "../../actions/achievements";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

const Achievements = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { achievements: storeAchievement } = useSelector(
    (state) => state.achievementsReducer
  );
  const [save, setSave] = useState(false);
  const [value, setValue] = useState(null);
  const [achievements, setAchievement] = useState(
    storeAchievement || {}
  );
  const [show, setShow] = useState(true);

  const handleAchievements = (e) => {
    setAchievement({
      ...achievements,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      Object.values(storeAchievement).join("") !==
      Object.values(achievements).join("")
    ) {
      setSave(true);
    } else {
      setSave(false);
    }
  }, [storeAchievement, achievements]);

  const handleSubmit = () => {
    if (Object.values(achievements).join("").length > 0) {
      console.log("calisti");
    } else {
      console.log("calismadi");
    }
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        {" "}
        <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
          <h2>Achievements</h2>
          <p className="modal-description">
            Please provide details about your academic achievements so far.
          </p>
        </Modal.Title>
        <CloseButton
          onClick={() => {
            setShow(!show);
            history.push("/");
          }}
        />
      </Modal.Header>

      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={12}>
                  <Form.Label class="font-weight-bold">
                    Name of the Achievement / Award / Token
                  </Form.Label>
                  <FormControl
                    id="personAchievementName"
                    name="personAchievementName"
                    type="text"
                    value={achievements["personAchievementName"]}
                    onChange={handleAchievements}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Name of the achievement / award / token"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  <Form.Label class="font-weight-bold">Country</Form.Label>
                  <FormControl
                    id="personAchievementCountry"
                    name="personAchievementCountry"
                    type="number"
                    value={achievements["personAchievementCountry"]}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Country where you received the award / token from"
                    onChange={handleAchievements}
                    aria-describedby="basic-addon3"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label class="font-weight-bold">Granted by</Form.Label>
                  <FormControl
                    id="personAchievementGrantedBy"
                    name="personAchievementGrantedBy"
                    type="text"
                    value={achievements["personAchievementGrantedBy"]}
                    onChange={handleAchievements}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="The organization that awarded you with the award / token"
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col xs={12} md={6}>
                  Date{" "}
                  <Form.Control
                    id="personAchievementDate"
                    name="personAchievementDate"
                    type="date"
                    value={achievements["personAchievementDate"]}
                    onChange={handleAchievements}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Date you received the award / token"
                    placeholder=""
                    aria-describedby="basic-addon3"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button onClick={handleSubmit}> {save ? "save" : "close"} </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};


export default Achievements;

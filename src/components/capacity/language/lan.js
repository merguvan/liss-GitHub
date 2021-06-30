import React, { useState, useEffect } from "react";
import { Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";


import languages from "./Languages";

export default function Languages({
  languagesOptionsOn,
  citiesOptionsOn,
  setPersonalInfo,
  personalInfo,
}) {
  const [languages, setLanguages] = useState([]);
  // const [cities, setCities] = useState([]);
  const [countryName, setCountryName] = useState(
    personalInfo?.personCountryOB || ""
  );
  // const [cityName, setCityName] = useState(personalInfo?.personCityOB || "");

  useEffect(() => {
    setLanguages(Country.getAllLanguages());
  }, []);

  const handleKeydown = (e) => {
    if (e.target.name === "personCountryOB") {
      setLanguages(Country.getAllLanguages());
    } else {
      let country = languages.find(
        (country) => country.name === countryName
      ).isoCode;

      // setCities(State.getStatesOfCountry(country));
    }
  };

  const handleChange = (e) => {
    setCountryName(e.target.value);
    if (countryName === "") {
      setLanguages(Country.getAllLanguages());
    } else {
      setLanguages(
        languages.filter((country) =>
          country.name.toLowerCase().includes(countryName.toLowerCase())
        )
      );
    }

    console.log(languages);
  };
  const handleCountryClick = (e) => {
    setPersonalInfo({ ...personalInfo, personCountryOB: e.target.innerText });

    setCountryName(e.target.innerText);

    let country = languages.find(
      (country) => country.name === e.target.innerText
    ).isoCode;

    // setCities(State.getStatesOfCountry(country));
  };


  return (
    <Row>
      <Col xs={6} md={6} lg={6}>
        <Form.Group>
          <Form.Label>Birth Of Country</Form.Label>
          <Form.Control
            name="personCountryOB"
            value={countryName}
            onChange={handleChange}
            onKeyDown={handleKeydown}
          />
        </Form.Group>
        {languagesOptionsOn && (
          <ListGroup name="personCountryOB" className="country-container">
            {languages.map((country, idx) => (
              <ListGroup.Item
                key={idx}
                aria-autocomplete={false}
                onClick={handleCountryClick}
                className="country"
              >
                {country.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}

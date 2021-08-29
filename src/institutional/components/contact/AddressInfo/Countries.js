import React, { useState, useEffect } from "react";
import { Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";
import AddressInfoJs from ".";

const url = "https://countriesnow.space/api/v0.1/countries/states";

export default function Countries({
  countriesOptionsOn,
  citiesOptionsOn,
  setAddressInfo,
  addressInfo,
}) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryName, setCountryName] = useState(
    addressInfo["personCountry"] || ""
  );
  const [cityName, setCityName] = useState(addressInfo["personCity"] || "");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res.data);
      });
  }, []);
  const handleChange = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
    setCountryName(e.target.value);
    setCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(countryName.toLowerCase())
      )
    );
  };
  const handleCountryClick = (e) => {
    setAddressInfo({ ...addressInfo, personCountry: e.target.innerText });
    setCountryName(e.target.innerText);
  };
  const handleCityClick = (e) => {
    setAddressInfo({ ...addressInfo, personCity: e.target.innerText });
    setCityName(e.target.innerText);
  };
  const findCities = (e) => {
    const city = countries.find((country) => country.name === countryName);
    setCities(city.states);
    setAddressInfo({ ...addressInfo, personCity: e.target.innerText });
  };
  const handleCityChange = (e) => {
    setCityName(e.target.value);
    findCities(e);
    const tempcity = cities.filter((city) =>
      city.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCities(tempcity);
    // setAddressInfo({...addressInfo,[e.target.name]:e.target.value})
  };
  const handleCountryFormClick = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  return (
    <Form.Group>
      <Form.Row>
        <Col xs={12} md={6} lg={6}>
          <Form.Label> Country</Form.Label>
          <Form.Control
            id="personCountry"
            name="personCountry"
            value={countryName}
            onChange={handleChange}
            onClick={handleCountryFormClick}
            data-toggle="tooltip"
            data-placement="top"
            title="" //from state()!!!
            placeholder=""
            aria-describedby="basic-addon3"
          />
          {countriesOptionsOn && (
            <ListGroup name="personCountry" className="country-container">
              {countries.map((country, idx) => (
                <ListGroup.Item
                  name="personCountry"
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

        <Col xs={12} md={6} lg={6}>
          <Form.Group>
            <Form.Label> City</Form.Label>
            <Form.Control
              id="personCity"
              name="personCity"
              disabled={!countryName}
              value={cityName}
              onChange={handleCityChange}
              onClick={findCities}
              data-toggle="tooltip"
              data-placement="top"
              title="" //from state() !!!!
              placeholder=""
              aria-describedby="basic-addon3"
            />
          </Form.Group>
          {cities.length > 0 && citiesOptionsOn && (
            <ListGroup name="personCity" className="city-container">
              {cities?.map((city, idx) => (
                <ListGroup.Item
                  key={idx}
                  onClick={handleCityClick}
                  className="city"
                >
                  {city.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Form.Row>
    </Form.Group>
  );
}

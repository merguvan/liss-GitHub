import React,{useState,useEffect} from "react";
import { Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";

import { Country, State, City }  from 'country-state-city';

const url='https://countriesnow.space/api/v0.1/countries/states'


export default function Countries({countriesOptionsOn,citiesOptionsOn,setPersonalInfo,personalInfo}) {
  const [countries,setCountries]=useState([])
  const[cities,setCities]=useState([])
  const [countryName,setCountryName]=useState(personalInfo?.personCountryOB||'')
  const[cityName,setCityName]=useState(personalInfo?.personCityOB||'')



  useEffect(()=>{
  setCountries(Country.getAllCountries())
    
  }
  
  ,[])


  const handleKeydown=(e)=>{
    if(e.target.name==='personCountryOB'){
      setCountries(Country.getAllCountries())
    }else{
      let  country =countries.find(country=>country.name===countryName).isoCode
   
      setCities(State.getStatesOfCountry(country))
    }
  }

  const handleChange=(e)=>{
      
    setCountryName(e.target.value)
    if(countryName===''){
      setCountries(Country.getAllCountries())
    }else{
     
      setCountries(countries.filter(country=>country.name.toLowerCase().includes(countryName.toLowerCase())))
    }
   
    console.log(countries)
  }
  const handleCountryClick=(e)=>{
   
    setPersonalInfo({...personalInfo,"personCountryOB":e.target.innerText})

    setCountryName(e.target.innerText)

   let  country =countries.find(country=>country.name===e.target.innerText).isoCode
   
   setCities(State.getStatesOfCountry(country))
    
  }

  const handleCityClick=(e)=>{

    setCityName(e.target.innerText)
    console.log(cityName)
    setPersonalInfo({...personalInfo,'personCityOB':e.target.innerText})
   
  }

  const handleCityChange=(e)=>{
    
    setCityName(e.target.value)
    if(e.target.value!==''){
      setCities(cities.filter(city=>city.name.toLowerCase().includes(cityName.toLowerCase())))
    }
  }

  return (
    <Row>
    <Col xs={6} md={6} lg={6}>
    <Form.Group>
    <Form.Label>Birth Of Country</Form.Label>
      <Form.Control name="personCountryOB" 
         value={countryName}
         onChange={handleChange}
        onKeyDown={handleKeydown}
      />
    </Form.Group>
      {countriesOptionsOn&&
        <ListGroup 
          name="personCountryOB"
        className='country-container' 
       
        >
        {
          countries.map((country,idx)=>(
            <ListGroup.Item 
            key={idx}
            aria-autocomplete={false}
            onClick={handleCountryClick}
            className='country'>
              {country.name}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      }
      
    </Col>
    <Col xs={6} md={6} lg={6}>
    <Form.Group>
    <Form.Label> City Of Birth</Form.Label>
      <Form.Control name="personCityOB"
        disabled={!countryName}
         value={cityName}
         onChange={handleCityChange}
        onKeyDown={handleKeydown}
      />
    </Form.Group>
      {cities.length>0&&citiesOptionsOn&&
        <ListGroup 
        
        name="personCityOB"
        
        className='city-container' >
        {
          cities?.map((city,idx)=>(
            <ListGroup.Item 
            key={idx}
            
            onClick={handleCityClick}
            className='city'>
              {city.name}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      }
      
    </Col>
    </Row>
  );
}

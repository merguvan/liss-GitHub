import React,{useState,useEffect} from "react";
import { Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";


const url='https://countriesnow.space/api/v0.1/countries/states'


export default function Countries({countriesOptionsOn,citiesOptionsOn,setPersonalInfo,personalInfo}) {
  const [countries,setCountries]=useState([])
  const[cities,setCities]=useState([])
  const [countryName,setCountryName]=useState(personalInfo?.personCountryOB||'')
  const[cityName,setCityName]=useState(personalInfo?.personCityOB||'')

  const fetchData=()=> fetch(url)
  .then(res=>res.json())
  .then(res=>{
    setCountries(res.data)
  })

  useEffect(()=>{
  fetchData()
  }
  
  ,[])
  const handleChange=(e)=>{
      
    
    if(e.target.value<countryName){
      fetchData()
      setCountryName(e.target.value)
      setCountries( countries.filter(country=>(
        country.name.toLowerCase().includes(countryName.toLowerCase())
      )))
    }else{

      setCountryName(e.target.value)
      setCountries( countries.filter(country=>(
        country.name.toLowerCase().includes(countryName.toLowerCase())
      )))

    }
   
   
  }
  const handleCountryClick=(e)=>{
    fetchData()
    setPersonalInfo({...personalInfo,"personCountryOB":e.target.innerText})
    setCountryName(e.target.innerText)
  }
  const handleCityClick=(e)=>{
    setPersonalInfo({...personalInfo,personCityOB:e.target.innerText})
    setCityName(e.target.innerText)
  }
  const findCities=(e)=>{

    const city=countries.find(country=>country.name===countryName)
    setCities(city.states)
    // setCityName(e.target.innerText)
  
  }
  const handleCityChange=(e)=>{
    
    setCityName(e.target.value)
    findCities()
    const tempcity=cities.filter(city=>city.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setCities(tempcity)
  }

  return (
    <Row>
    <Col xs={6} md={6} lg={6}>
    <Form.Group>
    <Form.Label>Birth Of Country</Form.Label>
      <Form.Control name="personCountryOB" 
         value={countryName}
         onChange={handleChange}
    
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
    <Form.Label>Birth Of City</Form.Label>
      <Form.Control name="personCityOB"
        disabled={!countryName}
         value={cityName}
         onChange={handleCityChange}
         onClick={findCities}
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

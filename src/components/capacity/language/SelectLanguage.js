import React, {useState} from "react";
import data from "./Languages";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";



export default function SelectLAnguage(props) {
const {displayLanguageList} =props
  const [lang,setLang]=useState("")
  const [languages,setLanguages]=useState(data)

React.useEffect(()=>{
  setLanguages(data)
  if(lang!==''){
    setLanguages(
      languages.filter(language=>language.value.toLowerCase().includes(lang.toLowerCase()))
    )
  }

},[lang])

  const onSelect=(e)=>{
    setLang(e.target.value)
  
  }


const handleListItemClick=(e)=>{
  setLang(e.target.innerText)
}


  return (
    <div>
      <FormControl
        name='personCourseLanguage'
        value={lang}
        onChange={onSelect}
        placeholder="Language"
      
      >
      </FormControl>
      <ListGroup
      className={`country-container ${displayLanguageList?"hidden":null }`}
      >
        {
            languages.map(language=>(
              <ListGroupItem
              name='personCourseLanguage'
              key={language.code}
              onClick={handleListItemClick}
              >
                {language.value}
              </ListGroupItem>
            ))
        }
      </ListGroup>
    </div>
  );
}

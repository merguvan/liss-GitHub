import React, {useState} from "react";
import Languages from "./Languages";
import { FormControl } from "react-bootstrap";



export default function SelectLAnguage() {
  const [lang,setLang]=useState("")

  const onSelect=(e)=>{setLang(e.target.value)}

  return (
    <div>
      <FormControl
        as="select"
        value={lang}
        onChange={onSelect}
        placeholder="select"
      >
        {Languages.map((language) => (
          <option value={language.code}>{language.value}</option>
        ))}
      </FormControl>
    </div>
  );
}

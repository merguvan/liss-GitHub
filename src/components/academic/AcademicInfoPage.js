import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import AcademicProjects from './academicProjects'
import AcademicWork from './AcademicWorkDetails'

export default function AcademicInfo() {
    const {id}=useParams()
   
    const [modalShow,setModalShow]=useState(true) 

    switch(+id){

        case 1:
       
             return(
                 <AcademicWork show={modalShow} setModalShow={setModalShow} />
             )
        case 2:
            return (
                <AcademicProjects show={modalShow} setModalShow={setModalShow} />
            ) 
       
        default:
            <Redirect to='/'/>        
    }
   
}

import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import PersonInfo from './personalInfo'
import AddressInfo from './AddressInfo'

export default function PersonalInfo(props) {
    const {id}=useParams()
    const [modalShow,setModalShow]=useState(true) 
    console.log(props)
    switch(+id){

        case 1:
       
             return(
                 <PersonInfo show={modalShow} setModalShow={setModalShow} />
             )
        case 2:
            return (
                <AddressInfo show={modalShow} setModalShow={setModalShow} />
            ) 
       
        default:
            <Redirect to='/'/>        
    }
   
}

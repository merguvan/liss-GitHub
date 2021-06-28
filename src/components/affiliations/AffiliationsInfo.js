import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Affilications from './index'

export default function AffiliationsInfo(props) {
    const {id}=useParams()//props.match.params
    const [modalShow,setModalShow]=useState(true) 
   
    switch(+id){

        case 1:
       
             return(
               <Affilications show={modalShow} setModalShow={setModalShow} />
             )
      
       
        default:
            <Redirect to='/'/>        
    }
   
}

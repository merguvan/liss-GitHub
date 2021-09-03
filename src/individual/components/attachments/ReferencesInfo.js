import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Attachments from './index'

export default function AttachmentsInfo(props) {
    const {id}=useParams()//props.match.params
    const [modalShow,setModalShow]=useState(true) 
   
    switch(+id){

        case 1:
       
             return(
               <Attachments show={modalShow} setModalShow={setModalShow} />
             )
      
       
        default:
            <Redirect to='/'/>        
    }
   
}

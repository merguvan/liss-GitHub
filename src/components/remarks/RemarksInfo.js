import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Remarks from './index'

export default function RemarksInfo(props) {
    const {id}=useParams()//props.match.params
    const [modalShow,setModalShow]=useState(true) 
   
    switch(+id){

        case 1:
       
             return(
               <Remarks show={modalShow} setModalShow={setModalShow} />
             )
      
       
        default:
            <Redirect to='/'/>        
    }
   
}

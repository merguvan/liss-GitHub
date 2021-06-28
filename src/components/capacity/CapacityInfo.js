import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Capacity from './index'

export default function CapacityInfo(props) {
    const {id}=useParams()//props.match.params
    const [modalShow,setModalShow]=useState(true) 
   
    switch(+id){

        case 1:
       
             return(
               <Capacity show={modalShow} setModalShow={setModalShow} />
             )
      
       
        default:
            <Redirect to='/'/>        
    }
   
}

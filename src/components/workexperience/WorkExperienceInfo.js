import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Background  from './index'

export default function BackgroundInfo(props) {
    const {id}=useParams()//props.match.params
    const [modalShow,setModalShow]=useState(true) 
   
    switch(+id){

        case 1:
       
             return(
               <Background show={modalShow} setModalShow={setModalShow} />
             )
      
       
        default:
            <Redirect to='/'/>        
    }
   
}

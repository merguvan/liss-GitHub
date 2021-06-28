import React,{useState} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Achievements  from './index'

export default function AchievementsInfo(props) {
    const {id}=useParams()//props.match.params
    const [modalShow,setModalShow]=useState(true) 
   
    switch(+id){

        case 1:
       
             return(
               <Achievements show={modalShow} setModalShow={setModalShow} />
             )
      
       
        default:
            <Redirect to='/'/>        
    }
   
}

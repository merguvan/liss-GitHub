
import React from 'react'
import { Card,Collapse } from 'react-bootstrap'
import { MdEdit } from 'react-icons/md'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
 function Education(props) {
    return (
        <Card className='person-summary'>
            <Card.Header>
                <h5>Education
                <span>
          <Link to='education/1'>
          <MdEdit/>
          </Link>
           </span>
                </h5>
            </Card.Header>
            <Collapse
      in={true}
      >
            <div className="person-summary-container" >
             
            </div>
      </Collapse>

        </Card>
    )
}

const mapStateToProps=(state)=>{
    return{
      personalInfo:state.personalInfoReducer.personalInformation.personalDetailInformation,
      
      addressInfo:state.personalInfoReducer.personalInformation.addressInformation
    }
  }
  const mapDispatchToProps={
  
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Education)
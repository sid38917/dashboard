import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Fabric, Customize} from '../components'
import {Row, Col, Button} from 'antd'


const CustomPage = () => {
    const [active, setActive] = useState('fabric')
    const {params} = props;

    function activeComponent() {
        if(active === "fabric") {
            return <Fabric/>

        } else if(active === 'customize') {
            return <Customize />
        }
        
    }

    function handleActive(status) {
        if(status === 'next') {
            if(active === 'fabric') {
                setActive('customize')
    
            }
        } else if (status === 'back') {
            if(active === 'fabric') {
                setActive('customize')
    
            }
        }
      
        console.log(active, 'active component')
    }
    return(
        <>
        
        <Row justify = "center"  style={{minHeight: '70vh'}}>
            {
                activeComponent()
            }
            
        
        </Row>
       
        <Row justify = "center">
        <Button className = "button-primary" onClick={() => handleActive('back')}>
            Back
        
        </Button>
        <Button className = "button-primary" onClick={() => handleActive('next')}>
            Next

        </Button>
        </Row> 
        </>
    )
}

export default CustomPage
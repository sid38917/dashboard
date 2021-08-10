import React, {useState} from 'react'
import {Row, Col, Image, Card, Button, Divider} from 'antd'
import data from '../data/listFabric'
const Fabric = () => {
    const [selectedItem, setSelectedItem] = useState()
        

        const selectItem = (item) => {
            setSelectedItem(item);

        }

        function borderColor(image) {
            
            if(!selectedItem) return ""

                if(image.name === selectedItem.name) {
                    return "red"
                } else {
                    return "";
                }
            
        }

        return (
            <>
            <div style = {{flexDirection: 'column', width: '70%'}}>
            <Divider />
                <Row>
                    Select Fabric
                </Row>
                <Row justify = "center" gutter = {[16,16]} >
                {
                    data.map((item) => {
                        return(<Col>
                             <Card 
                    style={{flexDirection: 'column', margin: '5px', width: '200px', cursor: 'pointer', padding: 5, borderColor: borderColor(item)}}
                    onClick = {() => setSelectedItem(item)}
                    >
                        <Image src = {item.image} />
                        <h2>{item.name}</h2>
                        </Card>
                        
                            </Col>)
                        
                    })
                }
                </Row>
                </div>
            </>
        )
    
       
}

function selectedItem(image) {

}

export default Fabric
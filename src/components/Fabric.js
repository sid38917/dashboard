import React from 'react'
import {Row, Col, Image, Card, Button, Divider} from 'antd'
const Fabric = () => {

        const data = [
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            },
            {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            }
            ,      {
                image: "https://i.ibb.co/Mcrgn4G/unnamed-1.png",
                name: "fabric Name"
            }
        ]

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
                            <div>
                        <Image src = {item.image} />
                        <h2>{item.name}</h2>
                        </div>
                            </Col>)
                        
                    })
                }
                </Row>
                </div>
            </>
        )
    
       
}

export default Fabric
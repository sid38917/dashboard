import React, {useState, useEffect} from 'react';
import {Divider,  Row, Button, Image, Card} from 'antd'
import {CaretRightOutlined} from '@ant-design/icons';
import dataSuit from '../data/dataSuit';
import dataShirt from '../data/dataShirt'
import dataJacket from '../data/dataJacket'
import dataTrouser from '../data/dataTrouser'

const Customize = (props) => {
    const [data, setData] = useState([]);
     const [currentData, setCurrentData] = useState("");
     const [dataCustom, setDataCustom] = useState([]);
    const { params } = props;
    const header = [     
        "SUIT TYPE ", "LAPELS", "BUTTON", "VENT", "CUFF BUTTONS", "POCKET ACCENT", "JACKET LINING", 
        "JACKET LINING TYPE", "ELBOW PATCH" , "WAISTCOAT", "PANTS LINING", "POCKET STYLE", 
        "PLEATS", "FRONT POCKET", "BACK POCKETS", "BELT LOOPS", "TROUSER BOTTOM STYLE", "WAISTBAND FRONT",
        "JACKET INNER STYLE", "SLEEVE OPENING"
    ]


    useEffect(() => {
        
        console.log('params=>', params)
        if(params.product === 'suits' ) {
            setData(dataSuit)
            setCurrentData(dataSuit[0])
     } else if (params.product === 'shirts') {
            setData(dataShirt)
            
        } else if (params.product === 'jacket') {
            setData(dataJacket)
        } else if (params.product === 'trousers') {
            setData(dataTrouser)
        }
        

    }, [params])
   







function selectCustom(item) {
    let selectData = {
        name: currentData.name,
        option: item.name
    }
    const found = dataCustom.find((i) => i.name === currentData.name)
    if(dataCustom.length ==0 ) {
        setDataCustom([selectData])
    } else if (!found) {
        let oldData = dataCustom
        oldData.push(selectData)
        setDataCustom(oldData)
    } else {
        const newData = dataCustom.map(i => {
            if(i.name === currentData.name) {
                i = selectData
            }
            return i;
        })

        setDataCustom(newData);
    }
}

function selectedItem(image) {
    const found = dataCustom.find((item) => item.name === currentData.name)
    if(found) {
        if(image.name === found.option) {
            return "red"
        } else {
            return "";
        }
    }
}

return (
    <div style ={{flexDirection: 'column', width: '50%'}}>
        <Divider />
        
        <Row justify = "center">
            {
                data.map((item) => (
                    <Button style = {{margin: '5px', backgroundColor: 'transparent'}} onClick ={() => setCurrentData(item)}>
                        <CaretRightOutlined /> {item.name}
                        </Button>


                ))
            }
        </Row>
        <Row>
            {
                currentData && currentData.images.map((item) => (
                    <Card 
                    style={{flexDirection: 'column', margin: '5px', width: '200px', cursor: 'pointer', padding: 5, borderColor: selectedItem(item)}}
                    onClick = {() => selectCustom(item)}
                    >
                        <Image src = {item.url} preview={false}/>
                        <h3>{item.name}</h3>
                    </Card>
                ))
            }
        </Row>
    </div>
)
        }
export default Customize
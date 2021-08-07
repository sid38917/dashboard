import React, {useState, useEffect} from 'react';
import {Divider,  Row, Button, Image, Card} from 'antd'
import {CaretRightOutlined} from '@ant-design/icons';

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
        if(params.product === 'suit' ) {
            setData(dataSuit)
            setCurrentData(dataSuit[0])
        } else if (params.product === 'jacket') {
            setData(dataJackets)
        }
        

    }, [params])
   

const dataSuit = [
    {
        name: "SUIT TYPE",
        images: [
            {
                name: "SINGLE BREASTED 1 BUTTON",
                url: "https://i.ibb.co/pKG9pm3/unnamed-4.png"
            },
            {
                name: "SINGLE BREASTED 2 BUTTON",
                url: "https://i.ibb.co/pKG9pm3/unnamed-4.png"
            },
            {
                name: "DOUBLE BREASTED 4 BUTTON",
                url: "https://i.ibb.co/ZLGm8Hd/unnamed-6.png"
            },
            {
                name: "DOUBLE BREASTED 6 BUTTON",
                url: "https://i.ibb.co/rmNW3gY/unnamed-3.png"
            }, 
            {
                name: "MANDARIN",
                url: "https://i.ibb.co/XpSQhP5/unnamed-4.png"
            }
        ]
    },
    {
        name: "LAPELS",
        images: [
            {
                name: "NOTCH LAPEL",
                url: "https://i.ibb.co/ZcPL991/unnamed-5.png"
            },
            {
                name: "PEAK LAPEL",
                url: "https://i.ibb.co/TkPFvwh/unnamed-6.png"
            }
        ]

    },
    {
        name: "BUTTON",
        images: [
            {
                name: "DARK GREY",
                url:"https://i.ibb.co/TRHHT4d/unnamed-8.png"
            }, 
            {
                name: "OFF-WHITE",
                url: "https://i.ibb.co/tKP7tfx/unnamed-7.png"
            },
            {
                name: "NAVY BLUE",
                url: "https://i.ibb.co/jb37jS1/unnamed-9.png" 
            },
            {
                name: "BROWN",
                url: "https://i.ibb.co/mXmV2kk/unnamed-10.png"
            },
            {
                name: "KHAKI",
                url: "https://i.ibb.co/wYMBGWt/unnamed-11.png"
            }, 
            {
                name: "ANTHRAZIT",
                url: "https://i.ibb.co/WByKngC/unnamed-12.png"
            }
        ]
    },
    {
        name: "VENT",
        images: [
            {
                name: "NO VENT",
                url: "https://i.ibb.co/Lgbyfrj/withou-vent.jpg"
            },
            {
                name: "CENTER VENT",
                url: "https://i.ibb.co/sWQd0K4/center-vent.jpg"

            }, 
            {
                name: "SIDE VENT",
                url: "https://i.ibb.co/gSP7rts/side-vent.jpg"
            }, 
            {
                name: "PRINCESS VENT",
                url: "https://i.ibb.co/GvfshJs/princess-vent.jpg"
            }
        ]
    } ,
    {
        name: "CUFF BUTTONS",
        images: [
            {
                name: "NO CUFF BUTTONS",
                url: "https://i.ibb.co/QJFsJj7/unnamed-17.png"
            },
            {
                name: "SINGLE CUFF BUTTONS",
                url: "https://i.ibb.co/t4ZFsm5/unnamed-13.png"
            },
            {
                name: "DOUBLE CUFF BUTTONS",
                url: "https://i.ibb.co/wwVcrSH/unnamed-14.png"
            },
            {
                name: "THREE CUFF BUTTONS",
                url: "https://i.ibb.co/8NXpHv1/unnamed-15.png"
            },
            {
                name: "FOUR CUFF BUTTONS",
                url: "https://i.ibb.co/KhcgnX4/unnamed-16.png"
            }
        ]
    },
    {
        name: "BREAST POCKET "  ,
        images: [
            {
                name: "NO BREAST POCKET",
                url: "https://i.ibb.co/QJFsJj7/unnamed-17.png"
            },
            {
                name: "PATCH POCKET",
                url: "https://i.ibb.co/syxk4gf/unnamed-18.png"
            },
            {
                name: "TICKET POCKET",
                url: "https://i.ibb.co/5c87M8k/unnamed-19.png"
            }
           

        ]
        
    },
    {
        name: "JACKET LINING",
        images: [
            {
                name: "TURKISH BLUE",
                url: "https://i.ibb.co/dkXXWZz/unnamed-20.png"
            },
            {
                name: "ELECTRIC BLUE",
                url: "https://i.ibb.co/q5XJyKs/unnamed-22.png"
            },
            {
                name: "RED",
                url: "https://i.ibb.co/0fZRszk/unnamed-21.png"
            },
            {
                name: "PURPLE",
                url: "https://i.ibb.co/vx0GGmY/unnamed-23.png"
            },
            {
                name: "GREEN",
                url: "https://i.ibb.co/N2mSH66/unnamed-24.png"
            },
            {
                name: "STEEL GRAY",
                url: "https://i.ibb.co/G0nyMcB/unnamed-25.png"
            }
        ]
    }, 
    {
        name: "JACKET LINING TYPE",
        images: [
            {
                name: "NO LINING",
                url: ""
            },
            {
                name: "QUARTER LINING",
                url: "https://i.ibb.co/vQMP96P/unnamed-31.png"
            },
            {
                name: "HALF LINING",
                url: "https://i.ibb.co/nsXHKPB/unnamed-32.png"
            },
            {
                name: "FULL LINING",
                url: "https://i.ibb.co/9vkv8hS/unnamed-33.png"
            }
        ]
    },
    {
        name: "ELBOW PATCH",
        images: [
            {
                name: "CROCODILE BLACK LEATHER",
                url: "https://i.ibb.co/fNs7G7d/unnamed-40.png"
            },
            {
                name: "BROWN LEATHER",
                url: "https://i.ibb.co/GCdbt4f/unnamed-41.png"
            },
            {
                name: "SNAKE EMBOSS BLACK",
                url: "https://i.ibb.co/ySd0yJL/unnamed-42.png"
            }

        ]
    },
    {
        name: "WAIST COAT",
        images: [
            {
                name: "NONE",
                url: "https://i.ibb.co/N6nrD3N/unnamed-43.png"
            },
            {
                name: "CLASSIC VEST",
                url: "https://i.ibb.co/85cY547/unnamed-44.png"
            },
            {
                name: "CLASSIC LAPEL VEST",
                url: "https://i.ibb.co/QK2TTSj/unnamed-45.png"
            },
            {
                name: "DOUBLE BREASTED VEST",
                url: "https://i.ibb.co/3Tc574N/unnamed-46.png"
            },
            {
                name: "SHAWL LAPEL VEST",
                url: "https://i.ibb.co/J5GZcLQ/unnamed-47.png"
            },
            {
                name: "DOUBLE BREASTED LAPEL",
                url: "https://i.ibb.co/1KS2dBF/unnamed-48.png"
            },
            {
               name: "SHAWL LAPEL DOUBLE VEST",
               url: "https://i.ibb.co/pLJ5YGL/unnamed-49.png"
            }
        ]
    }, 
    {
        name: "PANTS LINING",
        images: [
            {
                name: "NO LINING",
                url: "https://i.ibb.co/vZnTtcy/unnamed-50.png"
            },
            {
                name: "FRONT LINING",
                url: "https://i.ibb.co/9tHpRn9/unnamed-51.png"
            },
            {
                name: "FRONT AND BACK LINING",
                url: "https://i.ibb.co/JHCwqHf/unnamed-52.png"
            },
            {
                name: "FULL LINING",
                url: "https://i.ibb.co/1qnJG7p/unnamed-53.png"
            }
            

        ]
    }, 
    {
        name: "FRONT POCKET",
        images: [
            {
                name: "STRAIGHT",
                url: "https://i.ibb.co/N6NZFss/unnamed-54.png"
            },
            {
                name: "SLANTED SIDE",
                url: "https://i.ibb.co/V35w8c2/unnamed-55.png"
            },
            {
                name: "FRONT EDGE",
                url: "https://i.ibb.co/7Nc8WfF/unnamed-56.png"
            },
            {
                name: "FRONT ROUNDED",
                url: "https://i.ibb.co/0D9Pmf8/unnamed-57.png"
            },
            {
                name: "SINGLE VELT GERMAN",
                url: "https://i.ibb.co/WggQmrM/unnamed-58.png"
            },
            {
                name: "DOUBLE VELT GERMAN",
                url: "https://i.ibb.co/q1tCw77/unnamed-59.png"
            }
        ]
    },
    {
        name: "BACK POCKET",
        images: [
            {
                name: "NO POCKET",
                url: "https://i.ibb.co/0rTLXh9/unnamed-60.png"
            },
            {
                name: "DOUBLE PATCH",
                url: "https://i.ibb.co/sKX211h/unnamed-61.png"
            },
            {
                name: "DOUBLE WELTED WITH BUTTON",
                url: "https://i.ibb.co/LN9gFgR/unnamed-62.png"
            },
            {
                name: "DOUBLE WELTED WITH POCKET",
                url: "https://i.ibb.co/xG3KYmP/unnamed-63.png"
            },
            {
                name: "FLAP POCKET",
                url: "https://i.ibb.co/TcLGw2R/unnamed-64.png"
            }, {
                name: "DOUBLE FLAP POCKET",
                url: "https://i.ibb.co/3F8DcyD/unnamed-65.png"
            },
            {
                name: "PATCH POCKET",
                url: "https://i.ibb.co/txdJSDZ/unnamed-69.png"
            }
        ]
    },
    {
        name: "BELT LOOPS",
        images: [
            {
                name: "NO BELT LOOPS",
                url: "https://i.ibb.co/D4kcDr9/unnamed-70.png"
            },
            {
                name: "WITH BELT LOOP",
                url: "https://i.ibb.co/fM9WDvW/unnamed-71.png"
            }
        ]
    },
    {
        name: "PLEATS",
        images: [
            {
                name: "NO PLEATS",
                url: "https://i.ibb.co/C881Svt/unnamed-72.png"
            },
            {
                name: "SINGLE PLEAT",
                url: "https://i.ibb.co/cXBdG6X/unnamed-73.png"
            },
            {
                name: "DOUBLE PLEAT",
                url: "https://i.ibb.co/WxRVSs1/unnamed-74.png"
            }
        ]
    },
    {
        name: "TROUSER BOTTOM STYLE",
        images: [
            {
                name: "STRAIGHT",
                url: "https://i.ibb.co/WyCVQsf/unnamed-75.png"
            },
            {
                name: "CUFFS",
                url: "https://i.ibb.co/wJZGcGZ/unnamed-76.png"
            }
        ]
    },
    {
        name: "WAISTBAND FRONT",
        images: [
        {
            name: "HOOK",
            url: "https://i.ibb.co/MCNs1f4/unnamed-77.png"
        },
        {
            name: "BUTTON",
            url: "https://i.ibb.co/yRwFrsQ/unnamed-78.png"
        },
        {
            name: "EXTENDED BELT AND HOOK",
            url: "https://i.ibb.co/ZhZXHnW/unnamed-79.png"
        }
        ]
    },
  

    {
        name: "JACKET INNER STYLE",
        images: [
            {
                name: "JACKET INNER STYLE 1",
                url: "https://i.ibb.co/tDCwc3q/unnamed-80.png"
            },
            {
                name: "JACKET INNER STYLE 2",
                url: "https://i.ibb.co/Kqz3v0Q/unnamed-81.png",
            }
            ,
            {
                name: "JACKET INNER STYLE 3",
                url: "https://i.ibb.co/W6WzS83/unnamed-82.png",
            }
        ]
    },
    {
        name: "SLEEVE OPENING",
        images: [
            {
                name: "IMITATION",
                url: "https://i.ibb.co/vdmwQMM/unnamed-83.png"
            },
            {
                name: "OPEN (OR) SURGICAL CUFF",
                url: "https://i.ibb.co/JxgGDHT/unnamed-84.png"
            }

        ]
    }
]

const dataShirt = [
    {
        name: "BUTTON",
        images: [
            {
                name: "PURPLE",
                url: "https://i.ibb.co/2qrJ4fd/unnamed-85.png"
            },
            {
                name: "GREEN",
                url: "https://i.ibb.co/L1ZsPKN/unnamed-86.png"
            },
            {
                name: "BLACK",
                url: "https://i.ibb.co/h8yKS6n/unnamed-87.png"
            },
            {
                name: "BLUE",
                url: "https://i.ibb.co/Mk0s07M/unnamed-88.png"
            },
            {
                name: "GREY",
                url: "https://i.ibb.co/dJbjy4Q/unnamed-89.png"
            },
            {
                name: "KHAKI",
                url: "https://i.ibb.co/dMs6Mbs/unnamed-90.png"
            },
            {
                name: "PALE BLUE",
                url: "https://i.ibb.co/CBKsgYR/unnamed-91.png"
            },
            {
                name: "WHITE",
                url: "https://i.ibb.co/BfVBffj/unnamed-92.png"
            }
        ]
    },
    {
        name: "COLLAR STYLE",
        images: [
            {
                name: "BUTTON DOWN",
                url: "https://i.ibb.co/phC551d/unnamed-93.png"
            },
            {
                name: "MANDARIN",
                url: "https://i.ibb.co/vxrC1qH/unnamed-94.png"
            },
            {
                name: "KENT COLLAR",
                url: "https://i.ibb.co/hfPnv1Y/unnamed-95.png"
            },
            {
                name: "NEW KENT COLLAR",
                url: "https://i.ibb.co/SJv3b5F/unnamed-96.png"
            },
            {
                name: "ROUNDED COLLAR",
                url: "https://i.ibb.co/nk8xYqj/unnamed-97.png"
            },
            {
                name: "WING COLLAR",
                url: "https://i.ibb.co/2F1Fdyt/unnamed-98.png"
            }
        ]
    },
    {
        name: "CUFFS",
        images: [
            {
                name: "ONE BUTTON",
                url: "https://i.ibb.co/q1Mmkc2/unnamed-99.png"
            },
            {
                name: "TWO BUTTON",
                url: "https://i.ibb.co/WxwDpV0/unnamed-100.png"
            },
            {
                name: "CLASSIC",
                url: "https://i.ibb.co/vYQ9P5r/unnamed-2021-08-06-T222659-161.png"
            },
            {
                name: "DOUBLE CUFFS",
                url: "https://i.ibb.co/wJyR4rb/unnamed-2021-08-06-T222720-903.png"
            },
            {
                name: "DOUBLE CUFFS SLANTED",
                url: "https://i.ibb.co/0Ysq0Q7/unnamed-2021-08-06-T222724-216.png"
            }
        ]
    },
    {
        name: "SLEEVES",
        images: [
            {
                name: "LONG SLEEVE",
                url: "https://i.ibb.co/PMnVFg5/unnamed50.png"
            },
            {
                name: "SHORT SLEEVE",
                url: "https://i.ibb.co/0GBbhr5/unnamed51.png"
            },
            
        ]
    },
    {
        name: "PLACKET",
        images: [
            {
                name: "PLAIN",
                url: "https://i.ibb.co/Fs3Lr28/unnamed69.png"
            },
            {

                name: "EDGE PLACKET",
                url: "https://i.ibb.co/0fFZVkJ/unnamed70.png"
            },
            {
                name: "GOLFI",
                url: "https://i.ibb.co/XWv8nbZ/unnamed71.png"
            },
            {
                name: "REGULAR PLACKET",
                url: "https://i.ibb.co/R6xH35h/unnamed-2021-08-06-T223137-173.png"
            },
            {
                name: "STITCH PLAIN",
                url: "https://i.ibb.co/4sxF0tj/11.png"
            }
        ]
    },
    {
        name: "MODEL KANTONG KEMEJA",
        images: [
            {
                name: "x"
            }
        ]
    }
    
]

const dataJackets = [
    {

    }
]

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
                data.map((item) => {
                    <Button style = {{margin: '5px', backgroundColor: 'transparent'}} onClick ={() => setCurrentData(item)}>
                        <CaretRightOutlined /> {item.name}
                        </Button>


                })
            }
        </Row>
        <Row>
            {
                currentData && currentData.images.map((item) => {
                    <Card 
                    style={{flexDirection: 'column', margin: '5px', width: '200px', cursor: 'pointer', padding: 5, borderColor: selectedItem(item)}}
                    onClick = {() => selectCustom(item)}
                    >
                        <Image src = {item.url} preview={false}/>
                        <h3>{item.name}</h3>
                    </Card>
                })
            }
        </Row>
    </div>
)
        }
export default Customize
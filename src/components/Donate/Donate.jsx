import React,{useState,useEffect,useRef} from 'react'
import ReactDOM from "react-dom"
import useStyles from './styles'
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';
import {Container,Form,Col,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PayPalButton = window.paypal.Buttons.driver("react",{React,ReactDOM});

const Donate = () => {
    const dispatchGlobal = useDispatch();
    useEffect(()=>{
        dispatchGlobal(assign("Donate"));
    },[dispatchGlobal])
    const classes = useStyles();
    const [val,setVal] = useState(1);
    const ref = useRef();
    const createOrder = (data, actions) =>{
        return actions.order.create({
            purchase_units: [
                {amount: {value: val,},},
            ],
            });
        };
    
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        
        <Col xs="12" sm={{span:10,offset:1}} 
            md={{span:6,offset:3}} 
            >
            <Card >
            <Container fluid style={{paddingTop:'2vh'}}>
            <Col xs={{offset:1}}>
            <Card.Body style={{width:'80%'}}>
                <Card.Title >Donations</Card.Title>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pounds</Form.Label>
                    <Form.Control type="email" placeholder="Enter Value" 
                        required value={val}
                        onChange={(e)=>{
                            e.preventDefault();
                            setVal(e.target.value);
                        }}/>
                </Form.Group>
                </Form>   
            </Card.Body>
            <div 
                ref={ref} 
                style={{textAlign:'center',width:'80%',paddingBottom:'2vh'}}
                >
            <PayPalButton 
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
            </Col>
            </Container>
            </Card>
        </Col>
    
        
       
        </div>
    )
}

export default Donate

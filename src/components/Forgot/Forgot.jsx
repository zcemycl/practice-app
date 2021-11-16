import React,{useState,useEffect} from 'react'
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';
import {Container,Row,Button,Form,Col,Card,Spinner,Alert} from 'react-bootstrap';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

const Forgot = () => {
    const dispatchGlobal = useDispatch();
    useEffect(()=>{
        dispatchGlobal(assign("Forgot"));
    },[dispatchGlobal])

    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [msg,setMsg] = useState('');
    const [warning,setWarning] = useState('');
    const {forgotPassword} = useAuth();

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Form>
            <Col xs="12" sm={{span:10,offset:1}} 
                md={{span:8,offset:2}} lg={{span:6,offset:3}}>
                <Card >
                    <div style={{textAlign:'center'}}>
                    <Card.Img variant="top" className="pt-3" style={{width:'70%'}}
                        src="https://raw.githubusercontent.com/zcemycl/practice-app/master/resources/demo.gif" />
                    </div>
                
                <Card.Body>
                    <Card.Title>Check your mailbox...</Card.Title>
                    <Card.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                            onChange={(e)=>{
                                e.preventDefault();
                                setEmail(e.target.value);
                            }}/>
                        <Link to="/login" className={classes.title} style={{textDecoration:'none'}}>
                            <Form.Text className="text-muted">
                            Already have an account?
                            </Form.Text>
                        </Link>
                    </Form.Group>
                    <Container>
                        <Row>
                        <Col xs="6">
                        <Button variant="primary" type="submit" className="mt-1" 
                            onClick={async (e)=>{
                                e.preventDefault();
                                if (email.length === 0){
                                    setMsg('');setWarning('Email is Empty.');
                                }
                                if (email.length>0){
                                    console.log(email)
                                    setIsSubmitting(true);
                                    forgotPassword(email).then((resp)=>{
                                        console.log(resp);
                                        setWarning('');
                                        setMsg('Success !!!');
                                    })
                                    .catch((error)=>{
                                        console.log(error.message);
                                        setMsg('');
                                        setWarning(error.message);
                                    })
                                    .finally(()=>setIsSubmitting(false))
                                }
                            }}
                            >Let's Go ! {isSubmitting&&<Spinner as="span"
                                animation="border" size="sm" role="status"
                                aria-hidden="true"/>}</Button>
                        </Col>
                        
                        <Col xs="12" sm="6">
                        {msg.length>0 && <Alert variant="success">{msg}</Alert>}
                        {warning.length>0 && <Alert variant="danger">{warning.replace('Firebase: ','')}</Alert>}
                        </Col>
                    
                        </Row>
                    </Container>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                
            </Col>
        
        </Form>   
        </div>
    )
}

export default Forgot

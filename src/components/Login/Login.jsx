import React,{useState,useEffect} from 'react'
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';
import {Container,Row,Button,Form,Col,Card,Spinner,Alert} from 'react-bootstrap';
import useStyles from './styles';
import {Link,useLocation,useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

const Login = () => {
    const dispatchGlobal = useDispatch();
    const history = useHistory();
    const location = useLocation();
    useEffect(()=>{
        dispatchGlobal(assign("Login"));
    },[dispatchGlobal])

    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [msg,setMsg] = useState('');
    const [warning,setWarning] = useState('');
    const {login} = useAuth();

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
                    <Card.Title>To see more, please login...</Card.Title>
                    <Card.Text>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                            onChange={(e)=>{
                                e.preventDefault();
                                setEmail(e.target.value);
                            }}/>
                        <Link to="/signup" className={classes.title} style={{textDecoration:'none'}}>
                        <Form.Text className="text-muted">
                        No Account? Sign up now...
                        </Form.Text>
                    </Link>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required
                            onChange={(e)=>{
                                e.preventDefault();
                                setPassword(e.target.value);
                            }}/>
                        <Link to="/forgot" className={classes.title} style={{textDecoration:'none'}}>
                            <Form.Text className="text-muted">
                            Forget Your Password?
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
                                if (password.length===0 ){
                                    setMsg('');setWarning('Password is Empty.');
                                }
                                if (password.length>0 && email.length>0){
                                    // console.log(email,password)
                                    setIsSubmitting(true);
                                    login(email,password).then((resp)=>{
                                        // console.log(resp);
                                        setWarning('');
                                        setMsg('Success !!!');
                                        history.push(location.state?.from??'/visitrecords');
                                    })
                                    .catch((error)=>{
                                        // console.log(error.message);
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

export default Login
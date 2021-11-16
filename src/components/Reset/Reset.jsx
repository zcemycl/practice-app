import React,{useState,useEffect}from 'react'
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';
import {Container,Row,Button,Form,Col,Card,Spinner,Alert} from 'react-bootstrap';
import useStyles from './styles';
import {useHistory,useLocation} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

function UserQuery() {
    return new URLSearchParams(useLocation().search)
}

const Reset = () => {
    const dispatchGlobal = useDispatch();
    const query = UserQuery();// query.get('oobCode')
    useEffect(()=>{
        dispatchGlobal(assign("Sign Up"));
    },[dispatchGlobal])
    const history = useHistory();
    const classes = useStyles();
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [msg,setMsg] = useState('');
    const [warning,setWarning] = useState('');
    const {resetPassword} = useAuth();

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
                    <Card.Title>Reset Your Password ...</Card.Title>
                    <Card.Text>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required
                            onChange={(e)=>{
                                e.preventDefault();
                                setPassword(e.target.value);
                            }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="ConfirmPassword" required
                            onChange={(e)=>{
                                e.preventDefault();
                                setConfirmPassword(e.target.value);
                            }}/>
                    </Form.Group>
                    
                    <Container>
                        <Row>
                        <Col xs="2">
                        <Button variant="primary" type="submit" className="mt-1" 
                            onClick={async (e)=>{
                                e.preventDefault();
                                if (password!==confirmPassword){
                                    setMsg('');setWarning('Confirm Password does not match.');
                                }
                                if (password.length===0 || confirmPassword.length===0){
                                    setMsg('');setWarning('Password is Empty.');
                                }
                                if (query.get('oobCode')?.length===0){
                                    setMsg('');setWarning('Invalid URL.');
                                }
                                if (password.length>0 && confirmPassword.length>0 
                                        && password===confirmPassword){
                                    console.log(password)
                                    setIsSubmitting(true);
                                    resetPassword(query.get('oobCode'),password).then((resp)=>{
                                        console.log(resp);
                                        setWarning('');
                                        setMsg('Success !!!');
                                        history.push('/login');
                                    })
                                    .catch((error)=>{
                                        console.log(error.message);
                                        setMsg('');
                                        setWarning(error.message);
                                    })
                                    .finally(()=>setIsSubmitting(false))
                                }
                            }}
                            >Submit  {isSubmitting&&<Spinner as="span"
                                animation="border" size="sm" role="status"
                                aria-hidden="true"/>}</Button>
                        </Col>
                        
                        <Col xs="12" sm="10">
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

export default Reset
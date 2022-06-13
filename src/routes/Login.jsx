import { useRef } from 'react';
import { Container,Card,Form,Button } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { useBrowser } from '../context/BrowserContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const {
        DEFAULT_USERNAME,
        DEFAULT_PASSWORD,
        setLoggedIn,
        appRoutes
    } = useBrowser();

    const userRef = useRef();
    const passRef = useRef();

    function handleLogin(){
        if(userRef.current.value === DEFAULT_USERNAME && passRef.current.value === DEFAULT_PASSWORD){
            setLoggedIn(true);
            navigate(appRoutes.myNotes)
        }
        else 
            setLoggedIn(false);
    }

    return (
    <Container>
        <Card>
            <Card.Header>
                <h1 className='me-auto text-center text-primary'>Notes Challenge</h1>
            </Card.Header>
            <Card.Body>
                <Form.Group controlId='user' className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control ref={userRef} type='text' required />
                </Form.Group>
                <Form.Group controlId='pass' className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type='password' required />
                </Form.Group>
                <div className='d-flex justify-content-center pt-3'>
                <Button variant='primary' onClick={handleLogin}
                    className='d-flex align-items-center gap-1'>
                    <FaSignInAlt/>
                    <b>Sign In</b>
                </Button>
                </div>
            </Card.Body>
        </Card>
    </Container>
    );
} 

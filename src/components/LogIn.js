import React , {useRef, useState} from 'react'
import { Button, Form, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {logIn} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
          setError("")  
          setLoading(true)
          await  logIn(emailRef.current.value, passwordRef.current.value)
          history.push("/")    
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className =" text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger" >{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type ="email" ref ={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type ="Password" ref ={passwordRef} required />
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                    <div className = "w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password ?</Link> 
                     </div> 
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                Need an Account?  <Link to="/signup">Sign Up</Link> 
            </div>  
        </>
    )
}

export default LogIn

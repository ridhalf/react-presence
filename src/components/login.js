import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';


const Login = ({title, description})=>{
    useEffect(()=>{
        if(localStorage.getItem('id') && localStorage.getItem('nama')){
            window.location.replace('/dashboard')
        }
    })

    const [getEmail, setEmail] = useState("")
    const [getPassword, setPassword] = useState("")
    const handleEmail = (inputEmail) =>{
        setEmail(inputEmail)
    }
    const handlePassword = (inputPassword) =>{
        setPassword(inputPassword)
    }
    const userLogin = ()=>{
        console.log('login sukses');
        const reqData = {
            email:getEmail,
            password:getPassword
        }
        
            axios({
            method:"POST",
            url:'http://localhost:3000/users/login',
            data:reqData
        }).then((result)=>{
            localStorage.setItem('id', result.data.user.id)
            localStorage.setItem('nama', result.data.user.nama)
            window.location.replace('/dashboard')
        })
        

    }

    return( 
        <Container>
            <div className='d-flex justify-content-center fw-bold h3 my-4'>
            <ReactTypingEffect 
                text={[title,description]}
                speed={100}
                eraseDelay={800}
                eraseSpeed={100}
                typingDelay={100}
            />
            </div>
            <Form className='w-50 mx-auto'>
                <Form.Group className='mb-2'>
                    <Form.Label className='fw-bold'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Masukkan email anda' required onChange={(event)=>{handleEmail(event.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Masukkan password anda' required onChange={(event)=>{handlePassword(event.target.value)}}></Form.Control>
                </Form.Group>
                <Button  className='mt-4 w-100' onClick={()=>userLogin()}>Login Sekarang</Button>
            </Form>
        </Container>
    ) 
}

export default Login
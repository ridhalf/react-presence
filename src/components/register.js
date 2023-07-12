import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import ReactTypingEffect from "react-typing-effect"

const Register = ({title,description})=>{
    useEffect(()=>{
            if(localStorage.getItem('id') && localStorage.getItem('nama')){
                window.location.replace('/dashboard')
            }
    })
    //tampung data inputan
    const [getNama, setNama] = useState('')
    const [getPassword, setPassword] = useState('')
    const [getEmail, setEmail] = useState('')
    const [getNohp, setNohp] = useState('')
    const [getAlamat, setAlamat] = useState('')

    const handleNama = (inputNama) =>{
        setNama(inputNama)
    }
    const handleEmail = (inputEmail) =>{
        setEmail(inputEmail)
    }
    const handlePassword = (inputPassword) =>{
        setPassword(inputPassword)
    }
    const handleAlamat = (inputAlamat) =>{
        setAlamat(inputAlamat)
    }
    const handleNohp = (inputNohp) =>{
        setNohp(inputNohp)
    }
    const userRegister = ()=>{
        const reqData = {
            nama:getNama,
            email:getEmail,
            password:getPassword,
            alamat:getAlamat,
            no_hp:getNohp
        }
        axios({
            method:'POST',
            url:'http://localhost:3000/users',
            data:reqData
        }).then((result)=>{
            if(result.data.user){
                alert('pendaftaran berhasil')
                console.log(result.data.user);
                window.location.replace('/login')
            }else{
                alert('gagal mendaftarkan akun')
            }
        }).catch((e)=>{
            alert(e.response.data.msg)
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
                    <Form.Label className='fw-bold'>Nama</Form.Label>
                    <Form.Control type='text' placeholder='Masukkan nama anda' required onChange={(event)=>{handleNama(event.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label className='fw-bold'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Masukkan email anda' required onChange={(event)=>{handleEmail(event.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Masukkan password anda' required onChange={(event)=>{handlePassword(event.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label className='fw-bold'>Alamat</Form.Label>
                    <Form.Control type='text' placeholder='Masukkan alamat anda' required onChange={(event)=>{handleAlamat(event.target.value)}}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label className='fw-bold'>No Hp</Form.Label>
                    <Form.Control type='number' placeholder='Masukkan no hp anda' required onChange={(event)=>{handleNohp(event.target.value)}}></Form.Control>
                </Form.Group>
                <Button  className='mt-4 w-100' onClick={()=>userRegister()}>Register Sekarang</Button>
            </Form>
        </Container>
    )
}
export default Register
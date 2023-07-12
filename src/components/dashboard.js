import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Dashboard = ({title})=>{
    const [getAbsenList, setAbsen] = useState([])

    useEffect(()=>{
        if(!localStorage.getItem("id") && !localStorage.getItem("nama")){
            console.log("User Belom login");
            window.location.replace('/login')
        }
        axios({
        method:'GET',
        url:'http://localhost:3000/presences',
    }).then((result)=>setAbsen(result.data.absen)) 
    },[])

    const logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }

    const tampilkanAbsen = getAbsenList.map ((absen,i) => {
        const{user_id, status, createdAt} = absen
        const fullDate =  new Date(createdAt)
        const formatDate = `${fullDate.getFullYear()}-${fullDate.getMonth()}-${fullDate.getDate()}`
        return(
            <tr key={i}>
            <td>{i+1}</td>
            <td>{user_id}</td>
            <td>{status}</td>
            <td>{formatDate}</td>
            </tr>
        )
    })
    return (
        <Container>
            <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{localStorage.getItem('nama')}</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>{logout()}}>Logout</button>
                </div>
                </div>
            </div>
            <h2>{title}</h2>
            <div>
                <p>Hello {localStorage.getItem("nama")}</p>
                <p>Id anda {localStorage.getItem("id")}</p>
            </div>
            <div className="table-responsive small">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    {tampilkanAbsen}
                </tbody>
                </table>
            </div>
            </main>
        </Container>
    )
}
export default Dashboard
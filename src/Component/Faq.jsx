import React from "react"
import { Link } from 'react-router-dom'

export default function Faq(){
    return (
        <>
<div className=" bg-danger mt-5 ms-2  d-flex justify-content-between">
    <h1 className='text-center text-uppercase  fs-2'>got a question ? We would be happy to help you</h1>
    <Link className='btn btn-outline-danger border-3 border-dark rounded btn-group text-dark fs-4'to="/faq">Contact Us</Link>
    </div>
        </>
    )
}


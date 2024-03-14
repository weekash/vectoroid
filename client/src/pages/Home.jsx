import React, {useState } from 'react'
import {  sendUrlForVectorization } from '../services/vector';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';

export default function Home() {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    async function submitForm(e){
        setLoading(true)
        e.preventDefault();
        const {data, success, error} = await sendUrlForVectorization(url)
        if(success){
            toast.success("Vectorization Successful")
            setUrl("")
        }else{
            toast.error(error?.error || "Some Error Occured")
        }
        setLoading(false)
        
    }

    function setInput(e){
        setUrl(e.target.value)
    }

    return (
        <div className="container">
            <h1>VECTORIZE a website within SECONDS.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quia quaerat esse debitis minus officia id animi ut reprehenderit pariatur ad qui at odit illo laboriosam impedit porro optio, quas quod, voluptas consequatur ex ipsa. Libero totam quis ipsum suscipit rem animi, nam expedita ullam laudantium assumenda rerum nobis amet!</p>
            {!loading ? <form onSubmit={submitForm}>
                <input placeholder='Enter website URL you want to vectorize' value={url} onChange={setInput} className='input' type='text'/>
                <button className='btn' type='submit'>Vectorize</button>
            </form>:
            <Loading/>}
        
        </div>
    )
}

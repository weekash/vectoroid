import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import { searchForContent } from '../services/vector'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'

export default function Search() {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [records, setRecords] = useState([])
    async function submitForm(e) {
        window.scrollTo({top:1000, behavior:"smooth"})
        setLoading(true)
        e.preventDefault();
        const { data, success, error } = await searchForContent(search)
        if (success) {
            setRecords(data)
        } else {
            toast.error(error?.error || "Some Error Occured")
        }
        setLoading(false)

    }

    function setInput(e) {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="container">
                <h1>SEARCH for resources within just a CLICK.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quia quaerat esse debitis minus officia id animi ut reprehenderit pariatur ad qui at odit illo laboriosam impedit porro optio, quas quod, voluptas consequatur ex ipsa. Libero totam quis ipsum suscipit rem animi, nam expedita ullam laudantium assumenda rerum nobis amet!</p>
                <form onSubmit={submitForm}>
                    <input placeholder='Enter text to search' value={search} onChange={setInput} className='input' type='text' />
                    <button className='btn' type='submit'>Search</button>
                </form>

            </div>
            <div className='list-container'>
                {loading ? <Loading /> :
                records.map((item) => <ListItem index={item._id} item={item} />)}
            </div>
        </>
    )
}

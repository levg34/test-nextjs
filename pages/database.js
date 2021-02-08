import Link from "next/link";
import { useState } from "react";
import axios from 'axios'

export default function Database() {
    const [luc, setLuc] = useState('')
    const [lucbd, setLucBD] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        let post = axios.post('/api/save',{luc,date:(new Date()).toISOString()})
        post.then(value => {
            setLucBD(value.data)
        })
        setLuc('')
    }

    return (<>
        <h1>TEST</h1>
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" name="luc" onChange={e => setLuc(e.target.value)} value={luc}></input>
            <button type="submit">Valider</button>
        </form>
        {lucbd && <Link href={'/luc/'+lucbd._id}><pre>{JSON.stringify(lucbd, null, 2)}</pre></Link>}
        <Link href="/">Retour maison</Link>
    </>)
}
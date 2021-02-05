import Link from "next/link";
import { useState } from "react";
import axios from 'axios'

export default function Database() {
    const [luc, setLuc] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/save',{luc,date:(new Date()).toISOString()})
        setLuc('')
        window.location = '/lucs'
    }

    return (<>
        <h1>TEST</h1>
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" name="luc" onChange={e => setLuc(e.target.value)} value={luc}></input>
            <button type="submit">Valider</button>
        </form>
        <Link href="/">Retour maison</Link>
    </>)
}
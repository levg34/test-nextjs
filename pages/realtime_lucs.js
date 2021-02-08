import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export default function RealtimeLucs() {
    const { data, error } = useSWR('/api/lucs', fetcher)
    let lucsElts = null
    if (error) {
        lucsElts = <h2 style={{color: 'red'}}>Erreur de chargement</h2>
    } else if (!data) {
        lucsElts = <h2 style={{color: 'orange'}}>Chargement...</h2>
    } else {
        const lucs = data.map(luc => <li key={luc._id}>{luc.luc}</li>)
        lucsElts = <ol>
            {lucs}
        </ol>
    }
    return <>
        <h1>Realtime Lucs</h1>
        {lucsElts}
    </>
}
export default function Concerts({concerts}) {
    let concertList = Object.values(concerts).map(concert=><p key={concert.id}>{concert.name}</p>)
    return (<>
        <h1>Test</h1>
        {concertList}
    </>)
}
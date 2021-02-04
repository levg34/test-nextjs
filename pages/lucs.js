import Link from 'next/link'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import Datastore from 'nedb'
import path from 'path'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

export async function getServerSideProps(context) {
    const db = new Datastore({
        filename: path.join(__dirname,'/data/data'),
         autoload: true
    })
    
    let docs = await new Promise((resolve,reject) => {
        db.find({luc: {$exists:true}}, (err,docs) => {
            if (err) reject(err)
            resolve(docs)
        })
    })

    return {
        props: {
            docs
        }
    }
}

function prettyPrint(date) {
    return dayjs(date).format('LLLL')
}

export default function Lucs({docs}) {
    let lucs = docs.map(doc => <li key={doc._id}>{doc.luc} {doc.date ? `(${prettyPrint(doc.date)})` : null}</li>)
    return (<>
        <h1>Lucs</h1>
        <ul>
            {lucs}
        </ul>
        <Link href="/">Retour maison</Link>
    </>)
}
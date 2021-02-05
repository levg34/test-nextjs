import Datastore from 'nedb'
import Link from 'next/link'
import path from 'path'

export async function getServerSideProps(context) {
    const db = new Datastore({
        filename: path.join(process.cwd(),'/data/data'),
        autoload: true
    })

    const { id } = context.params

    let doc = await new Promise((resolve,reject) => {
        db.findOne({_id:id}, (err,docs) => {
            if (err) reject(err)
            resolve(docs)
        })
    })

    if (!doc) {
        doc = {error: 'not found'}
    }

    return {
        props: {
            doc
        }
    }
}

function Luc({doc}) {
    return <>
        <PrettyPrint jsonObj={doc}/>
        <Link href="/">Retour maison</Link>
    </>
}

function PrettyPrint(props){
  return <pre>{JSON.stringify(props.jsonObj,null,2)}</pre>
}

export default Luc
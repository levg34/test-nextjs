const Datastore = require('nedb')
const path = require('path')

const db = new Datastore({
    filename: path.join(process.cwd(),'/data/data'),
    autoload: true
})

export default (req, res) => {
    if (req.method === 'POST') {
        db.insert(req.body, function (err, newDoc) {
            if (err) res.status(500).json(err)
            res.status(200).json(newDoc)
        })
    } else {
        const test = process.env.TEST
        const truc = process.env.TRUC
        const url = process.env.URL
        // Handle any other HTTP method
        res.status(405).json({message: 'Method not allowed',test,truc,url})
    }
}
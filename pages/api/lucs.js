const Datastore = require('nedb')
const path = require('path')

const db = new Datastore({
    filename: path.join(process.cwd(),'/data/data'),
    autoload: true
})

export default (req, res) => {
    if (req.method === 'GET') {
        db.find({}).sort({ date: 1 }).exec(function (err, docs) {
            if (err) res.status(500).json(err)
            res.status(200).json(docs)
        })
    } else {
        // Handle any other HTTP method
        res.status(405).json({message: 'Method not allowed'})
    }
}
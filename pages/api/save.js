const Datastore = require('nedb')

export default (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
        const db = new Datastore({
            filename: 'data/data',
            autoload: true
        })

        db.insert(req.body, function (err, newDoc) {
            if (err) res.status(500).json(err)
            res.status(200).json(newDoc)
        })
    } else {
        // Handle any other HTTP method
        res.status(405).json({message: 'Method not allowed'})
    }
}
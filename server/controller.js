const movies = require('./db.json')
let globalId = 11

module.exports = {
    getAllMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        let { location, wonder, imageURL} = req.body
        let newMovie = {
            id: globalId,
                location,
                wonder, 
                imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    // updateMovie: (req, res) => {
    //     let {id} = req.params
    //     let {type} = req.body
    //     let index = movies.findIndex(elem => +elem.id === +id)

    //     if (movies[index].rating === 5 && type === 'plus') {
    //         res.status(400).send('cannot go above 5')
    //     } else if (movies[index].rating === 0 && type === 'minus') {
    //         res.status(400).send('cannot go below 0')
    //     } else if (type === 'plus') {
    //         movies[index].rating++
    //         res.status(200).send(movies)
    //     } else if (type === 'minus') {
    //         movies[index].rating--
    //         res.status(200).send(movies)
    //     } else {
    //         res.sendStatus(400).send('you broke it')
    //     }
    // }
}
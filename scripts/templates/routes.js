

const Name = require('./controllers/Name')
r.get('/Name', Name.get)
r.put('/Name/:id', Name.update)
r.delete('/Name/:id', Name.destroy)
r.post('/Name', Name.create)
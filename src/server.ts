import express from 'express'
import routes from './routes';
import { Request, Response, NextFunction } from 'express';


const app = express()
app.use(express.json())
app.use(routes)

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found')
    next(error)
})
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ error: error.message })
})

app.listen(3333, () => console.log('Server is running'))


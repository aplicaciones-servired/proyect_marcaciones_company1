import { Router } from 'express'
import { Login, RefreshToken, SignOut, SignUp, Users } from "../Controllers/getRotes.controllers.js";

export const getRoutes = Router()

getRoutes.post('/api/login', Login)

getRoutes.post('/api/signup', SignUp)

getRoutes.get('/api/singout', SignOut)

getRoutes.get('/api/users', Users)

getRoutes.get('/api/refreshToken', RefreshToken)
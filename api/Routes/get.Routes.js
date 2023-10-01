import { Router } from 'express'
import { Login, RefreshToken, SignOut, SignUp, Users } from "../Controllers/getRotes.controllers.js";

export const getRoutes = Router()

getRoutes.get('/api/login', Login)

getRoutes.get('/api/signup', SignUp)

getRoutes.get('/api/singout', SignOut)

getRoutes.get('/api/users', Users)

getRoutes.get('/api/refreshToken', RefreshToken)
import { JsonResponse } from "../lib/jsonResponse.js"

export const Login = async (req, res) => {
  const { user, password } = req.body

  if (user || password) {
    return res.status(200).json(`Usuario Logueado`)
  }
}

export const RefreshToken = async (req, res) => {
  res.send('RefreshToken')
}

export const SignOut = async (req, res) => {
  res.send('SignOut')
}

export const SignUp = async (req, res) => {

  const { names, lastNames, document } = req.body

  if (document) {
    return res.status(201).json(`User Recibido: ${names} ${lastNames}`)
  }

}

export const Users = async (req, res) => {
  res.send('Users')
}

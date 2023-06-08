import userModel from '../models/user.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
    try {
        //destructure data cming from frontend
        const { name, email, password } = req.body

        //Validate (check whether all the fields that are necessary are provided by the user or not)
        if (!name) {
            next('Name is required')
        }
        if (!email) {
            next('Email is required')
        }
        if (!password) {
            next('Password is required')
        }

        //Check the DB for the existing user or new user (uniqueness of data)
        const existingUser = await userModel.findOne({ name, email })
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Email is already in use',
                user: [existingUser.name, existingUser.email]
            })
        }

        //Store the data
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10)
        })

        console.log(newUser)

        //New user created successfully
        res.status(200).send({
            success: true,
            message: 'New user created successfully',
            newUser: [newUser.name, newUser.email]
        })
    } catch (e) {
        console.log(e)
        next('Error in registering user')
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        //Check if either field is empty 
        if (!email || !password) {
            next('Provide all the fields')
        }

        //Check any existing user with the provided fields
        const existingUser = await userModel.findOne({ email })
        if (!existingUser) {
            next('Invalid details')
        }

        //Comparing encrypted password with the password saved in the DB
        const isPassword = await bcrypt.compare(password, existingUser.password)
        if (!isPassword) {
            next('Incorrect Password')
        }

        //Final Login status
        res.status(200).send({
            success: true,
            message: 'Login successfully',
            user: [existingUser.name, existingUser.email]
        })
    } catch (e) {
        console.log(e)
        next('Failed to login')
    }
}
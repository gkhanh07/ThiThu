const Member = require('../model/members')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'Khanhdz123', {
        expiresIn: maxAge
    })
}

class memberController {
    static async signUp(req, res) {
        try {
            const saltRound = 10;
            const { username, password } = req.body;

            const existMember = await Member.findOne({ username });


            if (existMember) {
                return res.status(400).json({ message: 'Username exists' });
            }

            const hashPassword = await bcrypt.hash(password, saltRound);

            const createMember = await Member.create({
                username,
                password: hashPassword,
            })
            const token = createToken(createMember._id)
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge })
            res.render('signUp');

        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
    static async login(req, res) {
        try {
            const { username, password } = req.body;

            const existUsername = await Member.findOne({ username });
            if (!existUsername) {
                req.flash('error', 'Incorrect username or password');
                return res.redirect('/users/login')
            }

            const auth = await bcrypt.compare(password, existUsername.password);
            if (auth) {

                const token = createToken(existUsername._id);

                // Set the token as a cookie
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });


                res.redirect('/')
            } else {
                req.flash('error', 'Incorrect username or password');
                return res.redirect('/users/login')
            }
        } catch (error) {
            req.flash('error', 'Incorrect username or password');
            res.status(500).json({ message: 'Server error', error });
        }
    }
    static async logout(req, res) {
        res.cookie('jwt', '', { maxAge: 1 })
        res.redirect('/')
    }
}
module.exports = memberController;
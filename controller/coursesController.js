const Courses = require('../model/courses');
const { ObjectId } = require('mongodb');
class coursesController {
    static async createCourses(req, res) {
        try {
            const data = [
                {
                    _id: new ObjectId("64916b3b7f8a6ac6119055fa"),
                    courseName: "React - The Complete Guide 2023",
                    courseDescription: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!"
                },
                {
                    _id: new ObjectId("64916b697f8a6ac6119055fc"),
                    courseName: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
                    courseDescription: "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!"
                },
                {
                    _id: new ObjectId("64916be07f8a6ac6119055fe"),
                    courseName: "Flutter & Dart - The Complete Guide",
                    courseDescription: "A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps"
                },
                {
                    _id: new ObjectId("64916c557f8a6ac611905600"),
                    courseName: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
                    courseDescription: "A popular supplier of central air conditioning systems known for its high-quality and energy-efficient units."
                }
            ];
            const allCourses = await Courses.create(data)
            res.status(200).json(data)
        } catch {
            res.status(500)
        }

    }

    static async getAllCourses(req, res) {
        try {
            const courses = await Courses.find({})

            res.render('index', { courses })
        } catch {
            res.status(400)
        }
    }

    static async addCourses(req, res) {
        const { courseName, courseDescription } = req.body
        try {
            const addCourses = await Courses.create({
                courseName,
                courseDescription,
            })
            res.status(200).json(addCourses)
        } catch {
            res.status(500)
        }
    }
    static async deleteCourses(req, res) {
        const { courseName } = req.body

        try {
            const deleteCourses = await Courses.deleteOne({ courseName })
            res.status(200).json({ message: 'xoa thanh cong' });
        }
        catch {
            res.status(500)
        }
    }
    static async findCourses(req, res) {
        const { courseName } = req.body
        try {
            const searchCourses = await Courses.findOne({ courseName })
            res.status(200).json(searchCourses)
        }
        catch {
            res.status(500)
        }
    }
}

module.exports = coursesController
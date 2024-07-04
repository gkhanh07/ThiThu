const Courses = require('../model/sections')
const Section = require('../model/sections')
const { ObjectId } = require('mongodb');
class sectionController {


    static async createSection(req, res) {
        try {
            const data = [
                {
                    _id: new ObjectId("64916da37f8a6ac611905603"),
                    sessionName: "Flutter & Dart Basics",
                    sectionDescription: "Time to practice with some of the Flutter & Dart basics you gained up to this point.",
                    duration: 251,
                    isMainTask: true,
                    course: new ObjectId("64916be07f8a6ac6119055fe")
                },
                {
                    _id: new ObjectId("64916de77f8a6ac611905607"),
                    sessionName: "Building Responsive & Adaptive User Interfaces",
                    sectionDescription: "Building Responsive & Adaptive User Interfaces [EXPENSE TRACKER APP]",
                    duration: 323,
                    isMainTask: true,
                    course: new ObjectId("64916be07f8a6ac6119055fe")
                },
                {
                    _id: new ObjectId("64916e0b7f8a6ac61190560a"),
                    sessionName: "Building Multi-Screen Apps & Navigating Between Screens",
                    sectionDescription: "Building Multi-Screen Apps & Navigating Between Screens",
                    duration: 214,
                    isMainTask: true,
                    course: new ObjectId("64916be07f8a6ac6119055fe")
                },
                {
                    _id: new ObjectId("64916e727f8a6ac611905610"),
                    sessionName: "Working with Express.js",
                    sectionDescription: "Time for the second assignment of this module, are you ready?",
                    duration: 160,
                    isMainTask: true,
                    course: new ObjectId("64916b697f8a6ac6119055fc")
                },
                {
                    _id: new ObjectId("64916ea17f8a6ac611905612"),
                    sessionName: "Working with Dynamic Content & Adding Templating Engines",
                    sectionDescription: "We learned a lot about Pug, Handlebars and EJS so let's see if we know how to use these templating engines now!",
                    duration: 321,
                    isMainTask: false,
                    course: new ObjectId("64916b697f8a6ac6119055fc")
                },
                {
                    _id: new ObjectId("64916f047f8a6ac611905616"),
                    sessionName: "Hibernate, JPA and JDBC",
                    sectionDescription: "Hibernate, JPA and JDBC",
                    duration: 144,
                    isMainTask: true,
                    course: new ObjectId("64916c557f8a6ac611905600")
                },
                {
                    _id: new ObjectId("64916f317f8a6ac611905619"),
                    sessionName: "REST API",
                    sectionDescription: "Spring Boot REST: Spring Data REST",
                    duration: 179,
                    isMainTask: true,
                    course: new ObjectId("64916c557f8a6ac611905600")
                },
                {
                    _id: new ObjectId("64916f877f8a6ac61190561d"),
                    sessionName: "React Basics & Working With Components",
                    sectionDescription: "In this course module, you learned about key React features which you must know for every React app you're going to build! Hence it's time to check what you learned and verify that we're all on the same page!",
                    duration: 130,
                    isMainTask: true,
                    course: new ObjectId("64916b3b7f8a6ac6119055fa")
                },
                {
                    _id: new ObjectId("64916fb07f8a6ac61190561f"),
                    sessionName: "React State & Working with Events",
                    sectionDescription: "Time to practice what you learned about events and state in React apps.",
                    duration: 210,
                    isMainTask: true,
                    course: new ObjectId("64916b3b7f8a6ac6119055fa")
                }
            ];

            const allSections = await Section.create(data);
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getAllSection(req, res) {
        try {
            const sections = await Section.find({}).populate('course')

            res.render('index', { sections })
        } catch {
            res.status(500)
        }

    }
    static async deleteSection(req, res) {
        const { id } = req.body
        try {
            const deleteSection = await Section.findByIdAndDelete(id)
            res.redirect('/')
        } catch {
            res.status(500)
        }
    }

    static async updateSection(req, res) {
        const { id } = req.body;
        try {
            const updateSection = await Section.findByIdAndUpdate(id)

        } catch {
            res.status(500)
        }
    }
}
module.exports = sectionController
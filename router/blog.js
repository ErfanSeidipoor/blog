const express = require('express')
const Blog = require('../models/Blog')

const auth = require('../middleware/auth')
const router = express.Router()

router.post('/blogs', auth, async (req,res) => {
    try {
        const { _id } = req.user
        const blog = await new Blog( {...req.body,_user:_id} )
        await blog.save()
        res.status(201).send({ blog })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/blogs', auth, async (req,res) => {
    try {
        const blogs = await Blog.find({ _user: req.user._id });
        res.status(200).send(blogs)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/blogs/:id', auth, async (req,res) => {
    try {
        const blog = await Blog.findOne({
            _user: req.user._id,
            _id: req.params.id
          });
          res.send(blog);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
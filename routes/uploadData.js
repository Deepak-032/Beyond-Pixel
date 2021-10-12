const route = require('express').Router()

route.post('/', async (req, res) => {
    const { service, projectName, projectDesc, videoLink } = req.body
    try {
        res.json({
            service: service,
            id: null,
            name: projectName,
            content: projectDesc,
            videoSrc: videoLink
        })
    } catch (error) {
        res.json({ error: error })
    }
})

module.exports = route

const route = require('express').Router()
const path = require('path')

route.post('/', async (req, res) => {
    if (req.files == null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }

    const { service, projectName, projectDesc, color, videoLink } = req.body
    const { image1, image2, image3, image4, image } = req.files
    let imgs = [image1, image2, image3, image4, image].filter(i => i)
    let files = imgs.map(img => {
        img.name = Date.now() + "." + img.name
        return img
    })

    try {
        const promises = files.map(file => {
            const savePath = path.join(__dirname, 'client', 'public', 'assets', 'uploads', file.name)
            return file.mv(savePath)
        })
        await Promise.all(promises)
            .then(() => {
                let toSend = files.map(file => `/assets/uploads/${file.name}`)
                let href = ''
                if (service === "photography" || service === "graphicDesign") {
                    href = `/${service}/${projectName}`
                }
                res.json({
                    service: service,
                    id: null,
                    name: projectName,
                    content: projectDesc,
                    imgSrc: toSend,
                    bgColor: color,
                    href: href,
                    videoSrc: videoLink
                })
            })
    } catch (error) {
        res.json({ error: error })
    }
})

module.exports = route

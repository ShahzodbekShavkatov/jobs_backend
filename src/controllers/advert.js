const GET = async (req, res) => {
	return res.json(
		await req.models.Advert.findAll()
	)
}

const POST = async (req, res) => {
    try {
        console.log(req.body)
        const newAdvert = req.models.Advert.create({
            info: req.body.info,
            jobId: req.body.jobId
        })
        let data = await req.models.Advert.findAll()
        res.status(200).json({
            message: "OK"
        })
    } catch (error) {
        res.send(error.message)
    }
}

export default {
	GET,
    POST
}
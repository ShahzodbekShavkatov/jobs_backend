import path from 'path'

const GET = async (req, res) => {
    
	return res.json(
		await req.models.Job.findAll()
	)
}

const POST = async (req, res) => {
    try {
        const { img } = req.files
        const imgName = img.name.replace(/\s/g, '')
        const imgPath = path.join(process.cwd(), 'files', imgName)

        img.mv( imgPath )

        const newJob = await req.models.Job.create({
            jobName: req.body.jobname,
            about: req.body.about,
            goodSides: req.body.goodSides,
            badSides: req.body.badSides,
            imgUrl: imgName
        })
        
        res.status(200).json({
            message: 'OK',
            job: 'Job wrote!'
        })
        
    } catch (error) {
        res.send(error.message)
    }
}

const PUT = async (req, res) => {
    try {
        const putJob = await req.models.Job.update( req.body, {
            where: {
                jobName: req.body.jobName
            }
        } )
        res.status(200).json({
            message: 'OK!',
            job: 'Job changed!'
        })
    } catch (error) {
        res.send(error.message)
    }
}

const DELETE = async (req, res) => {
    try {
        const deleteJob = await req.models.Job.destroy({
            where: {
                jobName: req.body.jobName
            }
        })
        res.status(200).json({
            message: 'OK!',
            job: 'Job deleted!'
        })
    } catch (error) {
        res.send(error.message)
    }
}

export default {
	GET,
    POST,
    PUT,
    DELETE
}
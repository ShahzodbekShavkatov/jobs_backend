const GET = async (req, res) => {
	return res.json(
		await req.models.Comment.findAll()
	)
}

const POST = async (req, res) => {
    try {
        const newComment = await req.models.Comment.create( req.body )
        console.log('comment post')
        res.send('comment post')
    } catch (error) {
        res.send(error.message)
    }
}

export default {
	GET,
    POST
}
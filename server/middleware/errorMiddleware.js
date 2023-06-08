const error = (e, req, res, next) => {
    res.status(400).send({
        success: false,
        message: 'Error',
        error: e
    })
    next()
}

export default error;
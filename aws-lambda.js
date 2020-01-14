exports.handler = async (event) => {

    const responseBody = {
        "message": "Internal Server Error",
        "status": 500,
    }

    const errors =[]

    const emoji = ["🌎","🌏","🌍","🗺","️🌐"]

    let subject = 'World'

    if (event.body) {
        const body = JSON.parse(event.body)

        if (body.subject) {
            subject = body.subject
        }
    }
    
    if (event.queryStringParameters && event.queryStringParameters.subject) {
        subject = event.queryStringParameters.subject
    }

    responseBody.data = `Hello ${subject}!`

    if (errors.length === 0) {
        responseBody.status = 200
        responseBody.message = "OK"
    } else {
        responseBody.errors = errors
    }

    if (event.queryStringParameters && event.queryStringParameters.debug) {
        responseBody.debug = event
    }
    
    return {
        body: JSON.stringify(responseBody),
        headers: {
            "X-Clacks-Overhead": "GNU Terry Pratchett",
            "X-World-Emoji": emoji[Math.floor(Math.random() * emoji.length)],
        },
        statusCode: responseBody.status,
    }
}

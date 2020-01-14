addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  // @TODO: Also support GET parameters 

  let body = {}

  if (request.headers.has('Content-Type')) {
    const formData = await request.formData()
    for (let entry of formData.entries()) {
      body[entry[0]] = entry[1]
    }
  }

  const responseBody = {
    "message": "Internal Server Error",
    "status": 500,
  }

  const errors =[]

  const emoji = ["🌎","🌏","🌍","🗺","️🌐"]

  let subject = 'World'

  if (body.subject) {
    subject = body.subject
  }
  
  responseBody.data = `Hello ${subject}!`

  if (errors.length === 0) {
    responseBody.status = 200
    responseBody.message = "OK"
  } else {
    responseBody.errors = errors
  }

  return new Response(JSON.stringify(responseBody), {
    headers: {
      "Content-Type":"application/json",
      "X-Clacks-Overhead": "GNU Terry Pratchett",
      "X-World-Emoji": encodeURIComponent(emoji[Math.floor(Math.random() * emoji.length)]),
    },
    statusCode: responseBody.status,
  })
}

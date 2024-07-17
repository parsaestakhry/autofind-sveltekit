/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
	const body =  await request.body
    return new Response(body)
}

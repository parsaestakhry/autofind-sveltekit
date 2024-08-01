export async function POST(event : any) {
	const body = await event.request.json();
	console.log('request body: ', body);

	return new Response(body);
}
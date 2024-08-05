export const actions = {
	default: async({ request,cookies }) => {
        //console.log("hello")
        cookies.delete('access_token', {path : '/'} )
    }
};
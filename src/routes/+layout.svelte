<script lang="ts">
	import "../app.css"
	import NavBar from "../components/NavBar.svelte";
	export let data
</script>

<NavBar username={data.username}/>

<slot/>
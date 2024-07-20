<script lang="ts">
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	export let data;
</script>

<div >
	<NavBar username={data.username} />
	<slot />
</div>

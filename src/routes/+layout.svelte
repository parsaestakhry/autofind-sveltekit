<script lang="ts">
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	export let data;
</script>

<div class="bg-gray-900">
	<NavBar username={data.username} />
	<slot />
</div>

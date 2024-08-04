<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import NavBar from '../components/NavBar.svelte';
	export let data;
</script>

<div class="">
	<NavBar username={data.username} />
	<slot data={data.username} />
	<Footer/>
</div>

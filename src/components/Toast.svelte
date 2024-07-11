<script>
	import { onMount } from 'svelte';
	let visible = true;
	onMount(() => {
		const timer = setTimeout(() => {
			visible = false;
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	});
</script>


{#if visible}
<div class="toast">
	<div class="alert alert-success">
		<span>Login Successful</span>
	</div>
</div>
{/if}

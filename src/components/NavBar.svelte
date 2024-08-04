<script>
	import Drawer from './Drawer.svelte';
	import CarBattery from 'phosphor-svelte/lib/CarBattery';
	import SignIn from 'phosphor-svelte/lib/SignIn';
	export let username;
</script>

<div class="navbar bg-orange-600 ">
	<div class="flex-none"></div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-2xl font-extrabold text-slate-800 ml-4"
			>Caruns.com <CarBattery size={28} weight='bold' class="mt-1" />
			<div></div>
		</a>
	</div>
	<a href="/user/{username}" class="btn hidden sm:flex font-extrabold text-2xl text-slate-800 btn-ghost"
		>Welcome {username}
	</a>
	<div class="flex-none">
		{#if username === ''}
			<a class="btn btn-ghost" href="/login"><SignIn weight="bold" color="#f7f2f2" size={27} /></a>
		{/if}
		<Drawer />
	</div>
</div>




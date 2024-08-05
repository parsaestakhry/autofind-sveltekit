<script>
	import Drawer from './Drawer.svelte';
	import CarBattery from 'phosphor-svelte/lib/CarBattery';
	import SignIn from 'phosphor-svelte/lib/SignIn';
	export let username;
</script>

<div class="navbar bg-orange-600">
	<div class="flex-none"></div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost ml-4 text-2xl font-extrabold text-slate-800"
			>Caruns.com <CarBattery size={28} weight="bold" class="mt-1" />
		</a>
		<a
			data-sveltekit-reload
			href="/cars/usage/new"
			class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
			>New
		</a>
		<a
			data-sveltekit-reload
			href="/cars/usage/used"
			class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
			>Used
		</a>
		<a
			data-sveltekit-reload
			href="/cars/fuel-types/electric"
			class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
			>Electric
		</a>
	</div>
	<a
		href="/user/{username}"
		class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
		>Welcome {username}
	</a>
	<div class="flex-none">
		{#if username === ''}
			<a class="btn btn-ghost" href="/login"><SignIn weight="bold" color="#f7f2f2" size={27} /></a>
		{/if}
		<Drawer username={username} />
	</div>
</div>

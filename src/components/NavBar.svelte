<script>
	import Drawer from './Drawer.svelte';
	import CarBattery from 'phosphor-svelte/lib/CarBattery';
	import SignIn from 'phosphor-svelte/lib/SignIn';
</script>

<div class="navbar bg-ghost rounded-md">
	<div class="flex-none"></div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-2xl font-sans text-slate-100 ml-10"
			>Autofind <CarBattery size={25} class="mt-1" />
			<div></div>
		</a>
	</div>
	<div class="flex-none">
		<a class="btn btn-ghost" href="/login"><SignIn weight="bold" color="#f7f2f2" size={27} /></a>

		<Drawer />
	</div>
</div>

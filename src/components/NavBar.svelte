<script>
	import { SignOut, User, UserPlus } from 'phosphor-svelte';
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
		{#if username !== ''}
			<a
				data-sveltekit-reload
				href="/user/{username}"
				class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
				>Account <User size={25} weight="bold" />
			</a>

			<button
				data-sveltekit-reload
				class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
				>SignOut <SignOut size={25} weight="bold" />
			</button>
		{:else}
			<a
				href="/login"
				data-sveltekit-reload
				class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
				>SignIn <SignIn size={25} weight="bold" />
			</a>
			<a
				href="/register"
				data-sveltekit-reload
				class="btn ml-4 hidden rounded-2xl bg-gray-900 text-lg font-extrabold text-slate-50 sm:flex"
				>SignUp <UserPlus size={25} weight="bold" />
			</a>
		{/if}
	</div>
</div>

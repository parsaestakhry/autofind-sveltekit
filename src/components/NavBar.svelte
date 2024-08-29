<script lang="ts">
	import { BookBookmark, BookmarkSimple, SignOut, User, UserPlus } from 'phosphor-svelte';
	import Drawer from './Drawer.svelte';
	import CarBattery from 'phosphor-svelte/lib/CarBattery';
	import SignIn from 'phosphor-svelte/lib/SignIn';
	export let username : string | null;

	

</script>

<div class="navbar bg-orange-600">
	<div class="flex-1 space-x-5" >
		<a data-sveltekit-reload href="/" class="btn btn-ghost ml-4 text-2xl font-extrabold text-slate-800 "
			>caruns (beta)
		</a>
		<a
			data-sveltekit-reload
			href="/cars/usage/new"
			class=" ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex no-underline hover:underline hover:underline-offset-4 "
			>New
		</a>
		<a
			data-sveltekit-reload
			href="/cars/usage/used"
			class=" ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4 "
			>Used
		</a>
		<a
			data-sveltekit-reload
			href="/cars/fuel-types/electric"
			class=" ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4 "
			>Electric
		</a>
		{#if username !== ''}
			<a
				data-sveltekit-reload
				href="/user/{username}"
				class=" ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4 "
				>Account
			</a>

			<a
				href="/sign-out"
				data-sveltekit-reload
				class=" ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4 "
				>SignOut 
			</a>
			<a
				href="/saved"
				data-sveltekit-reload
				class=" ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4 "
				>Saved 
			</a>
		{:else}
			<a
				href="/login"
				data-sveltekit-reload
				class="ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4"
				>Login 
			</a>
			<a
				href="/register"
				data-sveltekit-reload
				class="ml-4 hidden  text-slate-800 text-2xl font-extrabold sm:flex hover:underline hover:underline-offset-4"
				>Register 
			</a>
			
		{/if}
	</div>
	<div>
		<Drawer username={username} />
	</div>
</div>

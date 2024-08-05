<script lang="ts">
	import { BookmarkSimple, SignIn, User, UserCirclePlus } from 'phosphor-svelte';
	import List from 'phosphor-svelte/lib/List';
	export let username;
</script>

<div class="drawer drawer-end z-50 sm:hidden">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-ghost drawer-button"><List color="" size={28} /></label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 space-y-2 bg-gray-900 p-4 text-base-content">
			<!-- Sidebar content here -->
			<li>
				<a
					data-sveltekit-reload
					href="/saved"
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					>Saved <BookmarkSimple size={25} weight="bold" />
				</a>
			</li>
			<li>
				<a
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					href="/register">Register <UserCirclePlus size={25} weight="bold" /> </a
				>
			</li>
			<li>
				<a
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					href="/login">Login <SignIn size={25} weight="bold" />  </a
				>
			</li>
			<li>
				<a
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					href="/user/{username}">Account <User size={25} weight="bold" />  </a
				>
			</li>
			<li>
				<a
					data-sveltekit-reload
					href="/cars/usage/new"
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					>New
				</a>
			</li>
			<li>
				<a
					data-sveltekit-reload
					href="/cars/usage/used"
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					>Used
				</a>
			</li>
			<li>
				<a
					data-sveltekit-reload
					href="/cars/fuel-types/electric"
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					>Electric
				</a>
			</li>
			<li>
				<a
					data-sveltekit-reload
					href="/buy"
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					>Buy
				</a>
			</li>
			<li>
				<a
					data-sveltekit-reload
					href="/sell"
					class="button btn-ghost bg-orange-600 text-xl font-extrabold text-slate-800 hover:bg-orange-700"
					>Sell
				</a>
			</li>
		</ul>
	</div>
</div>

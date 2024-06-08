<script>
	import List from 'phosphor-svelte/lib/List';
</script>

<div class="drawer drawer-end  z-50" >
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-ghost drawer-button "><List color="#f7f2f2" size={28}/></label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-1">
			<!-- Sidebar content here -->
			<li><a class="button btn-ghost bg-black" href="/register">Register</a></li>
			<li><a class="button btn-ghost bg-black" href="/login">Login</a></li>
		</ul>
	</div>
</div>

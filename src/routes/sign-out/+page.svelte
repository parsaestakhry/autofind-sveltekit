<script lang="ts" >
    import {goto} from '$app/navigation'
</script>

<div class="min-h-screen">
	<div role="alert" class="alert min-h-screen bg-gray-900">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-6 w-6 shrink-0 stroke-info"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			></path>
		</svg>
		<span>are you sure you wanna sign out ? </span>
		<div>
			<form action="" method="POST">
				<button
                    
					type="submit"
					class="btn bg-orange-600 text-slate-50 font-extrabold"
					>Sign Out</button
				>
                
			</form>
		</div>
	</div>
</div>

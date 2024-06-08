<script>
	export let name;
	export let pic;
</script>

<div class="relative w-80">
	<img class="object-cover inset-0 w-full h-full rounded-lg" src={pic} alt="hatch" />
	<div class="absolute inset-0 flex items-center justify-center font-bold">
		<span class="text-3xl mb-20 text-black font-bold">{name}</span>
	</div>
</div>

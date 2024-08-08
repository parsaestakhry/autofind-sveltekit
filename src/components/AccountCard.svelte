<script>
    export let headText;
    export let paragraph;
    export let button;
    export let link;
    export let image;
</script>

<div class="card w-96 bg-inherit border-4 border-orange-600 shadow-xl">
	<figure class="px-5 pt-5">
		<img
			src={image}
			alt="Shoes"
			class="rounded-xl"
		/>
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title text-2xl font-extrabold text-slate-50">{headText}</h2>
		<p class="mb-2 font-extrabold text-slate-50">{paragraph}</p>
		<div class="card-actions">
			<a href={link} class="btn rounded-2xl bg-orange-600 text-lg font-extrabold text-slate-50"
				>{button}</a
			>
		</div>
	</div>
</div>

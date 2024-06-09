<script lang="ts">
	export let model;
	export let make;
	export let milage;
	export let color;
	export let fuel_type;
	export let year_make;
	export let price;
	let carImage: string;

	// Dynamically import the image based on the make
	import(`../assets/images/${make}.jpg`)
		.then((image) => {
			carImage = image.default;
		})
		.catch((error) => {
			console.error(`Failed to load image for make '${make}':`, error);
			// Handle error, for example, by setting a default image
			carImage = '../assets/images/default.jpg';
		});
</script>

<div class="card sm:w-96 w-81 glass mt-5 mx-5">
	<figure><img src={carImage} alt={make} /></figure>
	<div class="card-body">
		<h2 class="card-title text-slate-50 text-2xl">{make}</h2>
		<h3 class=" text-slate-50 text-xl">{model}</h3>
		<div class="space-y-2">
			<div class="badge bg-slate-500 border-none text-slate-50 text-lg badge-lg ">milage : {milage}</div>
			<div class="badge bg-slate-500 border-none text-slate-50 text-lg badge-lg">year : {year_make}</div>
			<div class="badge bg-slate-500 border-none text-slate-50 text-lg badge-lg">color : {color}</div>
			<div class="badge bg-slate-500 border-none text-slate-50 text-lg badge-lg">fuel : {fuel_type}</div>
		</div>
		<div class="card-actions justify-start">
			<button class="btn bg-orange-600 border-none text-slate-100 mt-2 h-14 text-md">{price ? price : 'contact dealer'}</button>
		</div>
	</div>
</div>

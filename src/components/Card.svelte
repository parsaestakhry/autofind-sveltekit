<script lang="ts">
	export let model;
	export let make;
	export let milage;
	export let color;
	export let fuel_type;
	export let year_make;
	export let price;
	export let type;
	export let transmission
	let carImage: string;
	import defaultJPG from '../assets/images/default.jpg';
	import { Calendar, Car, CurrencyDollar, GasPump, Gear, Info, Palette, Phone, PhoneCall, RoadHorizon } from 'phosphor-svelte';
	// Dynamically import the image based on the make
	// import(`../assets/images/${make}.jpg`)
	// 	.then((image) => {
	// 		carImage = image.default;
	// 	})
	// 	.catch((error) => {
	// 		console.error(`Failed to load image for make '${make}':`, error);
	// 		// Handle error, for example, by setting a default image
	// 		carImage = defaultJPG;
	// 	});
</script>

<div class="card sm:w-[27rem] w-81 bg-orange-600 mt-5 mx-5 mb-10 ">
	<figure><img src={defaultJPG} alt={make} /></figure>
	<div class="card-body">
		<h2 class="card-title text-slate-800 text-2xl font-extrabold tracking-wide">{make}</h2>
		<h3 class=" text-slate-800 text-xl font-bold">{model}</h3>
		<div class=" space-y-1  ">
			<div class="badge bg-slate-800 border-none text-slate-50 text-md badge-lg font-semibold p-4">
				Milage : {milage} <RoadHorizon class="ml-3" size={20} weight="bold" />
			</div>
			<div class="badge bg-slate-800 border-none text-slate-50 text-md badge-lg font-semibold p-4">
				Year : {year_make} <Calendar class="ml-3" size={20} weight="bold" />
			</div>
			<div class="badge bg-slate-800 border-none text-slate-50 text-md badge-lg font-semibold p-4">
				Color : {color} <Palette class="ml-2" size={20} weight="bold" />
			</div>
			<div class="badge bg-slate-800 border-none text-slate-50 text-md badge-lg font-semibold p-4">
				Fuel : {fuel_type} <GasPump class="ml-2" size={20} weight="bold" />
			</div>
			<div class="badge bg-slate-800 border-none text-slate-50 text-md badge-lg font-semibold p-4">
				Type : {type} <Car class="ml-2" size={20} weight="bold" />
			</div>
			<div class="badge bg-slate-800 border-none text-slate-50 text-md badge-lg font-semibold p-4">
				Transmission : {transmission} <Gear class="ml-2" size={20} weight="bold" />
			</div>
		</div>
		{#if price}
			<div class="card-actions justify-center">
				<button
					class="btn btn-ghost bg-orange-600 border-none text-slate-800 mt-2 h-14 text-lg hover:bg-orange-700 font-bold"
				>
					{price}<CurrencyDollar size={23} weight="bold" />
				</button>
				<button
					class="btn btn-ghost border-none text-slate-800 mt-2  h-14 text-lg hover:bg-orange-700 font-bold"
				>
					Learn More <Info size={23} weight="bold" />
				</button>
			</div>
		{:else}
			<div class="card-actions justify-center">
				<button
					class="btn btn-ghost border-none text-slate-800  h-14 text-lg hover:bg-orange-700 font-bold"
				>
					Learn More <Info size={23} weight="bold" />
				</button>
				<button
					class="btn btn-ghost border-none text-slate-800  h-14 text-lg hover:bg-orange-700 font-bold"
				>
					Contact Dealer <PhoneCall size={23} weight="bold" />
				</button>
			</div>
		{/if}
	</div>
</div>

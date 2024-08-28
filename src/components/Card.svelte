<script lang="ts">
	export let model: string;
	export let make: string;
	export let mileage: number;
	export let color: string;
	export let fuel_type: string;
	export let year_make: number;
	export let price: number | null;
	export let type: string;
	export let transmission: string;
	export let registration: string;
	export let usage: string;
	import image from '../31V56815.jpg';
	import { onMount } from 'svelte';
	let imageSrc: any;
	import {
		Calendar,
		Car,
		CurrencyDollar,
		GasPump,
		Gear,
		Info,
		Palette,
		PhoneCall,
		RoadHorizon,
		Speedometer
	} from 'phosphor-svelte';

	const sleep = (ms: number | undefined) => new Promise((f) => setTimeout(f, ms));
	onMount(async () => {
		const response = await fetch('/api/handle-image', {
			method: 'POST',
			body: JSON.stringify({ registration }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			// Create a URL from the image blob
			const blob = await response.blob();
			imageSrc = URL.createObjectURL(blob)
			console.log(imageSrc);
		}
	});

	//console.log(registration);
</script>

<div class="w-81 card mx-5 mb-10 bg-orange-600 sm:mt-5 sm:w-[29rem]">
	<figure>
		<img src={imageSrc} alt="Front side of the car" class="h-48 w-full object-cover" />
	</figure>

	<div class="card-body">
		<h2 class="card-title text-2xl font-extrabold tracking-wide text-slate-800">{make}</h2>
		<h3 class="text-xl font-bold text-slate-800">{model}</h3>
		<div class="space-y-1">
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Mileage: {mileage}
				<RoadHorizon class="ml-3" size={20} weight="bold" />
			</div>
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Year: {year_make}
				<Calendar class="ml-3" size={20} weight="bold" />
			</div>
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Color: {color}
				<Palette class="ml-2" size={20} weight="bold" />
			</div>
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Fuel: {fuel_type}
				<GasPump class="ml-2" size={20} weight="bold" />
			</div>
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Type: {type}
				<Car class="ml-2" size={20} weight="bold" />
			</div>
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Transmission: {transmission}
				<Gear class="ml-2" size={20} weight="bold" />
			</div>
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Usage: {usage}
				<Speedometer class="ml-2" size={20} weight="bold" />
			</div>
		</div>
		{#if price}
			<div class="card-actions justify-center">
				<button
					class="btn btn-ghost mt-2 h-14 border-none bg-orange-600 text-lg font-bold text-slate-800 hover:bg-orange-700"
				>
					{price}<CurrencyDollar size={23} weight="bold" />
				</button>
				<a
					href="/cars/{registration}"
					class="btn btn-ghost mt-2 h-14 border-none text-lg font-bold text-slate-800 hover:bg-orange-700"
				>
					Learn More <Info size={23} weight="bold" />
				</a>
			</div>
		{:else}
			<div class="card-actions justify-center">
				<a
					href="/cars/{registration}"
					class="btn btn-ghost h-14 border-none text-lg font-bold text-slate-800 hover:bg-orange-700"
				>
					Learn More <Info size={23} weight="bold" />
				</a>
				<button
					class="btn btn-ghost h-14 border-none text-lg font-bold text-slate-800 hover:bg-orange-700"
				>
					Contact Dealer <PhoneCall size={23} weight="bold" />
				</button>
			</div>
		{/if}
	</div>
</div>

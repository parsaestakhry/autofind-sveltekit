<script lang="ts">
	export let model: string;
	export let make: string;
	export let milage: number;
	export let color: string;
	export let fuel_type: string;
	export let year_make: number;
	export let price: number | null;
	export let type: string;
	export let transmission: string;
	export let registration: string;
	import {
		Calendar,
		Car,
		CurrencyDollar,
		GasPump,
		Gear,
		Info,
		Palette,
		PhoneCall,
		RoadHorizon
	} from 'phosphor-svelte';

	let carImages = {
		front: '',
		rear: '',
		driver: '',
		passenger: ''
	};

	const loadCarImages = () => {
		// Assuming your files are stored with names like "front-image.jpg" in "uploads/username/registration"
		const basePath = `../../uploads/${registration}`;
		carImages.front = `${basePath}/front.jpg`;
		carImages.rear = `${basePath}/${Date.now()}-rear.jpg`;
		carImages.driver = `${basePath}/${Date.now()}-driver.jpg`;
		carImages.passenger = `${basePath}/${Date.now()}-passenger.jpg`;
	};

	loadCarImages();
</script>

<div class="w-81 card mx-5 mb-10 sm:mt-5  bg-orange-600 sm:w-[29rem]">
	<figure>
		<img src={carImages.front} alt="Front side of the car" class="h-48 w-full object-cover" /> 
		
	</figure>

	<div class="card-body">
		<h2 class="card-title text-2xl font-extrabold tracking-wide text-slate-800">{make}</h2>
		<h3 class="text-xl font-bold text-slate-800">{model}</h3>
		<div class="space-y-1">
			<div class="text-md badge badge-lg border-none bg-slate-800 p-4 font-semibold text-slate-50">
				Milage: {milage}
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

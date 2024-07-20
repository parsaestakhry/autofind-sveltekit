<script lang="ts">
	export let data;
	import hatchback from '../../../../assets/images/longhatch.jpg';
	import sedan from '../../../../assets/images/longsedan.jpg';
	import coupe from '../../../../assets/images/longcoupe.jpg';
	import truck from '../../../../assets/images/longtruck.jpg';
	import wagon from '../../../../assets/images/longwagon.jpg';
	import type { Car } from '$lib/server/GetCars.js';
	import Card from '../../../../components/Card.svelte';
	let pic = '';
	switch (data.slug) {
		case 'hatchback':
			pic = hatchback;
			break;
		case 'sedan':
			pic = sedan;
			break;
		case 'coupe':
			pic = coupe;
			break;
		case 'truck':
			pic = truck;
			break;
		case 'wagon':
			pic = wagon;
			break;
	}

	const cars: Car[] = data.cars;
	
</script>

<div class="relative sm:h-64 h-80">
	<img class="object-cover object-center w-screen h-56 sm:h-72" src={pic} alt="family-car" />
	<div class="absolute inset-0 font-bold text-center mt-10">
		<h1 class="text-white sm:text-7xl text-5xl mt-10 sm:mt-16">{data.slug.toUpperCase()}S</h1>
	</div>
</div>

<div class="sm:mt-6 -mt-10 min-h-screen bg-gray-900">
	{#if cars && cars.length > 0}
		<ul class="flex flex-wrap justify-center mt-2 mb-5">
			{#each cars as car}
				<li>
					<Card
						model={car.model}
						make={car.make}
						milage={car.milage}
						color={car.Color}
						fuel_type={car.fuel_type}
						year_make={car.year_make}
						price={car.price}
						type={car.type}
						transmission={car.gearbox}
					/>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No cars available.</p>
	{/if}
</div>

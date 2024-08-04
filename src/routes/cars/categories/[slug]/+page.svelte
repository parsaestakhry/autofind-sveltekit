<script lang="ts">
	import hatchback from '../../../../assets/images/longhatch.jpg';
	import sedan from '../../../../assets/images/longsedan.jpg';
	import coupe from '../../../../assets/images/longcoupe.jpg';
	import truck from '../../../../assets/images/longtruck.jpg';
	import wagon from '../../../../assets/images/longwagon.jpg';
	import suv from '../../../../assets/images/landcruiser.jpg';
	import type { Car } from '$lib/server/GetCars.js';
	import Card from '../../../../components/Card.svelte';
	export let data;
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
		case 'suv':
			pic = suv;
			break;
	}

	const cars: Car[] = data.cars;
	
</script>

<div class="bg-gray-900 min-h-screen">
	<div class="">
		<div class="text-center font-bold">
			<h1 class="text-5xl text-white font-extrabold  sm:text-7xl p-10 ">{data.slug.toUpperCase()}S</h1>
		</div>
		{#if cars && cars.length > 0}
			<ul class="mt-2 flex flex-wrap justify-center">
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
							registration={car.registration}
						/>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No cars available.</p>
		{/if}
	</div>
</div>

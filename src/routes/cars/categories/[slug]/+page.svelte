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

<div class="min-h-screen bg-gray-900">
	<div class="">
		<div class="text-center font-bold">
			<h1 class="p-10 text-5xl font-extrabold text-white sm:text-7xl">
				{data.slug.toUpperCase()}S
			</h1>
		</div>
		{#if cars && cars.length > 0}
			<ul class="mt-2 flex flex-wrap justify-center">
				{#each cars as car}
					<li>
						<Card
							model={car.model}
							make={car.make}
							mileage={car.mileage}
							color={car.color}
							fuel_type={car.fuel_type}
							year_make={car.year_make}
							price={car.price}
							type={car.type}
							transmission={car.gearbox}
							registration={car.registration}
							usage={car.usage}
						/>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No cars available.</p>
		{/if}
	</div>
</div>

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

<div class="bg-gray-900">
	<div class="relative sm:h-64">
		<img class="h-56 w-screen object-cover object-center sm:h-72" src={pic} alt="family-car" />
		<div class="absolute inset-0 mt-10 text-center font-bold">
			<h1 class="mt-10 text-5xl text-white sm:mt-16 sm:text-7xl">{data.slug.toUpperCase()}S</h1>
		</div>
	</div>

	<div class="min-h-screen  sm:mt-6">
		{#if cars && cars.length > 0}
			<ul class="mb-5 mt-2 flex flex-wrap justify-center">
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
							username={data.username}
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

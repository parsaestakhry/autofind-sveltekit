<script lang="ts">
	export let data;

	import type { Car } from '$lib/server/GetCars.js';
	import Card from '../../../../components/Card.svelte';

	const cars: Car[] = data.cars;
</script>

<div class="bg-gray-900">
	<div class="relative sm:h-96">
		<div class="absolute inset-0 mt-10 text-center font-bold">
			<h1 class="mt-10 text-5xl text-white sm:text-7xl font-extrabold ">Made by {data.slug.toUpperCase()}</h1>
		</div>
	</div>

	<div class="min-h-screen sm:mt-6">
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


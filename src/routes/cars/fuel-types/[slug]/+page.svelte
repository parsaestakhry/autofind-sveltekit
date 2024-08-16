<!-- CarPage.svelte -->
<script lang="ts">
	import type { Car } from '$lib/server/GetCars';
	import { GasPump } from 'phosphor-svelte';
	import Card from '../../../../components/Card.svelte';
	import type { PageData } from './$types';
	export let data;

	const carArray: Car[] | undefined = data.cars;
</script>

<div class="bg-gray-900">
	<div class="relative sm:h-96">
		<div class="absolute inset-0 mt-10 text-center font-bold">
			<h1 class="mt-5 flex items-end justify-center text-5xl font-extrabold text-white sm:text-7xl">
				Fueled by {data.slug}
				<GasPump size={60} class="ml-2" weight="bold" />
			</h1>
		</div>
	</div>
	{#if carArray && carArray.length > 0}
		<ul class=" flex flex-wrap justify-center p-5">
			{#each carArray as car}
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

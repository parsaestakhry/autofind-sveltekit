<!-- CarPage.svelte -->
<script lang="ts">
	import type { Car } from '$lib/server/GetCars';
	import { GasPump } from 'phosphor-svelte';
	import Card from '../../../../components/Card.svelte';
	import type { PageData } from './$types';
	export let data;

	const carArray: Car[] | undefined = data.cars;
</script>

<div class="">
	<div class="min-h-screen bg-gray-900">
		<div class="relative sm:h-96">
			<div class="  text-center font-bold flex justify-center ">
				<h1
					class="sm:mt-20 mt-8 flex justify-center text-5xl font-extrabold text-white sm:text-7xl"
				>
					Fueled by {data.slug}
				</h1>
				
			</div>
		</div>
		{#if carArray && carArray.length > 0}
			<ul class=" flex flex-wrap justify-center p-5 sm:mt-0 mt-8">
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
</div>

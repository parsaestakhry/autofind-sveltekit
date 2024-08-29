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
			<div class="  flex justify-center text-center font-bold">
				<h1
					class="mt-8 flex justify-center text-5xl font-extrabold text-white sm:mt-20 sm:text-7xl"
				>
					Fueled by {data.slug}
				</h1>
			</div>
		</div>
		{#if carArray && carArray.length > 0}
			<ul class=" mt-8 flex flex-wrap justify-center p-5 sm:mt-0">
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
			<div  class="flex justify-center">
				<h4
					class=" sm:mx-0 mx-20 mt-10 mb-4 sm:mt-5 max-w-2xl text-center text-3xl font-extrabold leading-none tracking-tight sm:text-wrap md:text-5xl xl:text-6xl dark:text-white"
				>
					Sorry we currently don't have any cars fueled by {data.slug}
					<h4>:(</h4>
				</h4>
			</div>
		{/if}
	</div>
</div>

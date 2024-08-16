<!-- CarPage.svelte -->
<script lang="ts">
	import type { Car } from '$lib/server/GetCars';
	import Card from '../../components/Card.svelte';
	import type { PageData } from './$types';
	export let data;

	const carArray: Car[] | undefined = data.props?.data;
	console.log(carArray);
</script>

{#if carArray && carArray.length > 0}
	<ul class="mt-2 flex flex-wrap justify-center">
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

<script lang="ts">
	import type { Car } from '$lib/server/GetCars.js';
	import { onMount } from 'svelte';
	import Card from '../../components/Card.svelte';
	export let data;
	const username = data.username;
	let cars: Car[] = [];
	onMount(() => {
		async function getSavedCars() {
			const response = await fetch('/api/get-saved-cars', {
				method: 'POST',
				body: JSON.stringify({ username }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			cars = await response.json();
		}
		getSavedCars();
	});
</script>

<div class="min-h-screen bg-gray-900">
	{#if cars && cars.length > 0}
		<ul class="flex flex-wrap justify-center">
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
	{/if}
</div>

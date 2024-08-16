<script lang="ts">
	// @ts-nocheck

	import GLS from '../../../assets/images/gls.webp';
	import type { Car } from '$lib/server/GetCars';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import Card from '../../../components/Card.svelte';
	import { Car, GasPump, Gear } from 'phosphor-svelte';
	let minValue: number;
	let maxValue: number;
	let cars: Car[] = [];
	let makeChoice = '';
	let modelChoice = '';
	let yearChoice = 0;
	let carModels = [];
	let carYears = [];
	export let data;
	let checkboxValue = '';
	const chasisList = ['HatchBack', 'Sedan', 'Coupe', 'Wagon', 'Truck'];
	const fuelList = ['Gas', 'Diesel', 'Hybrid', 'Electric'];
	const gearList = ['Automatic', 'Manual'];

	const makeList = [
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png',
			name: 'Abarth'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png',
			name: 'AC'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/acura.png',
			name: 'Acura'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png',
			name: 'Aixam'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png',
			name: 'Alfa Romeo'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png',
			name: 'Ariel'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png',
			name: 'Arrinera'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png',
			name: 'Aston Martin'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/audi.png',
			name: 'Audi'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png',
			name: 'Bentley'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png',
			name: 'BMW'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png',
			name: 'Bugatti'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/buick.png',
			name: 'Buick'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png',
			name: 'Cadillac'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png',
			name: 'Caterham'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png',
			name: 'Chevrolet'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png',
			name: 'Chrysler'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png',
			name: 'Citroen'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png',
			name: 'Corvette'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png',
			name: 'Dacia'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/daf.png',
			name: 'Daf'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png',
			name: 'Daihatsu'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png',
			name: 'Dodge'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png',
			name: 'DR Motor'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png',
			name: 'Elfin'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png',
			name: 'Ferrari'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png',
			name: 'Fiat'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ford.png',
			name: 'Ford'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png',
			name: 'Gaz'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/geely.png',
			name: 'Geely'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png',
			name: 'Gillet'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png',
			name: 'Ginetta'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/gm.png',
			name: 'General Motors'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png',
			name: 'GMC'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png',
			name: 'Great Wall'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png',
			name: 'Gumpert'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png',
			name: 'Hennessey'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/10/holden.png',
			name: 'Holden'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/honda.png',
			name: 'Honda'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png',
			name: 'Hummer'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png',
			name: 'Hyundai'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/inf.png',
			name: 'Infiniti'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png',
			name: 'Isuzu'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png',
			name: 'Jaguar'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png',
			name: 'Jeep'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/joss.png',
			name: 'Joss'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/kia.png',
			name: 'Kia'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png',
			name: 'Koenigsegg'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/lada.png',
			name: 'Lada'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png',
			name: 'Lamborghini'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png',
			name: 'Lancia'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png',
			name: 'Land Rover'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png',
			name: 'Lexus'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/linc.png',
			name: 'Lincoln'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png',
			name: 'Lotus'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png',
			name: 'Luxgen'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png',
			name: 'Mahindra'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png',
			name: 'Maruti Suzuki'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mase.png',
			name: 'Maserati'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png',
			name: 'Maybach'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png',
			name: 'Mazda'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png',
			name: 'Mclaren'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png',
			name: 'Mercedes'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mg.png',
			name: 'MG'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mini.png',
			name: 'Mini'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png',
			name: 'Mitsubishi'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png',
			name: 'Morgan Motor'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png',
			name: 'Mustang logo'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png',
			name: 'Nissan'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/noble.png',
			name: 'Noble'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/opel.png',
			name: 'Opel'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png',
			name: 'Pagani'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png',
			name: 'Panoz'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png',
			name: 'Perodua'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/peug.png',
			name: 'Peugeot'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png',
			name: 'Piaggio'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png',
			name: 'Pininfarina'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png',
			name: 'Porsche'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/proton.png',
			name: 'Proton'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/renault.png',
			name: 'Renault'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/reva.png',
			name: 'Reva'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png',
			name: 'Rimac'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png',
			name: 'Rolls Royce'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png',
			name: 'Ruf logo'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/saab.png',
			name: 'Saab'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/scania.png',
			name: 'Scania'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/scion.png',
			name: 'Scion'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/seat.png',
			name: 'Seat'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png',
			name: 'Shelby'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png',
			name: 'Skoda'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/smart.png',
			name: 'Smart'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png',
			name: 'Spyker'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png',
			name: 'Ssangyong'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png',
			name: 'SSC'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png',
			name: 'Subaru'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png',
			name: 'Suzuki'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/tata.png',
			name: 'Tata'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png',
			name: 'Tatra'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png',
			name: 'Tesla'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png',
			name: 'Toyota'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg',
			name: 'Tramontana'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/troller.png',
			name: 'Troller'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png',
			name: 'TVR'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png',
			name: 'UAZ'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png',
			name: 'Vandenbrink'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png',
			name: 'Vauxhall'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png',
			name: 'Vector Motors'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png',
			name: 'Venturi'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png',
			name: 'Volkswagen'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png',
			name: 'Volvo'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png',
			name: 'Wiesmann'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png',
			name: 'Zagato'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png',
			name: 'Zaz'
		},
		{
			logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/zil.png',
			name: 'Zil'
		}
	];

	let selectedTypes = [];
	let selectedFuelTypes = [];
	let selectedGears = [];
	function toggleType(event, type) {
		if (event.target.checked) {
			selectedTypes = [...selectedTypes, type];
		} else {
			selectedTypes = selectedTypes.filter((item) => item !== type);
		}
	}

	function toggleFuel(event, fuel) {
		if (event.target.checked) {
			selectedFuelTypes = [...selectedFuelTypes, fuel];
		} else {
			selectedFuelTypes = selectedFuelTypes.filter((item) => item !== fuel);
		}
	}

	function toggleGear(event, gear) {
		if (event.target.checked) {
			selectedGears = [...selectedGears, gear];
		} else {
			selectedGears = selectedGears.filter((item) => item !== gear);
		}
	}

	let showText = false;
	async function handleClick(
		min: number,
		max: number,
		types: string[],
		fuels: string[],
		gears: string[]
	) {
		min = minValue;
		max = maxValue;
		types = selectedTypes;
		fuels = selectedFuelTypes;
		gears = selectedGears;
		showText = true;
		const response = await fetch('/api/find-model', {
			method: 'POST',
			body: JSON.stringify({ min, max, types, fuels, gears }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		cars = await response.json();
	}

	//console.log(cars)
</script>

<div>
	<!-- {#each selectedGears as type }
		<h1>
			{type}
		</h1>
	{/each} -->
	<section class="min-h-screen bg-white dark:bg-gray-900">
		<div class="mx-auto grid max-w-screen-xl px-8 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
				>
					We can find the car you'll love !
				</h1>
				<p
					class="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400"
				>
					From family SUVs and Sedans to Sports Cars, we've got them all.
				</p>
				<div class="items-end space-y-10 sm:flex sm:space-x-10 sm:space-y-0">
					<div>
						<h1
							class=" mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
						>
							Price From
							{#if minValue === null || minValue === undefined}
								{''}
							{:else}
								: {minValue}$
							{/if}
						</h1>
						<input
							type="number"
							bind:value={minValue}
							placeholder="Minimum Budget"
							class=" input input-bordered w-48 bg-orange-600 font-bold text-slate-800 placeholder:font-bold placeholder:text-slate-800"
						/>
					</div>

					<div>
						<h1
							class=" mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
						>
							To
							{#if maxValue === null || maxValue === undefined}
								{''}
							{:else}
								: {maxValue}$
							{/if}
						</h1>
						<input
							type="number"
							bind:value={maxValue}
							placeholder="Maximum Budget"
							class=" input input-bordered w-48 bg-orange-600 font-bold text-slate-800 placeholder:font-bold placeholder:text-slate-800"
						/>
					</div>
					<div class="dropdown dropdown-bottom">
						<div
							tabindex="0"
							role="button"
							class="btn flex flex-nowrap text-nowrap bg-orange-600 text-lg font-bold text-slate-800 hover:bg-orange-700 sm:mt-0 sm:flex-none"
						>
							Vehicle Type
							<Car class="mt-1" size={22} weight="bold" />
						</div>

						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-gray-800 p-2 shadow"
						>
							{#each chasisList as type}
								<li class="">
									<div class="form-control">
										<label class="label cursor-pointer">
											<span class="text-md label-text -my-10 w-16 font-bold">{type}</span>
											<input
												type="checkbox"
												class="checkbox ml-10 bg-orange-600"
												on:change={(event) => toggleType(event, type)}
											/>
										</label>
									</div>
								</li>
							{/each}
						</ul>
					</div>
					<div class="dropdown dropdown-bottom">
						<div
							tabindex="0"
							role="button"
							class="btn flex flex-nowrap text-nowrap bg-orange-600 text-lg font-bold text-slate-800 hover:bg-orange-700 sm:mt-0 sm:flex-none"
						>
							Fuel Type
							<GasPump class="mt-1" size={22} weight="bold" />
						</div>

						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-gray-800 p-2 shadow"
						>
							{#each fuelList as fuel}
								<li class="">
									<div class="form-control">
										<label class="label cursor-pointer">
											<span class="text-md label-text -my-10 w-16 font-bold">{fuel}</span>
											<input
												type="checkbox"
												class="checkbox ml-10 bg-orange-600"
												on:change={(event) => toggleFuel(event, fuel)}
											/>
										</label>
									</div>
								</li>
							{/each}
						</ul>
					</div>
					<div class="dropdown dropdown-bottom">
						<div
							tabindex="0"
							role="button"
							class="btn flex flex-nowrap text-nowrap bg-orange-600 text-lg font-bold text-slate-800 hover:bg-orange-700 sm:mt-0 sm:flex-none"
						>
							Transmission
							<Gear class="mt-1" size={22} weight="bold" />
						</div>

						<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
						<ul
							tabindex="0"
							class="menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-gray-800 p-2 shadow"
						>
							{#each gearList as gear}
								<li class="">
									<div class="form-control">
										<label class="label cursor-pointer">
											<span class="text-md label-text -my-10 w-16 font-bold">{gear}</span>
											<input
												type="checkbox"
												class="checkbox ml-10 bg-orange-600"
												on:change={(event) => toggleGear(event, gear)}
											/>
										</label>
									</div>
								</li>
							{/each}
						</ul>
					</div>

					<button
						on:click={() => handleClick(minValue, maxValue, selectedTypes, selectedFuelTypes)}
						class="btn btn-circle flex bg-orange-600 text-lg font-bold text-slate-800 hover:bg-orange-700 sm:mt-0 sm:flex-none"
					>
						<MagnifyingGlass size={22} weight="bold" />
					</button>
				</div>
				{#if cars.length == 0 && showText === true}
					<h4
						class="mb-4 mt-5 max-w-2xl text-3xl font-extrabold leading-none tracking-tight sm:text-wrap md:text-5xl xl:text-6xl dark:text-white"
					>
						Sorry we currently don't have the cars by this filter
						<h4>:(</h4>
					</h4>
				{/if}
			</div>
		</div>
		<div class="p-5 sm:p-10">
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
								username={data.username}
								registration={car.registration}
								usage={car.usage}
							/>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</section>
</div>

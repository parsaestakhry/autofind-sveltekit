<script lang="ts">
	// @ts-nocheck
	import type { Car } from '$lib/server/GetCars';
	import nissan from '../../../assets/images/pngimg.com - nissan_PNG52.png';
	import ArrowDown from 'phosphor-svelte/lib/ArrowDown';
	import ArrowUp from 'phosphor-svelte/lib/ArrowUp';
	import 'car-makes-icons/dist/style.css';
	import M5 from '../../../assets/images/BMW-M5-PNG-Image.png';
	import Card from '../../../components/Card.svelte';
	import CarProfile from 'phosphor-svelte/lib/CarProfile';
	let flag = false;
	function toggleArrow() {
		flag = !flag;
	}
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

	let makeChoice = '';
	let modelChoice = '';
	let cars: Car[] = [];
	let showText = false;

	async function handleClickMake(name: string) {
		showText = true;
		makeChoice = name;
		const response = await fetch('/api/make-model', {
			method: 'POST',
			body: JSON.stringify({ makeChoice }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		cars = await response.json();
		//console.log(data)
	}

	async function HandleClickModel(model:string){
		modelChoice = model;
		
	}
</script>

<div>
	<section class="bg-white dark:bg-gray-900 min-h-screen">
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
				>
					Choose the make and the model
				</h1>
				<p
					class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
				>
					you can also specify the year and the engine and more!
				</p>

				<!-- Open the modal using ID.showModal() method -->
				<button
					class="btn m-1 bg-orange-600 text-slate-800 text-xl font-bold hover:bg-orange-700"
					onclick="my_modal_5.showModal()"
					>Made By {makeChoice}
				</button>

				{#if cars.length > 0}
					<button
						class="btn m-1 bg-orange-600 text-slate-800 text-xl font-bold hover:bg-orange-700"
						onclick="my_modal_5.showModal()"
						>The Model  {modelChoice}
					</button>
					<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
						<div class="modal-box">
							<h3 class="font-bold mb-5 text-2xl">Models List :</h3>
							<ul
								class="menu dropdown-content bg-orange-600 rounded-box z-[1] p-2 shadow space-y-2"
							>
								{#each cars as car}
									{#if car.make === makeChoice}
										
										<button
											class="btn text-lg text-slate-200 font-semibold"
											onclick="my_modal_5.close()"
											on:click={() =>  HandleClickModel(car.model)}
										>
											{car.model}
										</button>
									{/if}
								{/each}
							</ul>
							<p class="py-4">Press ESC key or click the button below to close</p>
							<div class="modal-action">
								<form method="dialog">
									<!-- if there is a button in form, it will close the modal -->
									<button class="btn">Close</button>
								</form>
							</div>
						</div>
					</dialog>
				{/if}

				<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
					<div class="modal-box">
						<h3 class="font-bold mb-5 text-2xl">Manufacturers List :</h3>
						<ul class="menu dropdown-content bg-orange-600 rounded-box z-[1] p-2 shadow space-y-2">
							{#each makeList as make}
								<button
									class="btn text-lg text-slate-200 font-semibold"
									on:click={() => handleClickMake(make.name)}
									onclick="my_modal_5.close()"
								>
									{make.name}
								</button>
							{/each}
						</ul>
						<p class="py-4">Press ESC key or click the button below to close</p>
						<div class="modal-action">
							<form method="dialog">
								<!-- if there is a button in form, it will close the modal -->
								<button class="btn">Close</button>
							</form>
						</div>
					</div>
				</dialog>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
				<img src={M5} alt="mockup" />
			</div>
			{#if showText && cars.length > 0}
				<h4
					class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white sm:text-nowrap mt-5"
				>
					All the cars made by {makeChoice}
				</h4>
			{/if}
			{#if cars.length == 0 && showText == true}
				<h4
					class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white sm:text-wrap mt-5"
				>
					Sorry we currently don't have any cars made by {makeChoice}
					<h4>:(</h4>
				</h4>
			{/if}
		</div>
		<div class="p-10">
			{#if cars && cars.length > 0}
				<ul class="flex flex-wrap justify-center">
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
							/>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</section>
</div>

<script lang="ts">
	// @ts-nocheck

	export let data;

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
</script>

<div class="">
	{#if data.username}
		<section class="min-h-screen bg-white dark:bg-gray-900">
			<div class="mx-auto max-w-2xl px-4 py-8 lg:py-16">
				<form method="POST" enctype="multipart/form-data">
					<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div class="sm:col-span-2">
							<label
								for="model"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Username</label
							>
							<input
								type="text"
								name="username"
								id="username"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 mb-5 block w-full rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="username"
								value={data.username}
								required={true}
							/>
							<label
								for="model"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Registration</label
							>
							<input
								type="text"
								name="registration"
								id="registration"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 mb-5 block w-full rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="registration"
								required={true}
							/>
							<label
								for="make"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Manufacturer
							</label>
							<select
								name="make"
								id="make"
								class="border-none-gray-300 focus:ring-primary-500 focus:border-none-primary-500 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							>
								<option>Select category</option>
								{#each makeList as make}
									<option>{make.name}</option>
								{/each}
							</select>
						</div>
						<div class="w-full">
							<label
								for="model"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Model</label
							>
							<input
								type="text"
								name="model"
								id="model"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="Product brand"
								required={true}
							/>
						</div>
						<div class="w-full">
							<label
								for="price"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
							>
								Initial Price</label
							>
							<input
								type="number"
								name="price"
								id="price"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="$2999"
								required={false}
							/>
						</div>
						<div class="w-full">
							<label
								for="color"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Color</label
							>
							<input
								type="text"
								name="color"
								id="color"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="Blue"
								required={true}
							/>
						</div>
						<div>
							<label
								for="type"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Chasis Type</label
							>
							<select
								name="chasis"
								id="type"
								class="border-none-gray-300 focus:ring-primary-500 focus:border-none-primary-500 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							>
								<option selected={false}>Select category</option>
								<option value="Hatchback">Hatchback</option>
								<option value="Sedan">Sedan</option>
								<option value="Coupe">Coupe</option>
								<option value="Wagon">Wagon</option>
								<option value="Truck">Truck</option>
							</select>
						</div>
						<div>
							<label
								for="fuel"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Fuel Type</label
							>
							<select
								name="fuel"
								id="fuel"
								class="border-none-gray-300 focus:ring-primary-500 focus:border-none-primary-500 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							>
								<option selected={false}>Select category</option>
								<option value="Gas">Gas</option>
								<option value="Diesel">Diesel</option>
								<option value="Hybrid">Hybrid</option>
								<option value="Electric">Electric</option>
							</select>
						</div>
						<div>
							<label
								for="engine"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Engine Model</label
							>
							<select
								name="engine"
								id="engine"
								class="border-none-gray-300 focus:ring-primary-500 focus:border-none-primary-500 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							>
								<option selected={false}>Select category</option>
								<option value="I3">Inline-3</option>
								<option value="I4">Inline-4</option>
								<option value="I5">Inline-5</option>
								<option value="I6">Inline-6</option>
								<option value="V6">V6</option>
								<option value="V8">V8</option>
								<option value="V10">V10</option>
								<option value="V12">V12</option>
								<option value="W12">W12</option>
								<option value="W16">W16</option>
							</select>
						</div>
						<div>
							<label
								for="milage"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Milage</label
							>
							<input
								type="number"
								name="milage"
								id="milage"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="1000"
								required={true}
							/>
						</div>
						<div>
							<label
								for="year-make"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Year Make</label
							>
							<input
								type="number"
								name="year"
								id="year-make"
								class="border-none-gray-300 focus:ring-primary-600 focus:border-none-primary-600 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="2012"
								required={true}
							/>
						</div>
						<div class="sm:col-span-2">
							<label
								for="transmission"
								class="mb-2 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Transmission</label
							>
							<select
								name="transmission"
								id="transmission"
								class="border-none-gray-300 focus:ring-primary-500 focus:border-none-primary-500 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							>
								<option selected={false}>Select category</option>
								<option value="Manual">Manual</option>
								<option value="Automatic">Automatic</option>
							</select>
							<label
								for="description"
								class="mb-2 mt-8 block text-2xl font-extrabold text-gray-900 dark:text-white"
								>Description</label
							>
							<textarea
								name="description"
								id="description"
								rows="8"
								class="border-none-gray-300 focus:ring-primary-500 focus:border-none-primary-500 dark:border-none-gray-600 dark:focus:ring-primary-500 dark:focus:border-none-primary-500 block w-full rounded-lg border-none bg-gray-50 p-2.5 text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
								placeholder="Your description here"
							></textarea>

							<div class="mt-10 flex w-full items-center justify-center">
								<label
									for="dropzone-file"
									class=" flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-lg font-bold hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
								>
									Front Side Image
									<div class="flex flex-col items-center justify-center pb-6 pt-5">
										<svg
											class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
											aria-hidden="false"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 16"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
											/>
										</svg>
										<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
											<span class="font-semibold">Click to upload</span> or drag and drop
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											SVG, PNG, JPG (MAX. 800x400px)
										</p>
									</div>
									<input
										name="front-image"
										id="dropzone-file"
										type="file"
										class="hidden"
										required
									/>
								</label>
							</div>
						</div>
					</div>
					<button
						type="submit"
						class=" bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 mt-4 inline-flex items-center rounded-lg bg-orange-600 px-5 py-2.5 text-center text-2xl font-extrabold text-slate-800 focus:ring-4 sm:mt-6"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	{:else}
		<div role="alert" class="alert min-h-screen text-5xl">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="h-10 w-10 shrink-0 stroke-info"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span>Please Login in order to Submit your vehicle </span>
			<div>
				<a href="/login" class="btn btn-primary btn-sm">Login</a>
			</div>
		</div>
	{/if}
</div>

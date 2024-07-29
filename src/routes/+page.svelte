<script>
	import intropic from '../assets/images/intro-pic.jpg';
	import Carousel from '../components/Carousel.svelte';
	import CarProfile from 'phosphor-svelte/lib/CarProfile';
</script>

<div class="min-h-screen ">
	<div class="relative h-80 sm:h-80">
		<img class="h-full w-screen object-cover object-right " src={intropic} alt="family-car" />
		<div class="absolute inset-0 ml-5 items-center justify-start font-bold">
			<h1 class="mt-16 text-6xl  text-slate-50 sm:mt-20 sm:text-7xl">
				Your Next Car is Here.</h1>
			<div class="mr-20 mt-3 flex-col items-end justify-end space-y-2 sm:hidden">
				<a
					href="/buy"
					class="btn border-none bg-orange-600 text-xl font-bold text-slate-900 hover:bg-orange-600"
				>
					Buy a Car
				</a>
				<a
					href="/sell"
					class="btn border-none bg-orange-600 text-xl font-bold text-slate-900 hover:bg-orange-600"
				>
					Sell My Car
				</a>
			</div>
			<div class="-mt-10 mr-20 hidden flex-col items-end justify-end space-y-3 sm:flex">
				<a
					href="/buy"
					class="h-18 btn w-48 border-none bg-orange-600 text-2xl font-bold text-slate-900 hover:bg-orange-700"
				>
					Buy a Car
				</a>
				<a
					href="/sell"
					class="h-18 btn w-48 border-none bg-orange-600 text-2xl font-bold text-slate-900 hover:bg-orange-700"
				>
					Sell my Car
				</a>
			</div>
		</div>
	</div>
	<div class="mt-6 flex items-center justify-center sm:space-x-4">
		<div class="mx-10 justify-center text-center sm:mr-10">
			<CarProfile class="mx-auto" size={72} color="#fafafa" />
			<h2 class="mb-3 text-3xl font-bold text-slate-50">We have what you are looking  for.</h2>
		</div>
	</div>
	<Carousel />
</div>

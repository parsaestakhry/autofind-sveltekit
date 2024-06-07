<script>
	import intropic from '../assets/images/intro-pic.jpg';
	import Carousel from '../components/Carousel.svelte';
</script>

<div class="relative w-screen sm:h-64 h-80 overflow-hidden">
	<img class="object-cover object-center w-full h-full" src={intropic} alt="family-car" />
	<div class="absolute inset-0 font-bold items-center justify-start ml-5">
		<h1 class="text-white sm:text-7xl sm:mt-14 text-6xl mt-16">Your Next Car is Here.</h1>
        <div class="sm:hidden justify-end flex-col items-end mr-20 mt-3 space-y-2 ">
			<button
				class="btn  text-slate-50 text-xl bg-orange-500 hover:bg-orange-600 border-none font-bold"
				>Buy a Car</button
			>
			<button
				class="btn  text-slate-50 text-xl bg-orange-500 hover:bg-orange-600 border-none font-bold"
				>Sell My Car</button
			>
		</div>
		<div class="sm:flex justify-end flex-col items-end mr-20 -mt-10 space-y-3 hidden">
			<button
				class="btn w-48 h-18 text-slate-50 text-3xl bg-orange-500 hover:bg-orange-600 border-none font-bold"
				>Buy a Car</button
			>
			<button
				class="btn w-48 h-18 text-slate-50 text-3xl bg-orange-500 hover:bg-orange-600 border-none font-bold"
				>Sell My Car</button
			>
		</div>
	</div>
</div>

<Carousel/>

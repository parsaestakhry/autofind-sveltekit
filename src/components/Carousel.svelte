<script>
	import CarouselCard from './CarouselCard.svelte';
	import hatchback from '../assets/images/hatchback.jpg';
	import coupe from '../assets/images/coupe.jpg';
	import sedan from '../assets/images/sedan.jpg';
	import wagon from '../assets/images/wagon.jpg';
	import truck from '../assets/images/truck.jpg';
	import carKey from '../assets/svg/car-key-svgrepo-com.svg';
</script>

<div class="carousel carousel-center p-3 space-x-4 bg-ghost rounded-box flex sm:mx-20">
	<div class="flex space-x-4">
		<div class="carousel-item">
			<CarouselCard name={'Hatchback'} pic={hatchback} />
		</div>
		<div class="carousel-item">
			<CarouselCard name={'Sedan'} pic={sedan} />
		</div>
		<div class="carousel-item">
			<CarouselCard name={'Coupe'} pic={coupe} />
		</div>
		<div class="carousel-item">
			<CarouselCard name={'Wagon'} pic={wagon} />
		</div>

		<div class="carousel-item">
			<CarouselCard name={'Truck'} pic={truck} />
		</div>
	</div>
</div>

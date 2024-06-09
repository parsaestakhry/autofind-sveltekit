<script>
    export let data;
	import hatchback from '../../../../assets/images/longhatch.jpg'
	import sedan from '../../../../assets/images/longsedan.jpg'
	import coupe from '../../../../assets/images/longcoupe.jpg'
	import truck from '../../../../assets/images/longtruck.jpg'
	import wagon from '../../../../assets/images/longwagon.jpg'
	let pic = "";
	switch (data.slug) {
		case "hatchback" : pic = hatchback 
		break
		case "sedan" : pic = sedan 
		break
		case "coupe" : pic = coupe 
		break
		case "truck" : pic = truck 
		break
		case "wagon" : pic = wagon 
		break
	} 

</script>
<div class="relative sm:h-64 h-80">
	<img class="object-cover object-center w-screen h-28  sm:h-72" src={pic} alt="family-car" />
	<div class="absolute inset-0 font-bold  text-center ">
		<h1 class="text-white sm:text-7xl  text-5xl mt-10 sm:mt-16">{data.slug.toUpperCase()}S</h1>
	</div>
</div>
<script>
	import AccountCard from "../../../components/AccountCard.svelte";
	import panamera from '../../../assets/images/panamera.jpg'
	import rs from '../../../assets/images/rs.jpg'
	import gt3 from '../../../assets/images/gt3.jpg'
	export let data;
</script>

<div class="min-h-screen bg-gray-900">
	<div class=" py-10 text-center text-7xl font-extrabold text-slate-50">
		Hello {data.username}
	</div>
	<div class="flex justify-center mt-20 sm:space-x-10 flex-wrap  py-10 " >
		<AccountCard image={panamera} headText={"Add your own car"} paragraph={'so it can join our variety of cars'} button={'Add Now'} link={'/sell'} />
		<AccountCard image={rs} headText={"Find your next car"} paragraph={'so it can join your garage'} button={'Buy Now'} link={'/buy'} />
		<AccountCard image={gt3} headText={"Check out your cars"} paragraph={"see how well they're doing "} button={'Check Out!'} link={`/user/${data.username}/cars`} />
	</div>
</div>

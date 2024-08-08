<script>
    import { Money } from "phosphor-svelte";
    export let userBid;
    export let amount;
</script>


<div role="alert" class="alert bg-inherit text-slate-50 border-4 border-orange-600 font-extrabold text-xl mt-2 ">
    <Money size={30} weight='bold' />
  <span>Bid by : {userBid} for Amount of  : {amount}$ </span>
</div>
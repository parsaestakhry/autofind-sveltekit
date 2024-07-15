<script>
	import TableHeader from "../../../../components/TableHeader.svelte";
    import Hero from '../../../../components/Hero.svelte'
    export let data;
    const make = data.make
</script>


<div>
    <Hero header={make} />
</div>


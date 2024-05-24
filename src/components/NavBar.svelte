<script>
	import Drawer from "./Drawer.svelte";
  import  CarBattery  from "phosphor-svelte/lib/CarBattery";
</script>
<div class="navbar bg-black rounded-md">
  <div class="flex-none">
    <Drawer/>
  </div>
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl font-sans text-slate-100">Autofind <CarBattery size={25} class="mt-1"/><div>
      
    </div> </a>
    
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
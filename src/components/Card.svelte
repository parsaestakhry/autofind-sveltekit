<script>
    export let model;
    export let make;
    export let milage;
    export let color;
    export let fuel_type;
    export let year_make;
</script>




<div class="card w-96 glass mx-2 mb-2 ">
  <figure><enhanced:img src="" alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title text-slate-50 text-2xl">{make}</h2>
    <h3 class=" text-slate-50 text-xl">{model}</h3>
    <div class="">
        <div class="badge bg-slate-100 border-none text-black"> milage : {milage} </div>
        <div class="badge bg-slate-100 border-none text-black"> year : {year_make} </div>
        <div class="badge bg-blue-400 border-none text-black"> color : {color} </div>
        <div class="badge bg-slate-100 border-none text-black"> fuel : {fuel_type} </div>
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">check it out!</button>
    </div>
  </div>
</div>
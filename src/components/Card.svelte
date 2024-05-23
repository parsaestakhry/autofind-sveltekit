
<script lang="ts">
    export let model;
    export let make;
    export let milage;
    export let color;
    export let fuel_type;
    export let year_make;

    
    let carImage : string
    

    // Dynamically import the image based on the make
    import(`../assets/images/${make}.jpg`)
        .then(image => {
            carImage = image.default;
        })
        .catch(error => {
            console.error(`Failed to load image for make '${make}':`, error);
            // Handle error, for example, by setting a default image
            carImage = '../assets/images/default.jpg';
        });
</script>




<div class="card w-96 glass mx-2 mb-2 ">
  <figure><img src={carImage} alt={make}/></figure>
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
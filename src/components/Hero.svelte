<script>
    export let header
    import skytop from '../assets/images/skytop.jpg'
</script>

<div
  class="hero h-96"
  style="background-image: url({skytop});">
  <div class="hero-overlay bg-opacity-70"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold text-slate-100">{header} is a Great taste!</h1>
      <p class="mb-5 text-slate-200 text-lg font-bold">
        now it's time to find what model you like:
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
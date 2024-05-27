<script>
    import List from 'phosphor-svelte/lib/List'
</script>


<div class="drawer z-50">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-ghost drawer-button"><List size={22}/></label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-96 min-h-full bg-base-200 text-base-content space-y-2">
      <li><a class="button btn-ghost bg-black" href="/register">Register</a></li>
      <li><a class="button btn-ghost bg-black" href="/login">Login</a></li>       
    </ul>
  </div>
</div>
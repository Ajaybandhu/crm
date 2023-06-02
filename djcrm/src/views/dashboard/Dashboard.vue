<template>
  <div>
    <h1>My Dashboard</h1>
    <div class="dashboard_container">
      <div class="dashboard_menu">
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </div>
      <div class="dashboard_content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

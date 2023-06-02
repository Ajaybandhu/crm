<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <strong>ZoHo CRM</strong>
      </router-link>
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/leads" class="navbar-item">Leads</router-link>
      <router-link to="/contacts" class="navbar-item">Contacts</router-link>
      <router-link to="/account" class="navbar-item">Accounts</router-link>
      <router-link to="/deals" class="navbar-item">Deals</router-link>
      <router-link to="/tasks" class="navbar-item">Tasks</router-link>
      <router-link to="/meetings" class="navbar-item">Meetings</router-link>
      <router-link to="/calls" class="navbar-item">Calls</router-link>
      <router-link to="/reports" class="navbar-item">Reports</router-link>
      <router-link to="/service" class="navbar-item">Service</router-link>
      <router-link to="/projects" class="navbar-item">Projects</router-link>

    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/sign-up " class="button is-success">
              <strong>Sign up</strong>
            </router-link>
            <router-link to="/log-in " class="button is-light">
              Log in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

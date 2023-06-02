<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <strong>ZoHo CRM</strong>
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <template v-if="$store.state.isAuthenticated">
      
        
          <router-link to="/dashboard/my-account" class="navbar-item"
            >Home
          </router-link>
          <router-link to="/dashboard" class="navbar-item"
            >Dashboard
          </router-link>
       
          <router-link to="/dashboard/leads" class="navbar-item"
            >Organization
          </router-link>
          <router-link to="/dashboard/my-account" class="navbar-item"
            >Myaccount
          </router-link>
          <router-link to="/dashboard/my-account" class="navbar-item"
            >Contacts </router-link
          ><router-link to="/dashboard/my-account" class="navbar-item"
            >Deals </router-link
          ><router-link to="/dashboard/my-account" class="navbar-item"
            >Tasks
          </router-link>
          <router-link to="/dashboard/my-account" class="navbar-item"
            >Meetings </router-link
          ><router-link to="/dashboard/my-account" class="navbar-item"
            >Calls
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>
            <div class="navbar-dropdown">
              <router-link to="/dashboard/my-account" class="navbar-item"
                >Reports
              </router-link>
              <router-link to="/dashboard/my-account" class="navbar-item"
                >Services
              </router-link>
              <router-link to="/dashboard/my-account" class="navbar-item"
                >Projects
              </router-link>

              <router-link to="/dashboard/my-account" class="navbar-item"
                >Analytics
              </router-link>
              <router-link to="/dashboard/my-account" class="navbar-item"
                >Products </router-link
              ><router-link to="/dashboard/my-account" class="navbar-item"
                >Quotes </router-link
              ><router-link to="/dashboard/my-account" class="navbar-item"
                >Sales Orders </router-link
              ><router-link to="/dashboard/my-account" class="navbar-item"
                >Purchase Orders </router-link
              ><router-link to="/dashboard/my-account" class="navbar-item"
                >Invoices
              </router-link>
              <router-link to="/dashboard/my-account" class="navbar-item"
                >Salesslnbox </router-link
              ><router-link to="/dashboard/my-account" class="navbar-item"
                >Campaigns </router-link
              ><router-link to="/dashboard/my-account" class="navbar-item"
                >Venders
              </router-link>
              <router-link to="/dashboard/my-account" class="navbar-item"
                >Price Books
              </router-link>
              <router-link to="/dashboard/my-account" class="navbar-item"
                >cases
              </router-link>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div>
            <button @click="logout()" class="button is-danger">Log out</button>
          </div>
        </template>
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="!$store.state.isAuthenticated">
              <router-link to="/sign-up " class="button is-success">
                <strong>Sign up</strong>
              </router-link>
              <router-link to="/log-in " class="button is-light">
                Log in
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
    };
  },
  methods: {

    async logout() {

    
      await axios
        .post("http://127.0.0.1:8000/api/v1/token/logout")
        .then((response) => {
          console.log("Logged out");
        })
        

        .catch((error) => {
          console.log(JSON.stringify(error));
        });

      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      this.$store.commit("removeToken");

      this.$router.push("/");
    },
  },
};
</script>

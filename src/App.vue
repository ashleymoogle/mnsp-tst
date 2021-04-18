<template>
  <div id="header">
    <img src="./assets/logo.svg" alt="logo" />
  </div>
  <div id="nav">
    <router-link to="/" class="w-1/3">
      <div class="nav-tab">
        <span class="material-icons">
          home
        </span>
        <div>Home</div>
      </div>
    </router-link>
    <router-link to="/transfers" class="w-1/3">
      <div class="nav-tab">
        <span class="material-icons">
          swap_horiz
        </span>
        <div>Transfers</div>
      </div>
    </router-link>
    <router-link to="/recipients" class="w-1/3">
      <div class="nav-tab">
        <span class="material-icons">
          people
        </span>
        <div>Recipients</div>
      </div>
    </router-link>
  </div>
  <router-view/>
  <div id="footer">
    <img src="./assets/logo-footer.svg" class="mb-2" alt="logo" />
    <img src="./assets/madein.svg" alt="logo" />
  </div>
</template>

<style lang="scss">
@import './styles/globals';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 100px;
  @apply flex justify-center items-center;
}

#footer {
  height: 120px;
  @apply flex flex-col justify-center items-center bg-indigo-500 w-full fixed bottom-0;
}

#nav {
  @apply flex justify-between mb-6 overflow-hidden;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      margin-top:5px;
      @apply text-indigo-500;
      box-shadow: 1px 1px 10px 0 rgba(0,0,0,0.3);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &:not(.router-link-exact-active) {
      opacity: 0.7;
      box-shadow: inset 0px -2px 4px -4px rgba(0, 0, 0, 0.3);
    }
  }
  .nav-tab {
    @apply p-5 flex-col justify-center items-center;
  }
}

</style>

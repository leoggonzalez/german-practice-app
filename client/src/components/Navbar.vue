<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__logo">German Practice App</div>
      <ul class="navbar__links">
        <li class="navbar__link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navbar__link">
          <router-link to="/words">Words</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  background-color: var(--primary);
  color: white;

  .container {
    height: 40px;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  &__links {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__link {
    &:not(:last-child) {
      margin-right: 16px;
    }
    &:hover {
      a {
        color: var(--secondary);
      }
    }
  }
}
</style>

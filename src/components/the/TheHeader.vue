<script lang="ts" setup>
import MENU from '@/constants/menu'
import BaseLogo from '../base/BaseLogo.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <BaseLogo class="header__logo" />
        <nav class="header__menu">
          <ul class="menu-list">
            <li class="menu-list__item text_h3" v-for="item in MENU" :key="item.id">
              <RouterLink
                class="menu-list__link"
                :activeClass="'menu-list__link_active'"
                :to="item.path"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  height: 76px;
  padding: 24px 0;
  box-shadow: 0 1px 0 0 rgb(17 17 17 / 10%);

  &__inner {
    display: grid;
    grid-template-columns: max-content 1fr;
  }

  &__logo {
    width: 93px;
    height: 29px;
  }
}

.menu-list {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: $gray;

    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}

.menu-list__link {
  transition: color $transitionDuration;

  &_active {
    color: $deepSkyBlue;
  }
}
</style>

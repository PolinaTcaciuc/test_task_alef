<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import BaseButton from '../base/BaseButton.vue'
import ChildData from './ChildData.vue'

const { parentData } = storeToRefs(useUserStore())
const { addChild } = useUserStore()
</script>

<template>
  <form @submit.prevent class="child-form">
    <div class="child-form__top">
      <span class="child-form__title text_h2_m"> Дети &#40;макс. 5&#41; </span>
      <BaseButton
        v-if="parentData.children.length < 5"
        @click="addChild"
        class="parent-form__btn"
        :type="'outline'"
      >
        <template #prepend>
          <BaseIcon :size="'16px'" :icon="'add'" />
        </template>
        Добавить ребенка
      </BaseButton>
    </div>
    <TransitionGroup
      appear
      name="list"
      tag="ul"
      v-if="parentData.children.length > 0"
      class="child-form__list"
    >
      <li class="child-form__list-item" v-for="(child, idx) in parentData.children" :key="child.id">
        <ChildData :childIdx="idx" :child="child" />
      </li>
    </TransitionGroup>
  </form>
</template>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: transform $transitionDuration ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.list-leave-active {
  position: absolute;
  z-index: -1;
  width: 100%;
}

.child-form {
  position: relative;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__title {
    display: inline-block;
  }

  &__input {
    &:last-child {
      margin-bottom: 33px;
    }
  }

  &__btn {
    width: max-content;
    margin-left: auto;
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-bottom: 30px;
  }
}
</style>

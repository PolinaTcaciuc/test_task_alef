<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import BaseInput from '../base/BaseInput.vue'
const { parentData } = storeToRefs(useUserStore())
</script>

<template>
  <form @submit.prevent class="parent-form">
    <span class="parent-form__title text_h2_m">Персональные данные</span>
    <div class="parent-form__fields-box">
      <BaseInput
        class="parent-form__input"
        :name="'name'"
        :placeholder="'Имя'"
        :input-autocomplete="'given-name'"
        v-model="parentData.name"
      />
      <BaseInput
        class="parent-form__input"
        :name="'age'"
        :placeholder="'Возраст'"
        :type="'text'"
        v-model="parentData.age"
        pattern="\d*"
        maxlength="2"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.parent-form {
  &__title {
    display: inline-block;
    margin-bottom: 20px;
  }

  &__fields-box {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>

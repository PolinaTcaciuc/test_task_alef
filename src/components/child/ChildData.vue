<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import type IChild from '@/types/IChild'
import { storeToRefs } from 'pinia'
import BaseInput from '../base/BaseInput.vue'
const { deleteChildById } = useUserStore()
const { parentData } = storeToRefs(useUserStore())
defineProps<{
  child: IChild
  childIdx: number
}>()
</script>

<template>
  <div class="child-data">
    <div class="child-data__input">
      <BaseInput
        v-model="parentData.children[childIdx].name"
        :name="'name'"
        :input-autocomplete="'given-name'"
        :placeholder="'Имя'"
      />
    </div>
    <div class="child-data__input">
      <BaseInput
        class="child-data__input"
        v-model="parentData.children[childIdx].age"
        :name="'age'"
        :placeholder="'Bозраст'"
        :type="'text'"
        pattern="\d*"
        maxlength="2"
      />
    </div>
    <button class="child-data__delete" @click="deleteChildById(child.id)">Удалить</button>
  </div>
</template>

<style lang="scss" scoped>
.child-data {
  display: flex;
  column-gap: 18px;
  justify-content: space-between;

  &__input {
    width: 100%;
  }

  &__delete {
    color: $deepSkyBlue;
  }
}
</style>

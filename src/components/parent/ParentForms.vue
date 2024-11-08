<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import BaseButton from '../base/BaseButton.vue'
import ChildForm from '../child/ChildForm.vue'
import ParentForm from '../parent/ParentForm.vue'
const { saveParentData } = useUserStore()
</script>

<template>
  <div class="parent-forms">
    <ParentForm class="parent-forms__parent" />
    <ChildForm />
    <BaseButton class="save-btn" :type="'base'" @click="saveParentData">Сохранить</BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.parent-forms {
  &__parent {
    margin-bottom: 36px;
  }
}
</style>

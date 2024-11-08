<script lang="ts" setup>
defineProps<{
  type: 'base' | 'outline'
}>()
</script>

<template>
  <button class="base-button" :class="[`base-button_${type}`]">
    <div v-if="$slots.prepend" class="prepend">
      <slot name="prepend" />
    </div>
    <slot />
    <div v-if="$slots.append" class="append">
      <slot name="append" />
    </div>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: $deepSkyBlue;
  cursor: pointer;
  border-radius: 200px;

  &_base {
    color: $white;
    background-color: $deepSkyBlue;
  }

  &_outline {
    background-color: transparent;
    border: 1px solid $deepSkyBlue;
  }
}

.prepend {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.append {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
</style>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { onMounted, ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})
interface Props {
  placeholder: string
  type?: string
  inputAutocomplete?: string
  name: string
}

withDefaults(defineProps<Props>(), {
  inputAutocomplete: undefined,
  type: 'text',
})

const id = ref('')
onMounted(() => {
  id.value = nanoid()
})

const model = defineModel()
</script>

<template>
  <div class="base-input">
    <input
      :id="id"
      :type="type"
      v-model="model"
      :name="name"
      :autocomplete="inputAutocomplete"
      placeholder=" "
      v-bind="$attrs"
      class="base-input__input text_h3"
    />
    <label class="base-input__label text_h3">{{ placeholder }}</label>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  position: relative;
  display: flex;
  gap: 8px;
  height: 56px;
  border: 1px solid $whiteSmoke;
  border-radius: 4px;

  &__input {
    width: 100%;
    padding: 16px;
    outline: none;
    transition: border-color $transitionDuration;

    &::placeholder {
      color: transparent;
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    color: $gray;
    pointer-events: none;
    transition: transform $transitionDuration;
    transform: translateY(-50%) translateX(16px);
    will-change: left;
  }

  transition: box-shadow $transitionDuration;

  &:hover {
    box-shadow:
      0 4px 56px rgb(51 51 51 / 16%),
      0 4px 4px rgb(51 51 51 / 4%);
  }
}

.base-input__input:not(:placeholder-shown) + .base-input__label,
.base-input__input:focus + .base-input__label {
  transform: translateY(-100%) translateX(11px) scale(0.9);
}

.base-input__input:focus,
.base-input__input:not(:placeholder-shown) {
  padding-bottom: 0;
}
</style>

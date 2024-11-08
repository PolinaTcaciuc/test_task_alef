<script lang="ts" setup>
import type IChild from '@/types/IChild'

defineProps<{
  child: IChild
}>()
</script>

<template>
  <article v-if="child.name && child.age" class="child-info text_h2_b">
    <span class="child-info__name">{{ child.name }},&nbsp;</span>
    <span class="child-info__age">{{ child.age }}</span>
  </article>
</template>

<style lang="scss" scoped>
.child-info {
  width: max-content;
  padding: 10px 20px;
  background-color: $whiteSmoke;
}
</style>

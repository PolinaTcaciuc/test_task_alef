<script setup lang="ts">
import ChildInfo from '@/components/child/ChildInfo.vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const { savedParentData } = storeToRefs(useUserStore())
</script>

<template>
  <section class="preview">
    <div class="container_content">
      <h2 class="text_h2_m preview__title">Персональные данные</h2>
      <div
        class="empty-info empty-info_parent"
        v-if="!savedParentData || !savedParentData.name || !savedParentData.age"
      >
        Данные о родителе отсутствуют либо не до конца заполнены
      </div>
      <div
        v-if="savedParentData && savedParentData.name && savedParentData.age"
        class="preview-data-parent text_h2_b"
      >
        <div class="preview-data-parent__name">
          {{ savedParentData.name }}
        </div>
        <div class="preview-data-parent__age">&#44;&nbsp;{{ savedParentData.age }}</div>
      </div>
      <div class="preview-data">
        <div
          v-if="savedParentData && savedParentData.children.length"
          class="preview-data-children"
        >
          <div class="preview-data-children__title text_h2_m">Дети</div>
          <ul class="preview-data-children__list">
            <li
              class="preview-data-children__item"
              v-for="child in savedParentData.children"
              :key="child.id"
            >
              <ChildInfo :child="child" />
            </li>
          </ul>
        </div>
        <div class="empty-info" v-else>Информация о детях отсутствует</div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.preview {
  padding: 30px 0;

  &__title {
    margin-bottom: 20px;
  }
}

.preview-data {
  &__parent {
    display: inline-block;
    margin-bottom: 60px;
  }
}

.preview-data-parent {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}

.preview-data-children {
  &__title {
    display: inline-block;
    margin-bottom: 20px;
  }
}

.preview-data-children__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.empty-info {
  &_parent {
    margin-bottom: 24px;
  }
}
</style>

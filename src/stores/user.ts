import type IParent from '@/types/IParent'
import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  /**
   * Исходный объект родителе
   */
  const parentData: IParent = reactive({
    name: '',
    age: null,
    children: [],
  })

  /**
   * Хранение данных о родителе для страницы превью
   */
  const savedParentData = ref<IParent | null>(null)

  /**
   * Функция по добавлению ребенка
   */
  const addChild = () => {
    if (parentData.children.length < 5) {
      parentData.children.push({ name: '', age: null, id: nanoid() })
    }
  }

  /**
   * Функция по удалению ребенка
   * @param id идентификатор ребенка
   */
  const deleteChildById = (id: string) => {
    const childIndex = parentData.children.findIndex((c) => c.id === id)
    if (childIndex !== -1) {
      parentData.children.splice(childIndex, 1)
    }
  }
  /**
   * Функция для сохранения данных и обновления их для страницы превью
   */
  const saveParentData = () => {
    parentData.children = parentData.children.filter((c) => c.name && c.age)
    savedParentData.value = JSON.parse(JSON.stringify(parentData))
  }

  return { parentData, savedParentData, addChild, deleteChildById, saveParentData }
})

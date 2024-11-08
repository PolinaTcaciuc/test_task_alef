import type IChild from './IChild'

export default interface IParent {
  name: string
  age: number | null
  children: Array<IChild>
}

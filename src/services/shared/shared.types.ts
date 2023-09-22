export type PartialLoadItem<T> = {
  item: T
  index: number
  total: number
}

export type CardElementSchema = {
  name: string
  label: string
  required?: boolean
  pattern?: string
}

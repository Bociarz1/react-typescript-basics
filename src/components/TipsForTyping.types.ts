// 1. file to define your types
export type TipsForTypingProps = {
  value: number
  id: number
}

// 2. you can reusing types inside other types
export type ExampleType = {
  example: TipsForTypingProps
}
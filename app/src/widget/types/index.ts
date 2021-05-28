export interface Item {
  id: number
  type: string
  by: string
  kids: number[]
}

export interface Story extends Item {
  type: 'story'
  title: string
}

export interface Comment extends Item {
  type: 'comment'
  text: string
}

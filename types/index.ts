export type Tags = {
  name: string,
  color: string
}
export type Works = {
  id: number,
  name: string,
  description: string,
  top_image: string,
  detail_image: string,
  tags: Tags[],
  link: string | null
}

export type Skill = {
  contents: {
    name: string,
    tools: string[]
  }[]
}
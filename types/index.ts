export type Works = {
  id: number,
  name: string,
  description: string,
  top_image: string,
  detail_image: string,
  tags: {
    name: string,
    color: string
  }[],
  link: string | null
}

export type Skill = {
  contents: {
    name: string,
    tools: string[]
  }[]
}
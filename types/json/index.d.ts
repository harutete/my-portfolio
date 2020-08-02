import { Works, Skill } from '../'

declare module '*/myWorks.json' {
  type WorksData = {
    works: Works[]
  }
  const works: WorksData
  export = works
}

declare module '*/mySkill.json' {
  const skill: Skill
  export = skill
}
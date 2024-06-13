import fs from 'fs'
import matter from 'gray-matter'

const getMarkDownContent = (folder, slug) => {
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export default getMarkDownContent

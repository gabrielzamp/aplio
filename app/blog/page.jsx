import BlogFeatures from '@/components/blogs/BlogFeatures'
import BlogGrid from '@/components/blogs/BlogGrid'
import PageHero from '@/components/heros/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'

const Blog = () => {
  const blogs = getMarkDownData('data/blogs')
  return (
    <>
      <PageHero subtitle="BLOG GRID" title="Recent blogs created <br/> by aplio" />
      <BlogFeatures featureBlog={blogs} />
      <BlogGrid blogItemData={blogs} />
    </>
  )
}

export default Blog

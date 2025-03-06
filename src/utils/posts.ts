import { getCollection } from 'astro:content';
import readingTime from 'reading-time';
import { format } from 'date-fns';

export async function getAllPosts() {
  const posts = await getCollection('blog');
  return posts
    .filter(post => post.data.publish !== false)
    .sort((a, b) => {
      return new Date(b.data.created_date).getTime() - new Date(a.data.created_date).getTime();
    })
    .map(post => ({
      ...post,
      readingTime: readingTime(post.body),
      formattedDate: format(new Date(post.data.created_date), 'MMMM dd, yyyy')
    }));
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPosts();
  return posts.filter(post => post.data.tags?.includes(tag));
}

export async function getRelatedPosts(currentPost, limit = 3) {
  const allPosts = await getAllPosts();
  
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.data.tags?.some(tag => currentPost.data.tags?.includes(tag))
    )
    .slice(0, limit);
}
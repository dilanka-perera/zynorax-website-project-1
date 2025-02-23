'use client';

import Topic from './Topic';
import MainButton from './MainButton';
import { BlogPost, useData } from '@/contexts/DataContext';
import BlogList from './blog/BlogList';
import { useEffect, useState } from 'react';

type ExtendedBlogPost = BlogPost & {
  categoryName: string;
  categorySlug: string;
};

const ExploreOurBlog: React.FC = () => {
  const { blogs, blogCollections } = useData();
  const [viewport, setViewport] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setViewport('960');
      } else if (window.innerWidth >= 640) {
        setViewport('640');
      } else {
        setViewport('0');
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define how many posts to show based on viewport size
  const postsToShow = (viewport: string, posts: ExtendedBlogPost[]) => {
    switch (viewport) {
      case '960':
        return posts.slice(0, 3);
      case '640':
        return posts.slice(0, 2);
      case '0':
      default:
        return posts.slice(0, 2);
    }
  };

  const blogSlugs = blogCollections.flatMap((collection) =>
    collection.blogs.map((blog) => blog.slug),
  );

  const categories =
    blogs.find((blog) => blog.slug === 'blog')?.categories ?? [];

  const filteredPosts = categories.flatMap((category) =>
    category.blogPosts
      .filter((post) => blogSlugs.includes(post.slug))
      .map((post) => ({
        ...post,
        categoryName: category.name,
        categorySlug: category.slug,
      })),
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    return blogSlugs.indexOf(a.slug) - blogSlugs.indexOf(b.slug);
  });

  return (
    <div className="pt-8 pb-[80px]">
      {/* Section Title */}
      <div>
        <Topic text="Explore Our Blog" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Stay updated with the latest trends, insights, and breakthroughs in
          Artificial Intelligence and Web Development.
        </p>
      </div>

      <div className="pt-6">
        <BlogList
          posts={postsToShow(viewport, sortedPosts).map((post) => ({
            slug: post.slug,
            title: post.title,
            featuredImage: post.featuredImage || 'no.png',
            publishedDate: post.publishedDate,
            category: post.categoryName,
            categorySlug: post.categorySlug,
          }))}
        />
      </div>

      {/* Read Our Blog Link */}
      <div className="pt-6 px-8 sm:flex items-end">
        <div className="mr-6 mb-4 sm:mb-0">
          <MainButton text="Read Our Blog" link="/blog" />
        </div>
      </div>
    </div>
  );
};

export default ExploreOurBlog;

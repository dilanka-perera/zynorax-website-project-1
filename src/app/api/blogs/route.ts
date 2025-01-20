import { createClient, EntryFieldTypes } from "contentful";

export type AuthorSkeleton = {
  contentTypeId: "author";
  fields: {
    slug: EntryFieldTypes.Text;
    firstName: EntryFieldTypes.Text;
    lastName: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    profilePicture: EntryFieldTypes.AssetLink;
    bio: EntryFieldTypes.RichText;
  };
};

export type CategorySkeleton = {
  contentTypeId: "category";
  fields: {
    slug: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    categoryImage: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.RichText;
  };
};

export type BlogPostSkeleton = {
  contentTypeId: "blogPost";
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    summary: EntryFieldTypes.Text;
    featuredImage: EntryFieldTypes.AssetLink;
    publishedDate: EntryFieldTypes.Date;
    content: EntryFieldTypes.RichText;
    author: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<AuthorSkeleton>>;
    category: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<CategorySkeleton>
    >;
  };
};


export async function GET(req: Request): Promise<Response> {
    try {
      const { searchParams } = new URL(req.url); // Parse query parameters from the URL
      const query = searchParams.get("query") || ""; // Get the query parameter or default to an empty string
  
      if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_KEY) {
        return new Response("Contentful credentials are missing", {
          status: 500,
        });
      }
  
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      });
  
      const result = await client.getEntries<BlogPostSkeleton>({
        content_type: "blogPost",
        query,
      });
  
      return new Response(JSON.stringify(result.items), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return new Response("Failed to fetch blog posts", {
        status: 500,
      });
    }
  }
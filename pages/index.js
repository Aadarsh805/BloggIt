import PostCard from "../components/PostCard";
import PostUtil from "../components/PostUtil";
import Categories from "../components/Categories";

const posts = [
  {
    title: "React testing",
    description: "Learn react testing",
  },
  {
    title: "Tailwind CSS",
    description: "Learn tailwind",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, key) => (
            <PostCard key={key} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostUtil />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

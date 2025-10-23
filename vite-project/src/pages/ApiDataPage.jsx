// src/pages/APIDataPage.jsx
import { useState, useEffect, useMemo } from 'react';
import { fetchPosts } from '../services/api';
import Card from '../components/Card';
import Button from '../components/Button';

const POSTS_PER_PAGE = 10;

const APIDataPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data effect
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { posts: fetchedPosts, totalCount } = await fetchPosts(currentPage, POSTS_PER_PAGE);
        setPosts(fetchedPosts);
        setTotalPosts(totalCount);
      } catch (err) {
        setError(err.message);
        console.error("API Fetch Error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadPosts();
  }, [currentPage]);

  // Memoized search filtering
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;
    const lowerCaseSearch = searchTerm.toLowerCase();
    return posts.filter(post => 
        post.title.toLowerCase().includes(lowerCaseSearch) ||
        post.body.toLowerCase().includes(lowerCaseSearch)
    );
  }, [posts, searchTerm]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // --- Render content based on state ---
  if (isLoading) {
    return (
      <Card className="text-center py-12">
        <p className="text-xl font-semibold text-blue-500 animate-pulse">Loading posts...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="text-center py-12">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Please check the console for details.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">Public API Data (JSONPlaceholder)</h1>
      
      {/* Search Input */}
      <Card>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts by title or body..."
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
        />
      </Card>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
                <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{post.body.substring(0, 100)}...</p>
                    <p className="text-xs text-right mt-3 text-gray-400">User ID: {post.userId}</p>
                </Card>
            ))
        ) : (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
                No results found for "{searchTerm}".
            </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={handlePrevPage} disabled={currentPage === 1} variant="secondary">
          Previous
        </Button>
        <span className="self-center font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage >= totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default APIDataPage;
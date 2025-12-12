import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiData = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );

  const filteredData = data?.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          API Data Explorer
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fetching data from JSONPlaceholder API
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <Card>
          <div className="text-red-600 dark:text-red-400">
            <p className="font-semibold">Error loading data:</p>
            <p>{error}</p>
          </div>
        </Card>
      )}

      {!loading && !error && filteredData && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {filteredData.map((post) => (
              <Card key={post.id} title={`Post #${post.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.body}
                </p>
              </Card>
            ))}
          </div>

          {filteredData.length === 0 && (
            <Card>
              <p className="text-center text-gray-600 dark:text-gray-400">
                No posts found matching your search.
              </p>
            </Card>
          )}

          <div className="flex justify-center gap-4">
            <Button
              variant="secondary"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300">
              Page {page}
            </span>
            <Button
              variant="secondary"
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ApiData;

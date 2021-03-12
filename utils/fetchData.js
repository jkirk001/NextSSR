export const fetchData = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:8080/api/test");
  const posts = await res.json();
  return posts;
};

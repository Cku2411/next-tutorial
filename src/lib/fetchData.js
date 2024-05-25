export const getData = async (slug) => {
  console.log(`going to fetch: http://localhost:3000/api/blog/${slug}`);
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong of singlepost");
  }

  const data = await res.json();
  console.log({ data });
  return data;
};

export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1 className="text-3xl font-bold">Search</h1>
      <p>Find what you are looking for!</p>
    </div>
  );
}

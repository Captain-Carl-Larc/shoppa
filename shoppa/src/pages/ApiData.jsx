import { useEffect, useState } from "react";
import Card from "../components/Card";

function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Explore Public Data</h2>
      <input
        className="border px-2 py-1 rounded mb-4 w-full max-w-md"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.slice(0, 20).map((item) => (
          <Card key={item.id}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ApiData;

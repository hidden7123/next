'use client';
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    setData(Math.random()); // 延迟到客户端运行
  }, []);

  if (data === null) return <p>Loading...</p>;

  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={() => setData(data + 1)}>increase</button>
      <div>{data}</div>
    </div>
  );
}

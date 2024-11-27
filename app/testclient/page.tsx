'use client';

import { useEffect, useState } from 'react';

export default function ClientComponent() {
	const [data, setData] = useState<any>();

	useEffect(() => {
		fetch('http://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then(setData);
	}, []);

	if (!data) return <p>Loading...</p>;

	return (
		<div>
			<h1>Client Component</h1>
			<div>
				{data.map((item: any) => (
					<div
						key={item.id}
						style={{ marginBottom: '1rem' }}>
						<h2>{item.title}</h2>
						<p>{item.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}

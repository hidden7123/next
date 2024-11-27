// 'use client'
export default async function ServerComponent() {
	const data = await fetch('http://jsonplaceholder.typicode.com/posts').then(
		(res) => res.json()
	);

	return (
		<div>
			<h1>Server Component</h1>
			<div>
				{data.map((item: any) => (
					<div key={item.id} style={{ marginBottom: '1rem' }}>
						<h2>{item.title}</h2>
						<p>{item.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}

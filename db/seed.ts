import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
		{ author: 'marco',likes: 100, body: 'Hope you like Astro DB!' },
		{ author: 'giovanni',likes: 11300, body: 'Hope you like Astro DB!' },
	  ])
}

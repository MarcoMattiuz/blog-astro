import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Comment).values([
		{ author: 'marco',postID:'1', body: 'Hope you like Astro DB!' },
		{ author: 'giovanni',postID:'2', body: 'Hope you like Astro DB!' },
	  ])
}

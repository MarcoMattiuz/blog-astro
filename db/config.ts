import {defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Comment = defineTable({
  columns: {
    author: column.text(),
    // likes: column.number(),
    postID: column.text(),
    body: column.text(),
  }
})

export default defineDb({
  tables: {
    Comment
  },
});

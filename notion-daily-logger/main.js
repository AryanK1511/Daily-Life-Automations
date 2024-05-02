require('dotenv').config();

const { Client } = require('@notionhq/client');

// Initialize a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Function that would write the content in Notion
async function writeToNotion() {
  try {
    const response = await notion.blocks.children.append({
      block_id: process.env.PAGE_ID, // ID of the Notion page
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'hello',
                },
              },
            ],
          },
        },
      ],
    });

    console.log('Text added to page:', response);
  } catch (error) {
    console.error('Error:', error.body);
  }
}

writeToNotion();

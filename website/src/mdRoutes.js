import overview from '../../docs/README.md'
import frameworks from '../../docs/frameworks.md'
import articles from '../../docs/articles.md'
import whatsNew from '../../docs/whats-new.md'

export default [
  {
    name: 'Documentation',
    path: '/docs',
    data: [
      {
        name: 'Overview',
        children: [
          {
            name: 'Introduction',
            markdown: overview,
          },
          {
            name: 'Frameworks',
            markdown: frameworks,
          },
          {
            name: 'Articles',
            markdown: articles,
          },
          {
            name: "What's New",
            markdown: whatsNew,
          },
        ],
      },
    ],
  },
]

exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (results.error) {
    reporter.panic('failed to create posts', results.error);
  }

  const posts = results.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/template/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};

import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { SEO } from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        id
      }
    }
  }
`;

export const Head = () => <SEO title="My Blog Posts" />;

export default BlogPage;

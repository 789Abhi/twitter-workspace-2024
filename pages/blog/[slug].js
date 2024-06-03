// pages/blog/[slug].js
import strapi from '../../lib/strapi';

const TwitterPost = ({ post }) => {
  if (!post) return <div>Loading...</div>;

};

export async function getStaticPaths() {
  const response = await strapi.get('/twitters');
  const posts = response.data.data;

  const paths = posts.map(post => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await strapi.get(`/twitters`, {
    params: {
      filters: { slug: params.slug },
      populate: '*',
    },
  });
  const post = response.data.data[0];

  return { props: { post } };
}

export default TwitterPost;

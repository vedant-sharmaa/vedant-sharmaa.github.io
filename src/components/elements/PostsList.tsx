import React from 'react';

import Cards, { cardModeList } from '../shared/Cards';
import PostPreview from './PostPreview';
import {
  BlogPageQuery,
  BlogPageQuery_allMdx_nodes,
} from '../../pages/__generated__/BlogPageQuery';

type PostsListProps = {
  posts: BlogPageQuery;
};

const PostsList = (props: PostsListProps): React.ReactElement => {
  const { posts } = props;

  const postsElements = posts.allMdx.nodes.map(
    (node: BlogPageQuery_allMdx_nodes) => {
      return <PostPreview post={node} key={node.id} />;
    },
  );

  return (
    <Cards mode={cardModeList}>
      {posts.allMdx.totalCount > 0 ? (
        postsElements
      ) : (
        <span>Coming Soon...</span>
      )}
    </Cards>
  );
};

export default PostsList;

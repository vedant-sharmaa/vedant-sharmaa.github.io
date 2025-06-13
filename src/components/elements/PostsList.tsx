import React from 'react';

import Cards, { cardModeList } from '../shared/Cards';
import PostPreview from './PostPreview';

type PostsListProps = {
  posts: any;
};

const PostsList = (props: PostsListProps): React.ReactElement => {
  const { posts } = props;

  const postsElements = posts.allMdx.nodes.map(
    (node: any) => {
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

import { useParams } from 'react-router';

import Header from '../../components/Header';
import PostList from '../../components/PostList';

const Posts = () => {
  let { id } = useParams();
  return (
    <div>
      <Header title={`Posts for UserID #${id}`} />
      <PostList />
    </div>
  );
};

export default Posts;

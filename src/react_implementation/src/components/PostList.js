import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostList = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/posts`
        )
          .then((response) => response.json())
          .catch((err) => console.error(err));
        setPosts(response);
      } catch (err) {}
    };
    fetchData();
  }, [id, setPosts]);

  return (
    <div className='container-xxl'>
      <div className='list-group' style={{ marginTop: '20px' }}>
        <table className='table table-dark table-hover'>
          <thead>
            <tr className='table-info'>
              <th scope='col'>UserID</th>
              <th scope='col'>PostId</th>
              <th scope='col'>Title</th>
              <th scope='col'>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <button
        type='button'
        className='btn btn-primary btn-lg'
        onClick={() => navigate('/')}
      >
        Go back to Users.
      </button>
    </div>
  );
};

export default PostList;

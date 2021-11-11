import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  let navigate = useNavigate();
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
          .then((response) => response.json())
          .catch((err) => console.error(err));
        setUsers(response);
      } catch (err) {}
    };
    fetchData();
  }, [setUsers]);

  const handleUserSelect = (e, id) => {
    e.stopPropagation();
    navigate(`/users/${id}/posts`);
  };

  return (
    <div className='container-xxl'>
      <div className='list-group' style={{ marginTop: '20px' }}>
        <table className='table table-dark table-hover'>
          <thead>
            <tr className='table-info'>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
              <th scope='col'>Address</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Website</th>
              <th scope='col'>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr
                    onClick={(e) => {
                      handleUserSelect(e, user.id);
                    }}
                    key={user.id}
                  >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{`${user.address.street}, ${user.address.city} ${user.address.zipcode}`}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

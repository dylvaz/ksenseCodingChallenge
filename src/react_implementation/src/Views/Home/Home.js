import Header from '../../components/Header';
import UserList from '../../components/UserList';

const Home = () => {
  return (
    <div>
      <Header title={'Users'} />
      <UserList />
    </div>
  );
};

export default Home;

const Header = ({ title }) => {
  return (
    <>
      <h1
        className='fw-lighter display-1 text-center'
        style={{ paddingTop: '30px' }}
      >
        {title}
      </h1>
      <hr style={{ marginBottom: '30px' }}></hr>
    </>
  );
};

export default Header;

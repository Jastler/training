import { useAppSelector } from "../store";

const Home = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Home</h1>
      {user ? <h1>Welcome, {user.email}</h1> : <h1>Please Log In</h1>}
    </div>
  );
};

export default Home;

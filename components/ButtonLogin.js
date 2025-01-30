import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, User }) => {
  // const { isLoggedIn, User } = props; // Destructuring JS Objects

  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome Back {User.name}
      </Link>
    );
  }

  return <button>Login</button>;
};

export default ButtonLogin;

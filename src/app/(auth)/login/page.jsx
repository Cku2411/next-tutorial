import { auth } from "@/lib/auth";
import { handleGithubLogin } from "@/lib/acition";

const Login = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
};

export default Login;

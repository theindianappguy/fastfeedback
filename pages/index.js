import { useAuth } from "@/lib/auth";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p {
    font-family: 'Inter', sans-serif;
  }
`;

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <GlobalStyle />
      <main>
        <p>
          Current user: <code>{auth?.user ? auth.user.email : "None"}</code>
        </p>
        {auth?.user ? (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        ) : (
          <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
        )}
      </main>
    </div>
  );
}

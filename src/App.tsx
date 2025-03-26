import "./index.css";
import { APITester } from "./APITester";
import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import logo from "./logo.svg";
import reactLogo from "./react.svg";

const supabase = createClient(
  process.env.BUN_PUBLIC_SUPABASE_URL!,
  process.env.BUN_PUBLIC_SUPABASE_ANON_KEY!,
);

// const supabase = createBrowserClient(
//   process.env.BUN_PUBLIC_SUPABASE_URL!,
//   process.env.BUN_PUBLIC_SUPABASE_ANON_KEY!,
// );

export function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>

      <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <APITester />
    </div>
  );
}

export default App;

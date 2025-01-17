// app/page.tsx
import { Analytics } from "@vercel/analytics/react";
import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";
import { GlobalStateProvider } from "../contexts/GlobalStateContext";

const serverConfig = getServerSideConfig();

export default function App() {
  return (
    <GlobalStateProvider>
      <>
        <Home />
        {serverConfig?.isVercel && <Analytics />}
      </>
    </GlobalStateProvider>
  );
}
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Usually I'd place all wrappers, configs of providers in App.tsx file
// but since it's just an example I put it here
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTRPCClient, trpc } from "./trpc";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => createTRPCClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

const Todos: React.FC = () => {
  // Query

  // Mutation

  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById("app"));

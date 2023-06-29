import { type AppType } from "next/app";
import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "~/styles/chakraTheme";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { Database } from "types/database.types";
const MyApp: AppType<{ initialSession: Session }> = ({
  Component,
  pageProps,
}) => {
  const [supabaseClient] = useState(() => createPagesBrowserClient<Database>());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
};

export default MyApp;

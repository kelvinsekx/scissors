import { createClient } from "@supabase/supabase-js";
import { Database } from "types/database.types";
import { env } from "~/env.mjs";

export const supabase = createClient<Database>(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

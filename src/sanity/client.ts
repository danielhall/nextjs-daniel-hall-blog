import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "x1jxgxp0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
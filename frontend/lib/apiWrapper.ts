import { readMeGenerator } from "@/openAPI/generated"

export const api = new readMeGenerator({
  BASE: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080",
})

import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App";

// Prefer env-provided Convex URL, but fall back to the project deployment from README
// This ensures the app runs in production even if VITE_CONVEX_URL isn't set.
const convexUrl = (import.meta.env as any)?.VITE_CONVEX_URL ?? "https://steady-loris-921.convex.cloud";
const convex = new ConvexReactClient(convexUrl);

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY. Please set it in your .env.local file.");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
    <ConvexAuthProvider client={convex}>
      <App />
    </ConvexAuthProvider>
  </ClerkProvider>,
);

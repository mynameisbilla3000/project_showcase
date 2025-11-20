import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { ChatWidget } from "./components/ChatWidget";
import { Toaster } from "sonner";
import { PageBackground } from "./components/PageBackground";
import { AppRoutes } from "./AppRoutes";
import { Navigation } from "./components/Navigation";
import { MapPin } from "lucide-react";

export default function App() {
  return (
    <Router>
      <PageBackground>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <ChatWidget />
          <Toaster />
        </div>
      </PageBackground>
    </Router>
  );

}

function Header() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Sahyaatra
            </span>
          </Link>

          <SignedIn>
            <Navigation />
          </SignedIn>

          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <div className="flex items-center space-x-2">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}

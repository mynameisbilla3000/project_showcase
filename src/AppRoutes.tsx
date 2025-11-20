import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { PageTransition } from "./components/PageTransition";
import { Home } from "./pages/Home";
import { Places } from "./pages/Places";
import { EnhancedStatePlaces } from "./pages/EnhancedStatePlaces";
import { PlaceDetail } from "./pages/PlaceDetail";
import { AdvancedIndiaMap } from "./components/AdvancedIndiaMap";
import { HTMLMapIndia } from "./components/HTMLMapIndia";
import { WoodenIndiaMap } from "./components/WoodenIndiaMap";

import { StateDetail } from "./pages/StateDetail";
import { Trips } from "./pages/Trips";
import { CreateTrip } from "./pages/CreateTrip";
import { TripDetail } from "./pages/TripDetail";
import { Chat } from "./pages/Chat";
import { Budget } from "./pages/Budget";
import { Profile } from "./pages/Profile";
import { Demo } from "./pages/Demo";
import SignInPage from "./pages/SignInPage";
import { UserAccount } from "./pages/UserAccount";

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/state/:stateCode" element={<EnhancedStatePlaces />} />
          <Route path="/places/detail/:placeId" element={<PlaceDetail />} />
          <Route path="/places/map" element={<AdvancedIndiaMap />} />
          <Route path="/places/map/html" element={<HTMLMapIndia />} />
          <Route path="/places/map/wooden" element={<WoodenIndiaMap />} />

          <Route path="/states/:code" element={<StateDetail />} />
          <Route path="/trips" element={
            <>
              <SignedIn>
                <Trips />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/trips/create" element={
            <>
              <SignedIn>
                <CreateTrip />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/trips/:id" element={
            <>
              <SignedIn>
                <TripDetail />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/chat/:tripId" element={
            <>
              <SignedIn>
                <Chat />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/budget/:tripId" element={
            <>
              <SignedIn>
                <Budget />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/profile" element={
            <>
              <SignedIn>
                <Profile />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/account" element={
            <>
              <SignedIn>
                <UserAccount />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          } />
          <Route path="/demo" element={<Demo />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}
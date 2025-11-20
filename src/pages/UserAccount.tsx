import { UserProfile } from "@clerk/clerk-react";

export function UserAccount() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Account</h1>
          <p className="mt-2 text-gray-600">Manage your Clerk account settings</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-8">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}


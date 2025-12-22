import { currentUser } from "@clerk/nextjs/server";

export default async function DebugPage() {
  const user = await currentUser();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Clerk Debug Page</h1>

      {user ? (
        <div className="bg-green-100 p-4 rounded">
          <p className="text-green-800 font-semibold">✅ User is authenticated!</p>
          <div className="mt-4">
            <p><strong>User ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
          </div>
        </div>
      ) : (
        <div className="bg-red-100 p-4 rounded">
          <p className="text-red-800 font-semibold">❌ No user detected</p>
          <p className="mt-2">User is not signed in or session is not being detected.</p>
        </div>
      )}

      <div className="mt-6">
        <a href="/" className="text-blue-600 underline">← Back to home</a>
      </div>
    </div>
  );
}

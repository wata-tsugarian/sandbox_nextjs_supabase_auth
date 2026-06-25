import { signOut } from "@/app/auth/actions";

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl">My Page</h1>
      <form action={signOut}>
        <button className="rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600">
          ログアウト
        </button>
      </form>
    </div>
  )
}

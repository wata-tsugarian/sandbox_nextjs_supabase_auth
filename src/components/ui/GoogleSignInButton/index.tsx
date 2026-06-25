import Image from "next/image";

import { signInWithGoogle } from "@/app/auth/actions";

export default function GoogeSignInButtonComponent() {
  return (
    <form>
      <button
        type="submit"
        formAction={signInWithGoogle}
        className="cursor-pointer border-0 bg-transparent p-0"
      >
        <Image
          src="/google/signin.png"
          alt="google signin"
          width={525}
          height={120}
          loading="eager"
          className="w-[200px] h-auto"
        />
      </button>
    </form>
  );
}

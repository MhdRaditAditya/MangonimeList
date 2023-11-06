import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActBtn = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "Sign In";
  const actionLink = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex md:gap-8 justify-between text-color-primary md:text-base text-xs md:mt-0 mt-2">
      {user ? <Link href="/user/dashboard" className="hover:text-color-thirdy">Dashboard</Link> : null}
      <Link href={actionLink} className="md:mr-5 hover:text-color-thirdy">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActBtn;

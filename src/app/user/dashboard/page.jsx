import NotFound from "@/app/not-found";
import Image from "next/image";
const { authUserSession } = require("@/libs/auth-libs");

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center md:text-xl text-base ">
      {user ? (
        <div className="row align-center">
          <div className="flex justify-center items-center mb-20">
            <h2>Dashboard</h2>
          </div>
          <div className=" mb-9">
          <h3 className="flex justify-center items-center">Welcome, {user.name}</h3>
          <h3 className="flex justify-center items-center">{user.email}</h3>
          </div>

          
          <Image
            src={user.image}
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Page;

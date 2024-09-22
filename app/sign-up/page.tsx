"use client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface INPUTSIF {
  email: string;
  password: string;
}

export default function SignUP() {
  const [inputs, setInputs] = useState<INPUTSIF>({ email: "", password: "" });
  const [eyeState, setEyeState] = useState<boolean>(false);
  const [policy, setPolicy] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(false);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (policy && subscribe) {
      alert("two checked");
    } else if (policy) {
      alert(`Plociy is ${policy}`);
    } else if (subscribe) {
      alert(`Subscribe ${subscribe}`);
    } else {
      alert("none checked");
    }
  };

  const eyeClickHandler = () => setEyeState((pre) => !pre);
  return (
    <div className="w-screen flex items-center overflow-hidden">
      <div className="w-1/2 h-fit border lg:block hidden rounded-r-3xl overflow-hidden">
        <Image
          src={"/account.jpg"}
          alt="Account Image"
          width={695}
          height={956}
          className="w-full h-[580px] object-cover"
        />
      </div>
      <div className="lg:w-1/2 w-full h-full pl-16 pr-24 flex flex-col items-center justify-center">
        <h1 className="w-full font-bold text-3xl mb-2">Sign Up</h1>
        <p className="font-light text-xs text-[#666666] text-start w-full mb-5">
          Sign up for free to access to in any of our products
        </p>
        <button className="w-full text-[#8A33FD] font-medium border-2 py-3 rounded-xl mb-2 flex items-center justify-center gap-2">
          <Image src="/google.png" alt="Google Image" width={17} height={17} />
          <span>Continue With Google</span>
        </button>
        <button className="w-full text-[#8A33FD] font-medium border-2 py-3 rounded-xl mb-4 flex items-center justify-center gap-2">
          <Image src="/twitter.png" alt="Google Image" width={17} height={17} />
          <span>Continue With Twitter</span>
        </button>
        <div className="w-full flex items-center justify-center gap-2 mb-4">
          <div className="w-full h-px rounded bg-[#666666]"></div>
          <span className="text-[#666666] italic">OR</span>
          <div className="w-full h-px rounded bg-[#666666]"></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start justify-start"
        >
          <div className="mb-2 w-full">
            <label htmlFor="email" className="text-[#3C4242] capitalize">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              value={inputs.email}
              onChange={inputHandler}
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-5 w-full">
            <div className="w-full flex mb-2 items-center justify-between">
              <label htmlFor="password" className="text-[#3C4242] capitalize">
                Password
              </label>
              {eyeState ? (
                <Eye
                  size={17}
                  stroke="#807D7E"
                  className="cursor-pointer"
                  onClick={eyeClickHandler}
                />
              ) : (
                <EyeOff
                  size={17}
                  stroke="#807D7E"
                  className="cursor-pointer"
                  onClick={eyeClickHandler}
                />
              )}
            </div>
            <input
              id="password"
              name="password"
              value={inputs.password}
              onChange={inputHandler}
              type={`${eyeState ? "text" : "password"}`}
              className="w-full p-3 border border-gray-300 rounded-lg mb-2"
              placeholder="Enter your password"
              required
            />
            <p className="w-full text-start text-xs text-[#807D7E] font-light">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 mb-2">
            <div className="flex items-center justify-start gap-2">
              <input
                type="checkbox"
                id="policy"
                checked={policy}
                onChange={(e) => setPolicy(e.target.checked)}
              />{" "}
              <label htmlFor="policy" className="text-xs text-[#807D7E]">
                Agree to our Terms of use and Privacy Policy
              </label>
            </div>
            <div className="flex items-center justify-start gap-2 ">
              <input
                type="checkbox"
                id="subscribe"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
              />{" "}
              <label htmlFor="subscribe" className="text-xs text-[#807D7E]">
                Subscribe to our Monthly newsletter
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#8A33FD] text-white py-2 mb-2 rounded-lg"
          >
            Sign In
          </button>
          <p className="text-xs text-[#807D7E]">
            Do not have an account ?{" "}
            <Link href={"/sign-up"} className="underline ">
              sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

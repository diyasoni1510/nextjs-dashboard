import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { redirect } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Invoices",
};

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center md:h-screen">
      <div className=" mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 ">
        <Link
          href="/"
          className={clsx(
            "mt-4 gap-5 float-start mr-auto flex h-10 items-center rounded-lg bg-blue-500 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 px-5"
          )}
        >
          <ArrowLeftIcon className="mr-auto h-5 w-5 text-gray-50" />
          <span>Home</span>
        </Link>
      </div>

      <div className=" mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 ">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}

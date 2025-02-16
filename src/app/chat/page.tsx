"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { Chat } from "@/components/chat";

export default function ChatAI() {
  const { theme } = useTheme();

  return (
    <>
      <div className="p-4 shadow">
        <div className="max-w-7x1 m-auto flex flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            <Image
              src={logo}
              alt="Interactive AI logo"
              width={40}
              height={40}
            />
            <span className="font-bold">Interactive AI</span>
          </Link>

          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  baseTheme: theme === "dark" ? dark : undefined,
                  elements: {
                    avatarBox: {
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                    },
                  },
                }}
              />
              <ThemeToggleButton />
              <Button asChild>
                <Link href="/notes">Home Page</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      </div>

      <main className="container relative flex min-h-screen flex-col">
        <div className="flex flex-1 py-4">
          <div className="w-full">
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
}

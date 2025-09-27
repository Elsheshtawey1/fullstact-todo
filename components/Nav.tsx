"use client";
import React, {  } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import { Skeleton } from "@/components/ui/skeleton";
const Nav = () => {
  const { isLoaded, user } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-tight">{!isLoaded ? <Skeleton className="h-[20px] w-[100px] rounded-full" /> : "Todo App"}</div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {!isLoaded ? <Skeleton className="h-[32px] w-[32px] rounded-full" /> : <ModeToggle />}
          <SignedIn>{!isLoaded ? <Skeleton className="h-[32px] w-[32px] rounded-full" /> : <UserButton afterSignOutUrl="/" />}</SignedIn>
          <SignedOut>{!isLoaded ? <Skeleton className="h-[32px] w-[80px] rounded-full" /> : <SignInButton mode="modal" />}</SignedOut>
        </div>
      </div>
    </header>
  );
};
export default Nav;

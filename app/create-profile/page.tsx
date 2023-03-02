import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className=" px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-base font-semibold leading-6 text-black dark:text-white">
            Profile
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-[#eaeaea]">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-2">Wallet Address</Label>
            <Input type="email" id="email-2" placeholder="0x..." />
            <p className="text-sm text-black dark:text-white">
              Enter your wallet address
            </p>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-2">Alternate Name</Label>
            <Input type="email" id="email-2" placeholder="abd0x.eth" />
            <p className="text-sm text-black dark:text-white">
              Do you go by a different name? Such as your ENS, nickname, twitter
              handle, etc.{" "}
              <span className="font-semibold">
                If not, please enter your wallet address again.
              </span>
            </p>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="role">
              Please select your role in the community
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value="aubergine">Aubergine</SelectItem>
                  <SelectItem value="broccoli">Broccoli</SelectItem>
                  <SelectItem value="carrot" disabled>
                    Carrot
                  </SelectItem>
                  <SelectItem value="courgette">Courgette</SelectItem>
                  <SelectItem value="leek">Leek</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Meat</SelectLabel>
                  <SelectItem value="beef">Beef</SelectItem>
                  <SelectItem value="chicken">Chicken</SelectItem>
                  <SelectItem value="lamb">Lamb</SelectItem>
                  <SelectItem value="pork">Pork</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-black dark:text-white">
              Profile Photo
            </label>
            <div className="mt-2 flex items-center space-x-5">
              {/* <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span> */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>:&#41;</AvatarFallback>
              </Avatar>
              {/* <button
                  type="button"
                  className="rounded-md bg-white dark:bg-[#333] py-1.5 px-2.5 text-sm font-semibold text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-[#555] hover:bg-gray-50 dark:hover:bg-[#555]"
                >
                  Choose Avatar
                </button> */}

              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md px-2.5 py-2 bg-[#eaeaea] hover:bg-[#eaeaea]/80 dark:bg-[#333] dark:hover:bg-[#333]/80 font-medium text-black dark:text-white focus-within:outline-none focus-within:ring-2  "
              >
                <span className="text-md">Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-4 sm:px-0 mt-4">
        <button
          type="button"
          className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Cancel
        </button>

        <Button variant="default" className="ml-3">
          Save
        </Button>
      </div>
    </div>
  );
}

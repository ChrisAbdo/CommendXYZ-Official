"use client";

import React from "react";
import { BarChart, Clock, Home, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const navigation = [
  { name: "Home", href: "#", icon: Home, current: true },
  { name: "My tasks", href: "#", icon: BarChart, current: false },
  { name: "Recent", href: "#", icon: Clock, current: false },
];
const teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-indigo-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" },
];
const projects = [
  {
    id: 1,
    title: "GraphQL API",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalMembers: 12,
    lastUpdated: "March 17, 2020",
    pinned: true,
    bgColorClass: "bg-green-500",
  },
  {
    id: 2,
    title: "GraphQL API",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalMembers: 12,
    lastUpdated: "March 17, 2020",
    pinned: false,
    bgColorClass: "bg-pink-600",
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const;

type SheetPosition = typeof SHEET_POSITIONS[number];

export default function page() {
  const [position, setPosition] = React.useState<SheetPosition>("left");
  return (
    <div className="min-h-full">
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 dark:lg:border-[#555] lg:bg-gray-100 dark:lg:bg-[#111] lg:pt-5 lg:pb-4">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
          {/* User account dropdown */}

          {/* Sidebar Search */}
          <div className="mt-12 px-3">
            <div>
              <div className="relative mt-2 flex items-center">
                {/* <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> */}
                <Input className="w-full" placeholder="Quick Search" />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center rounded border border-gray-200 dark:border-[#555] px-1 font-sans text-xs text-gray-400 dark:text-[#777]">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="mt-6 px-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-8">
              {/* Secondary navigation */}
              <h3
                className="px-3 text-sm font-medium text-gray-500"
                id="desktop-teams-headline"
              >
                Teams
              </h3>
              <div
                className="mt-1 space-y-1"
                role="group"
                aria-labelledby="desktop-teams-headline"
              >
                {teams.map((team) => (
                  <a
                    key={team.name}
                    href={team.href}
                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <span
                      className={classNames(
                        team.bgColorClass,
                        "mr-4 h-2.5 w-2.5 rounded-full"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{team.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Main column */}
      <div className="flex flex-col lg:pl-64">
        {/* Search header */}
        <div className="sticky top-0 z-10 justify-between flex h-16 flex-shrink-0 border-b border-gray-200 dark:border-[#555] bg-white dark:bg-[#111] lg:hidden">
          {/* <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button> */}
          <div className="px-4 sm:px-6 lg:px-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent position={position} size="content">
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex  justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex flex-1">
              <Input placeholder="Search..." />
            </div>
            <div className="flex items-center">{/* Profile dropdown */}</div>
          </div>
        </div>
        <main className="flex-1">
          {/* Pinned projects */}
          <div className="mt-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium text-black dark:text-white">
              Pinned Projects
            </h2>
            <ul
              role="list"
              className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
            >
              {pinnedProjects.map((project) => (
                <li
                  key={project.id}
                  className="relative col-span-1 flex rounded-md shadow-sm"
                >
                  <div
                    className={classNames(
                      project.bgColorClass,
                      "bg-green-500 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                    )}
                  >
                    {project.initials}
                  </div>
                  <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                    <div className="flex-1 truncate px-4 py-2 text-sm">
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:text-gray-600"
                      >
                        {project.title}
                      </a>
                      <p className="text-gray-500">
                        {project.totalMembers} Members
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects list (only on smallest breakpoint) */}
          <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-sm font-medium text-black dark:text-white">
                Projects
              </h2>
            </div>
            <ul
              role="list"
              className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
            >
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href="#"
                    className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                  >
                    <span className="flex items-center space-x-3 truncate">
                      <span
                        className={classNames(
                          project.bgColorClass,
                          "h-2.5 w-2.5 flex-shrink-0 rounded-full"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate text-sm font-medium leading-6">
                        {project.title}{" "}
                        <span className="truncate font-normal text-gray-500">
                          in {project.team}
                        </span>
                      </span>
                    </span>
                    &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects table (small breakpoint and up) */}
          <div className="mt-8 hidden sm:block">
            <div className="inline-block min-w-full border-b border-gray-200 dark:border-[#555] align-middle">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200 dark:border-[#444]">
                    <th
                      className="border-b border-gray-200 dark:border-[#444] bg-white dark:bg-[#333] px-6 py-3 text-left text-sm font-semibold text-black dark:text-white"
                      scope="col"
                    >
                      <span className="lg:pl-2">Wallet Address</span>
                    </th>
                    <th
                      className="border-b border-gray-200 dark:border-[#444] bg-white dark:bg-[#333] px-6 py-3 text-left text-sm font-semibold text-black dark:text-white"
                      scope="col"
                    >
                      Alt. Name
                    </th>
                    <th
                      className="border-b border-gray-200 dark:border-[#444] bg-white dark:bg-[#333] px-6 py-3 text-left text-sm font-semibold text-black dark:text-white"
                      scope="col"
                    >
                      Role
                    </th>
                    <th
                      className="hidden border-b border-gray-200 dark:border-[#444] bg-white dark:bg-[#333] px-6 py-3 text-right text-sm font-semibold text-black dark:text-white md:table-cell"
                      scope="col"
                    >
                      Commends
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-[#444] bg-white dark:bg-[#111]">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <div
                            className="bg-green-500 h-2.5 w-2.5 flex-shrink-0 rounded-full"
                            aria-hidden="true"
                          />
                          <a href="#" className="truncate hover:text-gray-600">
                            <span className="text-black dark:text-white">
                              {project.title}{" "}
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-gray-500">
                        <div className="flex items-center space-x-2">
                          <div className="flex flex-shrink-0 -space-x-1">
                            {project.members.map((member) => (
                              <img
                                key={member.handle}
                                className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                src={member.imageUrl}
                                alt={member.name}
                              />
                            ))}
                          </div>
                          {project.totalMembers > project.members.length ? (
                            <span className="flex-shrink-0 text-xs font-medium leading-5">
                              +{project.totalMembers - project.members.length}
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                        {project.lastUpdated}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                        {/* <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a> */}
                        <div className="space-x-2 flex">
                          <Button variant="outline" size="sm">
                            Reviews
                          </Button>
                          <Button variant="default" size="sm">
                            Give Commend
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

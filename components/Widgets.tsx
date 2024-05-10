"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 lg:inline hidden">
      {/* SEARCH ICON */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <MagnifyingGlassIcon className="w-8 h-8 text-gray-400" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="sonnysangha"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;

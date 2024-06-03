"use client";
import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";
import toast, { Toaster } from "react-hot-toast";
import { usePosts } from "../components/PostsContext"; // Adjust the path if necessary

function Feed() {
  const { fetchPosts } = usePosts();

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    await fetchPosts();
    toast.success("Latest Tweet Updated", {
      id: refreshToast,
    });
  };

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <Toaster />

      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Feed</h1>
        <ArrowPathIcon
          onClick={handleRefresh}
          className="w-8 h-8 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* TWEET BOX */}
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;

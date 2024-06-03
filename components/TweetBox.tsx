"use client";

import {
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { usePosts } from "./PostsContext"; // Adjust the path if necessary
import Post from "./Post";

function TweetBox() {
  const [input, setInput] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { addPost } = usePosts();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await addPost(input, selectedImage);
    setInput("");
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex space-x-2 p-5">
        <img
          className="h-14 w-14 rounded-full object-cover mt-4"
          src="https://links.papareact.com/gll"
          alt=""
        />
        <div className="flex flex-1 items-center pl-2">
          <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="outline-none placeholder:text-xl h-24 w-full text-xl"
              placeholder="What's Happening?"
            />
            <div className="flex items-center">
              <div className="flex flex-1 space-x-2 text-twitter">
                <label htmlFor="fileInput">
                  <PhotoIcon className="h-5 w-5 transition-transform cursor-pointer duration-150 ease-out hover:scale-150 " />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <MagnifyingGlassCircleIcon className="h-5 w-5" />
                <FaceSmileIcon className="h-5 w-5" />
                <CalendarDaysIcon className="h-5 w-5" />
                <MapPinIcon className="h-5 w-5" />
              </div>
              <button
                disabled={!input}
                className="bg-twitter px-5 py-2 text-white font-bold rounded-full disabled:opacity-40"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>

      <Post />
    </>
  );
}

export default TweetBox;

"use client";
import React, { useState } from "react";
import { usePosts } from "../components/PostsContext";
import { timeAgo } from "../utils/timeUtils";
import {
  ArrowUpTrayIcon,
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Post = () => {
  const { posts } = usePosts();
  const [visibleComments, setVisibleComments] = useState<number[]>([]);

  const toggleComments = (postId: number) => {
    setVisibleComments((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="p-5 border-y-gray-100 border-y">
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        posts.map((post) => (
          <div className="items-center mb-6" key={post.id}>
            <div className="flex items-start space-x-3">
              <div>
                {post.attributes.profileimage?.data?.attributes?.url && (
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={`http://localhost:1337${post.attributes.profileimage.data.attributes.url}`}
                    alt={post.attributes.username}
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex space-x-4 items-center justify-start">
                  <h2 className="font-bold">{post.attributes.username}</h2>
                  <h2 className="hidden text-sm text-gray-500 sm:inline">
                    {post.attributes.emailaddress}
                  </h2>
                  <h2 className="text-sm text-gray-500">
                    {timeAgo(post.attributes.publishedAt)}
                  </h2>
                </div>

                <div className="max-w-[28%]">
                  <p className="pt-1 break-words">
                    {post.attributes.description}
                  </p>
                </div>
                <div>
                  {post.attributes.tweetimage?.data?.attributes?.url && (
                    <img
                      className="object-cover w-full mt-5 mb-1 max-h-60 rounded-lg shadow-sm"
                      src={`http://localhost:1337${post.attributes.tweetimage.data.attributes.url}`}
                    />
                  )}
                </div>
                <div className="flex space-x-3 justify-between mt-3">
                  <div
                    className="flex items-center space-x-2 text-gray-500 cursor-pointer"
                    onClick={() => toggleComments(post.id)}
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    <p>{post.attributes.comments?.data?.length ?? 0}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <ArrowsRightLeftIcon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <HeartIcon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                    <ArrowUpTrayIcon className="h-5 w-5" />
                  </div>
                </div>
                {visibleComments.includes(post.id) &&
                  post.attributes.comments?.data?.map((comment) => (
                    <div
                      key={comment.id}
                      className="ml-10 mt-4 flex items-start space-x-3 relative pb-4 last:border-b-0 border-b border-b-gray-300"
                    >
                      <div>
                        {comment.attributes.profileimage?.data?.attributes
                          ?.url && (
                          <img
                            className="h-8 w-8 rounded-full object-cover"
                            src={`http://localhost:1337${comment.attributes.profileimage.data.attributes.url}`}
                            alt={comment.attributes.username}
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-bold">
                          {comment.attributes.username}
                        </h4>
                        <p className="text-sm">{comment.attributes.comments}</p>
                        <p className="text-xs text-gray-500">
                          {timeAgo(comment.attributes.publishedAt)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import strapi, { setAuthToken } from "../lib/strapi";
import { PostData } from "../types";

type PostsContextType = {
  posts: PostData[];
  fetchPosts: () => Promise<void>;
  addPost: (description: string, tweetImage: File | null) => Promise<void>;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await strapi.get(
        "/twitters?populate=profileimage,tweetimage,comments.profileimage"
      );
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async (description: string, tweetImage: File | null) => {
    try {
      let tweetImageId = null;

      if (tweetImage) {
        const formData = new FormData();
        formData.append("files", tweetImage);

        const token = localStorage.getItem("jwt");
        if (token) {
          setAuthToken(token);
        }

        const uploadRes = await strapi.post("/upload", formData);
        tweetImageId = uploadRes.data[0].id;
      }

      const token = localStorage.getItem("jwt");
      if (token) {
        setAuthToken(token);
      }

      const postData = {
        description,
        tweetimage: tweetImageId,
      };

      await strapi.post("/twitters", { data: postData });
      fetchPosts();
    } catch (error) {
      console.error("Error posting new tweet:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

"use cleint";
import { PostsProvider } from "../../components/PostsContext";
import { SessionProvider } from "next-auth/react";
import Component from "../../components/Component";

export default function Home() {
  return (
    <PostsProvider>
      <Component />
    </PostsProvider>
  );
}

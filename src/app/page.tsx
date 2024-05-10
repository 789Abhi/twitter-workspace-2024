import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";

export default function Home() {
  return (
    <main className="grid grid-cols-9 lg:max-w-7xl mx-auto max-h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </main>
  );
}

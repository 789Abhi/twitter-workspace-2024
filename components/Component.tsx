import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Component() {
  return (
    <div>
      <main className="grid grid-cols-9 lg:max-w-7xl mx-auto max-h-screen ">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export default Component;

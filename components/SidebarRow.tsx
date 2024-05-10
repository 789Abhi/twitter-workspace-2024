import React, { SVGProps, ReactElement } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex items-center max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200 group">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter md:inline-flex hidden text-base lg:text-xl font-medium">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;

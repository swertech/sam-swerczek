import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdHappy />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdMail />,
  }
];
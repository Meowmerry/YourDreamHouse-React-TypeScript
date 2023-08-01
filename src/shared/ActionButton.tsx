import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage?: (value: SelectedPage) => void;
};

const ActionButton = ({ children }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-slate-100 px-10 py-2 hover:bg-cyan-3000 hover:bg-blue-300	0 hover:text-rose-950"
      // onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
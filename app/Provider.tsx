"use client";
import LayoutContainer from "@/common/ui/LayoutContainer";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer.Provider>{children}</LayoutContainer.Provider>;
};

export default Provider;

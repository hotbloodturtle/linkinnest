"use client";
import LoginContainer from "@/common/domains/auth/LoginContainer";
import LayoutContainer from "@/common/ui/LayoutContainer";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer.Provider>
      <LoginContainer.Provider>{children}</LoginContainer.Provider>
    </LayoutContainer.Provider>
  );
};

export default Provider;

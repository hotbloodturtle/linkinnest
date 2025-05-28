"use client";
import AuthContainer from "@/common/domains/auth/AuthContainer";
import LayoutContainer from "@/common/ui/LayoutContainer";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer.Provider>
      <AuthContainer.Provider>{children}</AuthContainer.Provider>
    </LayoutContainer.Provider>
  );
};

export default Provider;

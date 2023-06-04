import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { ContentWrapper, PageContainer } from "./index.styles";

export function Layout() {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Outlet />
          <Footer />
        </ContentWrapper>
      </PageContainer>
    </>
  );
}

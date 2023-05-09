import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Hero } from "../Hero";

const ContentWrapper = styled.div`
  padding-bottom: 100px;
`;

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export function Layout() {
  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Header />
          <Hero />
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  );
}

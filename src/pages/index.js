import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal vivek sharma portfolio vvksharrma" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Myself" />
        <InterestsSection sectionId="details" heading="Skills/Interest" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}

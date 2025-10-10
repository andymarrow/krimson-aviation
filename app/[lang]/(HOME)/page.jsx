// app/[lang]/(HOME)/page.jsx
// REMOVE: 'use client' <-- This file should be a Server Component

import React from "react";
import Hero from "./_components/Hero"; // Hero is a Client Component
import CtaSection from "./_components/CtaSection";
// import LatestBlogs from "./_components/LatestBlogs";
import Partners from "./_components/Partners";

import initTranslations from "@/i18n"; // Server-side i18n setup
import ModulesSection from "./_components/ModulesSection";
import OrganizationalStructure from "./_components/OrganizationalStructure";
import AboutTheSystem from "./_components/AboutTheSystem";
import MemberSpotlight from "./_components/MemberSpotlight";
import LatestBlogs from "./_components/LatestBlogs";

// Namespaces needed for *this Server Component* (page.jsx) if it uses t() directly
const i18nNamespaces = ['common', 'homepage'];

export default async function Home({ params: { lang } }) {

   // Initialize translations for this server component (page.jsx itself)
   // Keep this if you use t() for server-rendered text *directly in this file*
   // The result `t` here is the SERVER-SIDE translation function.
   const { t } = await initTranslations({
       locale: lang,
       namespaces: i18nNamespaces,
   });


  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
         {/* Render the Client Component Hero */}
         {/* Hero uses useTranslation internally, so DO NOT pass translated props like title, description */}
         <Hero />

        {/* Example: Using t() for a server-rendered part of the page (if needed) */}
        {/* <h1>{t('common:some_server_rendered_heading')}</h1> */}


        {/* Assuming these are also Client Components that might need useTranslation */}
        {/* They will rely on the TranslationsProvider in app/[lang]/layout.js */}
        <ModulesSection />
        <CtaSection />
        <OrganizationalStructure/>
        <AboutTheSystem />

        {/* Assuming these are also Client Components that might need useTranslation */}
        <LatestBlogs/>
         <MemberSpotlight/>
        <Partners/>

      </main>

    </div>
  );
}
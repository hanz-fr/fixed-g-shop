'use client';

import { ThemeButton } from "@/components/theme-button";

export default function Home() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <div className="container">
        <h2 className="object" data-value="3">Space<br /><span>Background</span></h2>
      </div>
    </>
  );
}

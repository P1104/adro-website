"use client";

import { useState } from "react";
import { DownloadsHero } from "./DownloadsHero";
import { OSSelector } from "./OSSelector";

type OSType = "windows" | "macos" | "linux";

export const DownloadsMain = () => {
  const [os, setOs] = useState<OSType>("windows");

  return (
    <>
      <DownloadsHero os={os} />
      <OSSelector os={os} setOs={setOs} />
    </>
  );
};


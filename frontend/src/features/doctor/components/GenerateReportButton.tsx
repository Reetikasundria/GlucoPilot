"use client";

import { useState } from "react";

import {
  Check,
  FileText,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GenerateReportButton() {
  const [isGenerating, setIsGenerating] =
    useState(false);

  const [isGenerated, setIsGenerated] =
    useState(false);

  const handleGenerateReport = async () => {
    setIsGenerating(true);

    setIsGenerated(false);

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setIsGenerating(false);

    setIsGenerated(true);
  };

  return (
    <Button
      onClick={handleGenerateReport}
      disabled={isGenerating}
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />

          Generating...
        </>
      ) : isGenerated ? (
        <>
          <Check className="mr-2 h-4 w-4" />

          Report Generated
        </>
      ) : (
        <>
          <FileText className="mr-2 h-4 w-4" />

          Generate Report
        </>
      )}
    </Button>
  );
}
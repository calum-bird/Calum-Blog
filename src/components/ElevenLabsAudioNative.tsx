"use client";
import { useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

export type ElevenLabsProps = {
  publicUserId: string;
  textColorRgba?: string;
  backgroundColorRgba?: string;
  size?: "small" | "large";
  children?: React.ReactNode;
};

export const ElevenLabsAudioNative = ({
  publicUserId,
  size,
  textColorRgba,
  backgroundColorRgba,
  children,
}: ElevenLabsProps) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://elevenlabs.io/player/audioNativeHelper.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="elevenlabs-audionative-widget"
      data-height={size === "small" ? "90" : "120"}
      data-width="100%"
      data-frameborder="no"
      data-scrolling="no"
      data-publicuserid={publicUserId}
      data-playerurl="https://elevenlabs.io/player/index.html"
      data-small={size === "small" ? "True" : "False"}
      data-textcolor={textColorRgba ?? "var(--foreground)"}
      data-backgroundcolor={backgroundColorRgba ?? "rgb(var(--secondary))"}
    >
      {children ? children : <Skeleton className="h-[90px] w-full" />}
    </div>
  );
};

export default ElevenLabsAudioNative;

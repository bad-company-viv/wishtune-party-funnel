import React, { useEffect, useState } from "react";
import { Timer } from "lucide-react";

// Shared countdown which persists a single end timestamp in localStorage.
// This keeps multiple countdowns on different pages in sync for the same promo.
const STORAGE_KEY = "wishtune_promo_end";
const DEFAULT_DURATION_MS = 10 * 60 * 1000; // 10 minutes

function getOrCreateEndTimestamp() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const n = parseInt(raw, 10);
      if (!Number.isNaN(n) && n > Date.now()) return n;
    }
  } catch (e) {
    // ignore localStorage errors
  }
  const end = Date.now() + DEFAULT_DURATION_MS;
  try {
    localStorage.setItem(STORAGE_KEY, String(end));
  } catch (e) {}
  return end;
}

export default function SharedCountdown({ durationMs } = {}) {
  const [timeLeftMs, setTimeLeftMs] = useState(() => {
    const end = durationMs
      ? Date.now() + durationMs
      : getOrCreateEndTimestamp();
    return Math.max(0, end - Date.now());
  });

  useEffect(() => {
    let end;
    if (durationMs) {
      end = Date.now() + durationMs;
      try {
        localStorage.setItem(STORAGE_KEY, String(end));
      } catch (e) {}
    } else {
      end = getOrCreateEndTimestamp();
    }

    const tick = () => {
      const left = Math.max(0, end - Date.now());
      setTimeLeftMs(left);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [durationMs]);

  const totalSeconds = Math.floor(timeLeftMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex items-center gap-2 font-mono text-purple-600 font-bold bg-purple-50 px-3 py-1 rounded-lg border border-purple-100">
      <Timer size={14} className="animate-pulse" />
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}

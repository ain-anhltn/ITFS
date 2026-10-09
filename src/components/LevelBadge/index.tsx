import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const BANDS = { J: "Junior", M: "Middle", S: "Senior" } as const;

type Band = keyof typeof BANDS;
export type Level = `${Band}${1 | 2 | 3}`;

const isLevel = (value: unknown): value is Level =>
  typeof value === "string" && /^[JMS][1-3]$/.test(value);

export default function LevelBadge({ level }: { level: Level }): ReactNode {
  if (!isLevel(level)) {
    throw new Error(
      `<LevelBadge>: level "${String(level)}" không hợp lệ. Dùng J1–J3, M1–M3, S1–S3.`,
    );
  }
  const band = level.charAt(0) as Band;
  return (
    <span
      className={clsx(styles.badge, styles[band])}
      title={`${BANDS[band]} · level ${level.charAt(1)}`}
    >
      {level}
    </span>
  );
}

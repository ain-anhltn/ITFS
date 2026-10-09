import type { ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type Props = {
  src: string;
  title: string;
  height?: number;
  caption?: ReactNode;
};

export default function HtmlEmbed({
  src,
  title,
  height = 420,
  caption,
}: Props): ReactNode {
  const url = useBaseUrl(src);
  return (
    <figure className={styles.wrapper}>
      <iframe
        className={styles.frame}
        src={url}
        title={title}
        height={height}
        loading="lazy"
        allowFullScreen
      />
      <figcaption className={styles.caption}>
        {caption && <span className={styles.captionText}>{caption}</span>}
        <a
          className={styles.openLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mở trong tab mới
          <span className="itfs-sr-only">: {title}</span>
        </a>
      </figcaption>
    </figure>
  );
}

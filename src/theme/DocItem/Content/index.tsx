import type { ReactNode } from "react";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import type { WrapperProps } from "@docusaurus/types";
import CopyMarkdown from "@site/src/components/CopyMarkdown";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof ContentType>;

export default function DocItemContentWrapper(props: Props): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <CopyMarkdown />
      </div>
      <Content {...props} />
    </div>
  );
}

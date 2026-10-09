import type { ComponentProps } from "react";
import OriginalDocCardList from "@theme/DocCardList";
import {
  useCurrentSidebarSiblings,
  useDoc,
} from "@docusaurus/plugin-content-docs/client";

type Props = ComponentProps<typeof OriginalDocCardList>;

function SiblingCardList(props: Omit<Props, "items">) {
  const { id } = useDoc().metadata;
  const items = useCurrentSidebarSiblings().filter(
    (item) => !(item.type === "link" && item.docId === id),
  );
  return <OriginalDocCardList {...props} items={items} />;
}

export default function DocCardList(props: Props) {
  return props.items ? (
    <OriginalDocCardList {...props} />
  ) : (
    <SiblingCardList {...props} />
  );
}

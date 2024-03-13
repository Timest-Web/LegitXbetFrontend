import { useEffect } from "react";

export function UpdateDocumentTitle(title: string) {
  useEffect(() => {
      document.title = title;
  }, [title]);
}

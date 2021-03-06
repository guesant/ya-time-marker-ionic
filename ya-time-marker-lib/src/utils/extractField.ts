//region Preamble
/**
 * SPDX-License-Identifier: MIT
 * Copyright © 2021 Gabriel Rodrigues
 */
//endregion

import { ITrain } from "../types/ITrain";

export const extractField = (document: any, fieldName: string) => {
  switch (fieldName) {
    case "steps":
      return (document as ITrain).steps
        .map(({ meta: { description = "" } = {} }) => description)
        .join(" ");
    default:
      return fieldName
        .split(".")
        .reduce((doc, key) => doc && (doc as any)[key], document);
  }
};

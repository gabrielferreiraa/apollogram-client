import { Toaster, Intent } from "@blueprintjs/core";

const toaster = Toaster.create({
  maxToasts: 1,
});

export const showToast = (message: string, intent: Intent = Intent.NONE) =>
  toaster.show({ message, intent });

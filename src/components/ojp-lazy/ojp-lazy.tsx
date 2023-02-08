import { FunctionalComponent, h} from "@stencil/core";

interface OjpLazyProps {
  if: boolean;
}

export const OjpLazy: FunctionalComponent<OjpLazyProps> = (props, children) => {
  if (props.if) {
    return <div class="lazy">{children}</div>;
  }
  return null;
};

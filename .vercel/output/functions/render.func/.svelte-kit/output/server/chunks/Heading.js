import { c as create_ssr_component } from "./index2.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"mb-12 text-2xl font-bold text-blue"}">${slots.default ? slots.default({}) : ``}</h1>`;
});
export {
  Heading as H
};

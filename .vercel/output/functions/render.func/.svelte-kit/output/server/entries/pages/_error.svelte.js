import { c as create_ssr_component, d as subscribe, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 class="${"text-green font-bold text-9xl text-center"}">${escape($page.status)}</h1>
<pre class="${"text-center text-blue text-xl"}">${escape($page.error?.message)}</pre>`;
});
export {
  Error as default
};

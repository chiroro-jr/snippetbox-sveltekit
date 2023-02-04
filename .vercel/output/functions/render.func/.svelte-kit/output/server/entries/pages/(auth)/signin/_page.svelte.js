import { c as create_ssr_component, d as subscribe, v as validate_component, f as each, b as add_attribute, e as escape } from "../../../../chunks/index2.js";
import "../../../../chunks/utils.js";
import { p as page } from "../../../../chunks/stores.js";
import { H as Heading } from "../../../../chunks/Heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({ form } = $page);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-12i09tx_START -->${$$result.title = `<title>SnippetBox - Sign In</title>`, ""}<!-- HEAD_svelte-12i09tx_END -->`, ""}

${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Sign Up`;
    }
  })}
<form method="${"POST"}" action="${"/signin"}" class="${"grid gap-5 border-t-2 border-dotted border-gray-3 pt-5"}">${form?.errors?.formErrors ? `<div class="${"mb-3 space-y-2"}">${each(form?.errors?.formErrors, (error) => {
    return `<p class="${"text-center py-5 bg-red text-white rounded-md"}">${escape(error)}</p>`;
  })}</div>` : ``}
	<div class="${"grid gap-2"}"><label for="${"email"}" class="${"text-blue"}">Email:</label>
		<input type="${"email"}" name="${"email"}" id="${"email"}"${add_attribute("value", form?.values?.email ?? "", 0)} class="${"border-2 " + escape(
    form?.errors?.fieldErrors?.email ? "border-red" : "border-gray-3",
    true
  ) + " p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"}">
		<ul class="${"text-sm list-disc pl-4"}">${form?.errors?.fieldErrors?.email ? `${each(form?.errors?.fieldErrors?.email, (error) => {
    return `<li class="${"text-red"}">${escape(error)}</li>`;
  })}` : ``}</ul></div>
	<div class="${"grid gap-2"}"><label for="${"password"}" class="${"text-blue"}">Password:</label>
		<input type="${"password"}" name="${"password"}" id="${"password"}" class="${"border-2 " + escape(
    form?.errors?.fieldErrors?.password ? "border-red" : "border-gray-3",
    true
  ) + " p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"}">
		<ul class="${"text-sm list-disc pl-4"}">${form?.errors?.fieldErrors?.password ? `${each(form?.errors?.fieldErrors?.password, (error) => {
    return `<li class="${"text-red"}">${escape(error)}</li>`;
  })}` : ``}</ul></div>
	<div class="${"border-t-2 border-dotted border-gray-3 pt-5"}"><button type="${"submit"}" class="${"inline-block rounded-md bg-green hover:bg-green/80 p-5 font-bold text-white focus:outline-blue/40 transition-all duration-200"}">Sign In</button></div></form>`;
});
export {
  Page as default
};

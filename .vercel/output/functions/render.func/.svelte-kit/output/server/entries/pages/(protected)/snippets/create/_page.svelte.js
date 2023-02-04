import { c as create_ssr_component, d as subscribe, v as validate_component, f as each, b as add_attribute, e as escape } from "../../../../../chunks/index2.js";
import "../../../../../chunks/utils.js";
import { p as page } from "../../../../../chunks/stores.js";
import { H as Heading } from "../../../../../chunks/Heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form;
  let data;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({ form } = $page);
  ({ data } = $page);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-jr3zk_START -->${$$result.title = `<title>SnippetBox - Create New Snippet</title>`, ""}<!-- HEAD_svelte-jr3zk_END -->`, ""}

${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Create a new snippet`;
    }
  })}
<form method="${"POST"}" action="${"?/createSnippet"}" class="${"grid gap-5 border-t-2 border-dotted border-gray-3 pt-5"}">${form?.errors?.formErrors ? `<div class="${"mb-3 space-y-2"}">${each(form?.errors?.formErrors, (error) => {
    return `<p class="${"text-center py-5 bg-red text-white rounded-md"}">${escape(error)}</p>`;
  })}</div>` : ``}

	<div class="${"grid gap-2"}"><label for="${"title"}" class="${"text-blue"}">Title:</label>
		<input type="${"title"}" name="${"title"}" id="${"title"}"${add_attribute("value", form?.values?.title ?? "", 0)} class="${"border-2 " + escape(
    form?.errors?.fieldErrors?.title ? "border-red" : "border-gray-3",
    true
  ) + " p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"}">
		<ul class="${"text-sm list-disc pl-4"}">${form?.errors?.fieldErrors?.title ? `${each(form?.errors?.fieldErrors?.title, (error) => {
    return `<li class="${"text-red"}">${escape(error)}</li>`;
  })}` : ``}</ul></div>
	<div class="${"grid gap-2"}"><label for="${"content"}" class="${"text-blue"}">Content:</label>
		<textarea name="${"content"}" id="${"content"}" class="${"border-2 " + escape(
    form?.errors?.fieldErrors?.content ? "border-red" : "border-gray-3",
    true
  ) + " p-4 text-gray-4 min-h-[16.25rem] focus:outline-blue/40 outline-none rounded-md transition-all duration-200"}">${escape(form?.values?.content ?? "", true)}</textarea>
		<ul class="${"text-sm list-disc pl-4"}">${form?.errors?.fieldErrors?.content ? `${each(form?.errors?.fieldErrors?.content, (error) => {
    return `<li class="${"text-red"}">${escape(error)}</li>`;
  })}` : ``}</ul></div>
	<div class="${"grid gap-2"}"><div class="${"flex items-center gap-4"}"><label for="${"expiresIn"}" class="${"text-blue"}">Expires In:</label>
			<span class="${"flex items-center gap-1"}"><span class="${"text-blue"}">1 Day</span>
				<input class="${"mt-[1px] text-gray-4 outline-gray-3"}" ${form?.values?.expiresAt == "1" || data.expiresAt === 1 ? "checked" : ""} type="${"radio"}" name="${"expiresAt"}" id="${"expiresAt"}" value="${"1"}"></span>
			<span class="${"flex items-center gap-1"}"><span class="${"text-blue"}">1 Week</span>
				<input class="${"mt-[1px] outline-gray-3"}" ${form?.values?.expiresAt == "7" ? "checked" : ""} type="${"radio"}" name="${"expiresAt"}" id="${"expiresAt"}" value="${"7"}"></span>
			<span class="${"flex items-center gap-1"}"><span class="${"text-blue"}">1 Month</span>
				<input ${form?.values?.expiresAt == "30" ? "checked" : ""} class="${"mt-[1px] outline-gray-3"}" type="${"radio"}" name="${"expiresAt"}" id="${"expiresAt"}" value="${"30"}"></span>
			<span class="${"flex items-center gap-1"}"><span class="${"text-blue"}">1 Year</span>
				<input ${form?.values?.expiresAt == "365" ? "checked" : ""} class="${"mt-[1px] outline-gray-3"}" type="${"radio"}" name="${"expiresAt"}" id="${"expiresAt"}" value="${"365"}"></span></div>
		<ul class="${"text-sm list-disc pl-4"}">${form?.errors?.fieldErrors?.expires ? `${each(form?.errors?.fieldErrors?.expires, (error) => {
    return `<li class="${"text-red"}">${escape(error)}</li>`;
  })}` : ``}</ul></div>
	<div class="${"border-t-2 border-dotted border-gray-3 pt-5"}"><button type="${"submit"}" class="${"inline-block rounded-md bg-green p-5 font-bold text-white"}">Publish Snippet</button></div></form>`;
});
export {
  Page as default
};

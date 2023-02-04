import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../chunks/index2.js";
import { H as Heading } from "../../chunks/Heading.js";
const SnippetsTableItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { snippet } = $$props;
  if ($$props.snippet === void 0 && $$bindings.snippet && snippet !== void 0)
    $$bindings.snippet(snippet);
  return `<tr class="${"border-2 border-gray-3 odd:bg-gray-1"}"><td class="${"p-4 text-green"}"><a class="${"underline"}" href="${"/snippets/" + escape(snippet.id, true)}">${escape(snippet.title)}</a></td>
	<td class="${"p-4 text-blue"}">${escape(snippet.createdAt)}</td>
	<td class="${"p-4 text-end text-gray-4"}">#${escape(snippet.id)}</td></tr>`;
});
const SnippetsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { snippets } = $$props;
  if ($$props.snippets === void 0 && $$bindings.snippets && snippets !== void 0)
    $$bindings.snippets(snippets);
  return `<table class="${"w-full border-collapse border-2 border-gray-3 bg-white"}"><tr class="${"border-2 border-gray-3 odd:bg-gray-1"}"><th class="${"p-4 text-start text-lg font-bold text-blue"}">Title</th>
		<th class="${"p-4 text-start text-lg font-bold text-blue"}">Created On</th>
		<th class="${"p-4 text-end text-lg font-bold text-blue"}">#ID</th></tr>
	${each(snippets, (snippet) => {
    return `${validate_component(SnippetsTableItem, "SnippetsTableItem").$$render($$result, { snippet }, {}, {})}`;
  })}</table>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { snippets } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ha6obc_START -->${$$result.title = `<title>SnippetBox - Home</title>`, ""}<!-- HEAD_svelte-1ha6obc_END -->`, ""}

${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Latest Snippets`;
    }
  })}
${data.snippets.length === 0 ? `<p class="${"text-blue"}">There nothing to see here yet!
		${data.user ? `<a href="${"/snippets/create"}" class="${"text-green"}">Create some snippets.</a>` : ``}</p>` : `${validate_component(SnippetsTable, "SnippetsTable").$$render($$result, { snippets }, {}, {})}`}`;
});
export {
  Page as default
};

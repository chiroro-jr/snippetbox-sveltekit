import { c as create_ssr_component, e as escape } from "../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"bg-white rounded-md overflow-hidden text-blue border-2 border-gray-3"}"><div class="${"bg-gray-1 p-5 flex justify-between border-b-2 border-gray-2"}"><span class="${"font-bold"}">${escape(data.snippet?.title)}</span>
		<span class="${"text-gray-4"}">#${escape(data.snippet?.id)}</span></div>
	<div class="${"p-5 border-b-2 border-gray-2"}"><pre class="${"whitespace-pre-wrap"}">${escape(data.snippet?.content)}</pre></div>
	<div class="${"bg-gray-1 p-5 text-gray-4 flex justify-between"}"><span>Created On: ${escape(data.snippet?.createdAt)}</span>
		<span>Expires On: ${escape(data.snippet?.expiresAt)}</span></div></div>`;
});
export {
  Page as default
};

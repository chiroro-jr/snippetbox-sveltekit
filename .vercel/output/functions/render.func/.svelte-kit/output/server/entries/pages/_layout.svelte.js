import { c as create_ssr_component, e as escape, b as add_attribute, d as subscribe, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/utils.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = new Date().getFullYear();
  return `<footer class="${"border-t-2 border-gray-3 bg-gray-1"}"><p class="${"py-5 text-center text-gray-4"}">Powered by <a href="${"https://kit.svelte.dev/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"text-green"}">SvelteKit</a>
		in ${escape(currentYear)}</p></footer>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex items-center justify-center gap-2 py-10"}"><img src="${"/images/logo.png"}" alt="${"SnippetBox logo"}">
	<span class="${"text-3xl font-bold text-blue"}">SnippetBox</span></div>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoggedIn } = $$props;
  let { pathname } = $$props;
  if ($$props.isLoggedIn === void 0 && $$bindings.isLoggedIn && isLoggedIn !== void 0)
    $$bindings.isLoggedIn(isLoggedIn);
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<nav class="${"border-t-2 border-b-2 border-gray-3 bg-gray-1"}"><div class="${"mx-auto max-w-container px-5"}"><ul class="${"flex items-center justify-between"}"><ul class="${"flex gap-6"}"><li class="${["py-5", pathname == "/" ? "nav-decoration" : ""].join(" ").trim()}"><a href="${"/"}"${add_attribute("class", pathname == "/" ? "text-blue" : "text-green", 0)}>Home</a></li>
				${isLoggedIn ? `<li class="${["py-5", pathname == "/snippets/create" ? "nav-decoration" : ""].join(" ").trim()}"><a href="${"/snippets/create"}"${add_attribute(
    "class",
    pathname == "/snippets/create" ? "text-blue" : "text-green",
    0
  )}>Create New Snippet</a></li>` : ``}</ul>
			<ul class="${"flex gap-6"}">${isLoggedIn ? `<li class="${["py-5", pathname == "/signout" ? "nav-decoration" : ""].join(" ").trim()}"><form action="${"/signout"}" method="${"POST"}"><button class="${escape(pathname == "/signout" ? "text-blue" : "text-green", true) + " outline-none border-none"}">Sign Out</button></form></li>` : `<li class="${["py-5", pathname == "/signup" ? "nav-decoration" : ""].join(" ").trim()}"><a href="${"/signup"}"${add_attribute("class", pathname == "/signup" ? "text-blue" : "text-green", 0)}>Sign Up</a></li>
					<li class="${["py-5", pathname == "/signin" ? "nav-decoration" : ""].join(" ").trim()}"><a href="${"/signin"}"${add_attribute("class", pathname == "/signin" ? "text-blue" : "text-green", 0)}>Sign In</a></li>`}</ul></ul></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathname;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({ pathname } = $page.url);
  $$unsubscribe_page();
  return `<div class="${"app-grid | min-w-screen min-h-screen"}">
	<div class="${"gradient | fixed top-0 left-0 right-0 h-2"}"></div>
	${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
	${validate_component(NavBar, "NavBar").$$render($$result, { isLoggedIn: !!$page.data.user, pathname }, {}, {})}
	<main><div class="${"mx-auto max-w-container py-14 px-5"}">${slots.default ? slots.default({}) : ``}</div></main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};

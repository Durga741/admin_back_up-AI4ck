'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const designSystem = require('@strapi/design-system');
const reactIntl = require('react-intl');

const HomePageCE = () => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 10, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Root, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 8, s: 12, direction: "column", alignItems: "stretch", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 6, paddingBottom: 10, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "flex-start", gap: 5, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { tag: "h1", variant: "alpha", children: formatMessage({
      id: "ai4Mahila.welcome.title",
      defaultMessage: "Welcome to AI4Mahila"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "epsilon", textColor: "neutral600", children: formatMessage({
      id: "ai4Mahila.welcome.text",
      defaultMessage: "AI4Mahila is dedicated to empowering women through Artificial Intelligence. Join us as we work towards transforming communities and providing innovative AI-driven solutions."
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { size: "L", children: formatMessage({
      id: "ai4Mahila.button.join",
      defaultMessage: "Join the Movement"
    }) })
  ] }) }) }) }) }) });
};
const HomePage = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { children: /* @__PURE__ */ jsxRuntime.jsx(HomePageCE, {}) });
};

exports.HomePage = HomePage;
exports.HomePageCE = HomePageCE;
//# sourceMappingURL=HomePage-BIOTA8mR.js.map

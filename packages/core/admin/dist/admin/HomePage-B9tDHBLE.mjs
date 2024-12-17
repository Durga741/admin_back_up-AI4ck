import { jsx, jsxs } from 'react/jsx-runtime';
import { Main, Box, Grid, Flex, Typography, Button } from '@strapi/design-system';
import { useIntl } from 'react-intl';

const HomePageCE = () => {
  const { formatMessage } = useIntl();
  return /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsx(Box, { padding: 10, children: /* @__PURE__ */ jsx(Grid.Root, { children: /* @__PURE__ */ jsx(Grid.Item, { col: 8, s: 12, direction: "column", alignItems: "stretch", children: /* @__PURE__ */ jsx(Box, { paddingLeft: 6, paddingBottom: 10, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "flex-start", gap: 5, children: [
    /* @__PURE__ */ jsx(Typography, { tag: "h1", variant: "alpha", children: formatMessage({
      id: "ai4Mahila.welcome.title",
      defaultMessage: "Welcome to AI4Mahila"
    }) }),
    /* @__PURE__ */ jsx(Typography, { variant: "epsilon", textColor: "neutral600", children: formatMessage({
      id: "ai4Mahila.welcome.text",
      defaultMessage: "AI4Mahila is dedicated to empowering women through Artificial Intelligence. Join us as we work towards transforming communities and providing innovative AI-driven solutions."
    }) }),
    /* @__PURE__ */ jsx(Button, { size: "L", children: formatMessage({
      id: "ai4Mahila.button.join",
      defaultMessage: "Join the Movement"
    }) })
  ] }) }) }) }) }) });
};
const HomePage = () => {
  return /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsx(HomePageCE, {}) });
};

export { HomePage, HomePageCE };
//# sourceMappingURL=HomePage-B9tDHBLE.mjs.map

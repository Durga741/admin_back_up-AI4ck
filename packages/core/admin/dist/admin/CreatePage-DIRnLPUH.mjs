import { jsx } from 'react/jsx-runtime';
import { b as useTypedSelector, P as Page } from './Theme-DQRUlj-X.mjs';
import { E as EditPage } from './EditPage-BKHJSU_g.mjs';

const ProtectedCreatePage = () => {
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.webhooks.create
  );
  return /* @__PURE__ */ jsx(Page.Protect, { permissions, children: /* @__PURE__ */ jsx(EditPage, {}) });
};

export { EditPage as CreatePage, ProtectedCreatePage };
//# sourceMappingURL=CreatePage-DIRnLPUH.mjs.map

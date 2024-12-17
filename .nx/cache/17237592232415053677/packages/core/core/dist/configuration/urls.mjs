import _ from "lodash";
import { strings } from "@strapi/utils";
const getConfigUrls = (config, forAdminBuild = false) => {
  const serverConfig = config.server;
  const adminConfig = config.admin;
  let serverUrl = _.get(serverConfig, "url", "");
  serverUrl = _.trim(serverUrl, "/ ");
  if (typeof serverUrl !== "string") {
    throw new Error("Invalid server url config. Make sure the url is a string.");
  }
  if (serverUrl.startsWith("http")) {
    try {
      serverUrl = _.trim(new URL(serverConfig.url).toString(), "/");
    } catch (e) {
      throw new Error(
        "Invalid server url config. Make sure the url defined in server.js is valid."
      );
    }
  } else if (serverUrl !== "") {
    serverUrl = `/${serverUrl}`;
  }
  let adminUrl = _.get(adminConfig, "url", "/admin");
  adminUrl = _.trim(adminUrl, "/ ");
  if (typeof adminUrl !== "string") {
    throw new Error("Invalid admin url config. Make sure the url is a non-empty string.");
  }
  if (adminUrl.startsWith("http")) {
    try {
      adminUrl = _.trim(new URL(adminUrl).toString(), "/");
    } catch (e) {
      throw new Error("Invalid admin url config. Make sure the url defined in server.js is valid.");
    }
  } else {
    adminUrl = `${serverUrl}/${adminUrl}`;
  }
  let adminPath = adminUrl;
  if (serverUrl.startsWith("http") && adminUrl.startsWith("http") && new URL(adminUrl).origin === new URL(serverUrl).origin && !forAdminBuild) {
    adminPath = adminUrl.replace(strings.getCommonPath(serverUrl, adminUrl), "");
    adminPath = `/${_.trim(adminPath, "/")}`;
  } else if (adminUrl.startsWith("http")) {
    adminPath = new URL(adminUrl).pathname;
  }
  return {
    serverUrl,
    adminUrl,
    adminPath
  };
};
const getAbsoluteUrl = (adminOrServer) => (config, forAdminBuild = false) => {
  const { serverUrl, adminUrl } = getConfigUrls(config, forAdminBuild);
  const url = adminOrServer === "server" ? serverUrl : adminUrl;
  if (url.startsWith("http")) {
    return url;
  }
  const serverConfig = config.server;
  const hostname = config.environment === "development" && ["127.0.0.1", "0.0.0.0"].includes(serverConfig.host) ? "localhost" : serverConfig.host;
  return `http://${hostname}:${serverConfig.port}${url}`;
};
const getAbsoluteAdminUrl = getAbsoluteUrl("admin");
const getAbsoluteServerUrl = getAbsoluteUrl("server");
export {
  getAbsoluteAdminUrl,
  getAbsoluteServerUrl,
  getConfigUrls
};
//# sourceMappingURL=urls.mjs.map

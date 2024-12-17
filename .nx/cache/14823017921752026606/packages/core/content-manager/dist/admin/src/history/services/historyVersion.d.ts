import { Data } from '@strapi/types';
import { GetHistoryVersions, RestoreHistoryVersion } from '../../../../shared/contracts/history-versions';
interface RestoreVersion extends RestoreHistoryVersion.Request {
    documentId: Data.ID;
    collectionType?: string;
}
declare const useGetHistoryVersionsQuery: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseQuery<import("@reduxjs/toolkit/query").QueryDefinition<{
    contentType: import("@strapi/types/dist/uid").ContentType;
    documentId?: Data.ID | undefined;
    locale?: string | undefined;
} & Partial<Pick<import("../../../../shared/contracts/history-versions").Pagination, "page" | "pageSize">>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@strapi/admin/strapi-admin").QueryArguments, unknown, import("@strapi/admin/strapi-admin").BaseQueryError, {}, {}>, "ComponentConfiguration" | "ContentTypesConfiguration" | "ContentTypeSettings" | "Document" | "InitialData" | "HistoryVersion" | "Relations" | "UidAvailability", GetHistoryVersions.Response, "adminApi">>, useRestoreVersionMutation: import("@reduxjs/toolkit/dist/query/react/buildHooks").UseMutation<import("@reduxjs/toolkit/query").MutationDefinition<RestoreVersion, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@strapi/admin/strapi-admin").QueryArguments, unknown, import("@strapi/admin/strapi-admin").BaseQueryError, {}, {}>, "ComponentConfiguration" | "ContentTypesConfiguration" | "ContentTypeSettings" | "Document" | "InitialData" | "HistoryVersion" | "Relations" | "UidAvailability", RestoreHistoryVersion.Response, "adminApi">>;
export { useGetHistoryVersionsQuery, useRestoreVersionMutation };

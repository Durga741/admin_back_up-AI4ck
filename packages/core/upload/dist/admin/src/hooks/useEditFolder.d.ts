import { CreateFolders, UpdateFolder } from '../../../shared/contracts/folders';
interface EditFolderRequestParams {
    attrs: CreateFolders.Request['body'] | UpdateFolder.Request['body'];
    id?: UpdateFolder.Request['params']['id'];
}
export declare const useEditFolder: () => {
    editFolder: (attrs: EditFolderRequestParams['attrs'], id?: EditFolderRequestParams['id']) => Promise<import("../../../shared/contracts/folders").Folder>;
    status: "error" | "success" | "idle" | "loading";
    data: undefined;
    error: null;
    isError: false;
    isIdle: true;
    isLoading: false;
    isSuccess: false;
    mutate: import("react-query").UseMutateFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    isPaused: boolean;
    variables: EditFolderRequestParams | undefined;
    mutateAsync: import("react-query").UseMutateAsyncFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
} | {
    editFolder: (attrs: EditFolderRequestParams['attrs'], id?: EditFolderRequestParams['id']) => Promise<import("../../../shared/contracts/folders").Folder>;
    status: "error" | "success" | "idle" | "loading";
    data: undefined;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: true;
    isSuccess: false;
    mutate: import("react-query").UseMutateFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    isPaused: boolean;
    variables: EditFolderRequestParams | undefined;
    mutateAsync: import("react-query").UseMutateAsyncFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
} | {
    editFolder: (attrs: EditFolderRequestParams['attrs'], id?: EditFolderRequestParams['id']) => Promise<import("../../../shared/contracts/folders").Folder>;
    status: "error" | "success" | "idle" | "loading";
    data: undefined;
    error: import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined;
    isError: true;
    isIdle: false;
    isLoading: false;
    isSuccess: false;
    mutate: import("react-query").UseMutateFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    isPaused: boolean;
    variables: EditFolderRequestParams | undefined;
    mutateAsync: import("react-query").UseMutateAsyncFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
} | {
    editFolder: (attrs: EditFolderRequestParams['attrs'], id?: EditFolderRequestParams['id']) => Promise<import("../../../shared/contracts/folders").Folder>;
    status: "error" | "success" | "idle" | "loading";
    data: import("../../../shared/contracts/folders").Folder;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: false;
    isSuccess: true;
    mutate: import("react-query").UseMutateFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
    reset: () => void;
    context: unknown;
    failureCount: number;
    isPaused: boolean;
    variables: EditFolderRequestParams | undefined;
    mutateAsync: import("react-query").UseMutateAsyncFunction<import("../../../shared/contracts/folders").Folder, import("@strapi/utils/dist/errors").ApplicationError<"ApplicationError", string, unknown> | import("@strapi/utils/dist/errors").NotFoundError<string, unknown> | import("@strapi/utils/dist/errors").ValidationError<string, unknown> | undefined, EditFolderRequestParams, unknown>;
};
export {};

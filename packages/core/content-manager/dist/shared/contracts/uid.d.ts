import type { UID, Modules } from '@strapi/types';
import { errors } from '@strapi/utils';
type Entity = Modules.EntityService.Result<UID.Schema>;
/**
 * POST /uid/generate
 */
export declare namespace GenerateUID {
    interface Request {
        body: {
            contentTypeUID: string;
            data: Entity;
            field: string;
        };
        query: {
            locale?: string | null;
        };
    }
    interface Response {
        data: string;
        error?: errors.ApplicationError | errors.YupValidationError;
    }
}
/**
 * POST /uid/check-availability
 */
export declare namespace CheckUIDAvailability {
    interface Request {
        body: {
            contentTypeUID: string;
            field: string;
            value: string;
        };
        query: {
            locale?: string | null;
        };
    }
    type Response = {
        isAvailable: boolean;
        suggestion: string | null;
        error?: never;
    } | {
        isAvailable?: never;
        suggesiton?: never;
        error?: errors.ApplicationError | errors.YupValidationError;
    };
}
export {};
//# sourceMappingURL=uid.d.ts.map
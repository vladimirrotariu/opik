/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { Result } from "./Result";

export const WorkspaceMetricResponse: core.serialization.ObjectSchema<
    serializers.WorkspaceMetricResponse.Raw,
    OpikApi.WorkspaceMetricResponse
> = core.serialization.object({
    results: core.serialization.list(Result).optional(),
});

export declare namespace WorkspaceMetricResponse {
    export interface Raw {
        results?: Result.Raw[] | null;
    }
}

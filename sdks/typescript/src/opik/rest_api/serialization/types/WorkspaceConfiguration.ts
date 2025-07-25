/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const WorkspaceConfiguration: core.serialization.ObjectSchema<
    serializers.WorkspaceConfiguration.Raw,
    OpikApi.WorkspaceConfiguration
> = core.serialization.object({
    timeoutToMarkThreadAsInactive: core.serialization.property(
        "timeout_to_mark_thread_as_inactive",
        core.serialization.string().optional(),
    ),
});

export declare namespace WorkspaceConfiguration {
    export interface Raw {
        timeout_to_mark_thread_as_inactive?: string | null;
    }
}

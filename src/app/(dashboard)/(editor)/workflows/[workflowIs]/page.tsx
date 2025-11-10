import { Editor, EditorError, EditorLoading } from "@/features/editor/components/editor";
import { EditorHeader } from "@/features/editor/components/editor-header";
import { prefetchWorkflow } from "@/features/workflows/server/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface PageProps {
    params: Promise<{
        workflowIs : string;
    }>
}

const Page= async({params} : PageProps) =>{
    await requireAuth();
    const {workflowIs} = await params;
    prefetchWorkflow(workflowIs);
    return (
        <HydrateClient>
        <ErrorBoundary fallback={<EditorError/>}>
            <Suspense fallback={<EditorLoading/>}>
                <EditorHeader workflowId= {workflowIs}/>
                <main className="flex-1 ">
                    <Editor workflowId={workflowIs}/>                
                </main>
            </Suspense>
        </ErrorBoundary>
        </HydrateClient>
    );
};
export default Page;
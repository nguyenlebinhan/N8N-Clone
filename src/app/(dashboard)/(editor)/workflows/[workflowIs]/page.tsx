import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
    params: Promise<{
        workflowIs : string;
    }>
}

const Page= async({params} : PageProps) =>{
    await requireAuth();
    const {workflowIs} = await params;
    return (
        <div>Credential id :{workflowIs}</div>
    )
}
export default Page;
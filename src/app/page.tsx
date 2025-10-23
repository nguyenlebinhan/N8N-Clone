"use client";
import { LogoutButton } from "./logout";

import { useTRPC } from "@/trpc/client";
import { mutationOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () =>{
  const queryClient = useQueryClient();
  const trpc = useTRPC();
  const {data} = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess:() =>{
      toast.success("AI Job queued");
    },
    onError:()=>{
      toast.error("Something went wrong");
    }
  }));

  const create = useMutation(trpc.createWorkflow.mutationOptions());
  mutationOptions({
    onSuccess:()=>{
        toast.success("Job queued");
    }
  })


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      {/* <div>
        {JSON.stringify(data,null,2)}
      </div> */}
      <Button disabled={testAi.isPending} onClick={()=>testAi.mutate()}>
        Test AI
      </Button>
      <Button disabled={create.isPending} onClick={()=>create.mutate()}>
        Create WorkFlow
      </Button>
      <div>
        <LogoutButton/>
      </div>
  
    </div>

  )
}
export default Page

import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import {generateText} from 'ai';
import {google} from "@ai-sdk/google";

export const appRouter = createTRPCRouter({
  testAi:protectedProcedure.mutation(async() =>{
    await inngest.send({
      name:"execute/ai"
    })
    return {success : true,message :"Job queued"}  
  }),



  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
    
  }),
  createWorkflow: protectedProcedure.mutation(async ()=>{
      await inngest.send({
        name:"test/hello.world",
        data:{
          email:"nguyenlebinhank63@gmail.com"
        }
      })
    return {success : true,message :"Job queued"}  
  })

  

})
// export type definition of API
export type AppRouter = typeof appRouter;
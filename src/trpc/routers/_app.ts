
import { inngest } from '@/inngest/client';
import { createTRPCRouter, premiumProcedure, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import {generateText} from 'ai';
import {google} from "@ai-sdk/google";
import { TRPCError } from '@trpc/server';
import { logger } from 'better-auth';
import { workflowsRouter } from '@/features/workflows/server/routers';

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
})
export type AppRouter = typeof appRouter;
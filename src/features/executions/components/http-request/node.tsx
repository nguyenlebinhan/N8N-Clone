"use client"

import type {Node, NodeProps} from "@xyflow/react";
import {memo, useState} from "react";
import { BaseExecutionNode } from "../base-execution-node";
import { GlobeIcon } from "lucide-react";
import { set } from "zod";
import { HttpRequestDialog } from "./dialog";

type HttpRequestNodeData = {
    endpoint ?: string;
    method?: "GET"|"POST"|"PUT"|"DELETE"|"PATCH";
    body?:string;
    [key:string]:unknown;
};

type HttpRequestNodeType = Node<HttpRequestNodeData>;

export const HttpRequestNode = memo((props:NodeProps<HttpRequestNodeType>)=>{
    const [dialogOpen,setDialogOpen]=useState(false);
    const nodeStatus = "initial";   
    
    const handleOpenSettings =() => setDialogOpen(true);
    const nodeData =props.data as HttpRequestNodeData;
    const description = nodeData?.endpoint
        ? `${nodeData.method || "GET"}:${nodeData.endpoint}`
        :"Not figured";
    return (
        <>
            <HttpRequestDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onSubmit={()=>{}}
                defaultEndpoint={nodeData.endpoint}
                defaultMethod={nodeData.method}
                defaultBody={nodeData.body}
            />
            <BaseExecutionNode
                {...props}
                id={props.id}
                icon={GlobeIcon}
                name="HTTP Request"
                status = {nodeStatus}
                description={description}
                onSettings={handleOpenSettings}
                onDoubleClick={handleOpenSettings}
            />
        </>
    )    
})

HttpRequestNode.displayName="HttpRequestNode";
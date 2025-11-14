"use-client"

import { NodeType } from "@/generated/prisma"
import {createId} from "@paralleldrive/cuid2"
import { useReactFlow } from "@xyflow/react"
import { GlobeIcon,MousePointerIcon } from "lucide-react" 


export type NodeTypeOption = {
    type:NodeType,
    label:string,
    description: string,
    icon:React.ComponentType<{className?:string}> | string
}


const triggerNodes : NodeTypeOption[] =[
    {
        type: NodeType.MANUAL_TRIGGER,
        label: "Trigger manually",
        description:"Runs the flow on clicking a button. Good for getting started quickly",
        icon:MousePointerIcon
    }
]
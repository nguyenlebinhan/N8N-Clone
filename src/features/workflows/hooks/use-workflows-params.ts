import {useQueryStates} from "nuqs"
import { workflowParams } from "../params"

export const useWorkflowsParam = () =>{
    return useQueryStates(workflowParams);
}
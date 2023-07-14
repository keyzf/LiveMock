/**
 * add log filter
 */
import {LogFilterM} from "../log";

export interface CreateLogFilterPathParam {

}

export interface CreateLogFilterReqBody {
    projectId:string;
    logViewId:string;
    filter:LogFilterM;
}

export interface CreateLogFilterReqQuery {

}


/**
 * update log filter
 */
export interface UpdateLogFilterPathParam {
    logFilterId:string;
}

export interface UpdateLogFilterReqBody{
    projectId:string;
    logViewId:string;
    filter:LogFilterM;
}

export interface UpdateLogFilterReqQuery{

}


/**
 * delete log filter
 */
export interface DeleteLogFilterPathParam {
    logFilterId:string;
}

export interface DeleteLogFilterReqBody{

}

export interface DeleteLogFilterReqQuery{
    projectId:string;
    logViewId:string;
}
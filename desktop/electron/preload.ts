import {
  CreateProjectPathParam,
  CreateProjectReqBody,
  CreateProjectReqQuery,
  ListProjectPathParam,
  ListProjectReqBody,
  ListProjectReqQuery,
} from "core/struct/params/ProjectParams";
import {
  CreateProjectResponse,
  ListProjectResponse,
} from "core/struct/response/ProjectResponse";
import * as electron from "electron";
import {
  ActionEvents,
  ExpectationEvents, MatcherEvents,
  ProjectEvents,
} from "core/struct/events/desktopEvents";
import {
  CreateExpectationPathParam,
  CreateExpectationReqBody,
  CreateExpectationReqQuery,
  ListExpectationPathParam,
  ListExpectationReqBody,
  ListExpectationReqQuery,
  UpdateExpectationPathParam,
  UpdateExpectationReqBody,
  UpdateExpectationReqQuery,
} from "core/struct/params/ExpectationParams";
import { ListExpectationResponse } from "core/struct/response/ExpectationResponse";
import {
  CreateMatcherPathParam,
  CreateMatcherReqBody,
  CreateMatcherReqQuery, DeleteMatcherPathParam,
  DeleteMatcherReqBody,
  DeleteMatcherReqQuery,
  UpdateMatcherPathParam,
  UpdateMatcherReqBody,
  UpdateMatcherReqQuery
} from "core/struct/params/MatcherParams";
import {
  CreateActionPathParam,
  CreateActionReqBody, CreateActionReqQuery,
  DeleteActionPathParam,
  DeleteActionReqBody,
  DeleteActionReqQuery, UpdateActionPathParam,
  UpdateActionReqBody, UpdateActionReqQuery
} from "core/struct/params/ActionParams";
const ipcRenderer = electron.ipcRenderer;

// ----------------------------------------------------------------------

export const api = {
  project: {
    listProject: (
      reqParam: ListProjectPathParam,
      reqQuery: ListProjectReqQuery,
      reqBody: ListProjectReqBody
    ): Promise<ListProjectResponse> => {
      return ipcRenderer.invoke(
        ProjectEvents.ListProject,
        reqParam,
        reqQuery,
        reqBody
      );
    },
    createProject: (
      reqParam: CreateProjectPathParam,
      reqQuery: CreateProjectReqQuery,
      reqBody: CreateProjectReqBody
    ): Promise<CreateProjectResponse> => {
      return ipcRenderer.invoke(
        ProjectEvents.CreateProject,
        reqParam,
        reqQuery,
        reqBody
      );
    },
    startProject: () => {
      return ipcRenderer.invoke(ProjectEvents.StartProject, () => {});
    },
    updateProject: () => {
      return ipcRenderer.invoke(ProjectEvents.UpdateProject, () => {});
    },
  },
  expectation: {
    createExpectation: (
      reqParam: CreateExpectationPathParam,
      reqQuery: CreateExpectationReqQuery,
      reqBody: CreateExpectationReqBody
    ) => {
      return ipcRenderer.invoke(ExpectationEvents.CreateExpectation, reqParam,reqQuery,reqBody);
    },
    updateExpectation: (
      reqParam: UpdateExpectationPathParam,
      reqQuery: UpdateExpectationReqQuery,
      reqBody: UpdateExpectationReqBody
    ) => {},
    listExpectation: (
      reqParam: ListExpectationPathParam,
      reqQuery: ListExpectationReqQuery,
      reqBody: ListExpectationReqBody
    ): Promise<ListExpectationResponse> => {
      return ipcRenderer.invoke(
        ExpectationEvents.ListExpectation,
        reqParam,
        reqQuery,
        reqBody
      );
    },
  },
  matcher:{
    createMatcher: (
        reqParam: CreateMatcherPathParam,
        reqQuery: CreateMatcherReqQuery,
        reqBody: CreateMatcherReqBody
    ) => {
      return ipcRenderer.invoke(MatcherEvents.CreateMatcher,reqParam,reqQuery,reqBody);
    },
    updateMatcher: (
        reqParam: UpdateMatcherPathParam,
        reqQuery: UpdateMatcherReqQuery,
        reqBody: UpdateMatcherReqBody
    ) => {
      return ipcRenderer.invoke(MatcherEvents.UpdateMatcher,reqParam,reqQuery,reqBody);
    },
    deleteMatcher: (
        reqParam: DeleteMatcherPathParam,
        reqQuery: DeleteMatcherReqQuery,
        reqBody: DeleteMatcherReqBody
    ) => {
      return ipcRenderer.invoke(MatcherEvents.DeleteMatcher,reqParam,reqQuery,reqBody);
    },
  },
  action:{
    createAction: (
        reqParam: CreateActionPathParam,
        reqQuery: CreateActionReqQuery,
        reqBody: CreateActionReqBody
    ) => {
      return ipcRenderer.invoke(ActionEvents.CreateAction,reqParam,reqQuery,reqBody);
    },
    updateAction: (
        reqParam: UpdateActionPathParam,
        reqQuery: UpdateActionReqQuery,
        reqBody: UpdateActionReqBody
    ) => {
      return ipcRenderer.invoke(ActionEvents.UpdateAction,reqParam,reqQuery,reqBody);
    },
    deleteAction: (
        reqParam: DeleteActionPathParam,
        reqQuery: DeleteActionReqQuery,
        reqBody: DeleteActionReqBody
    ) => {
      return ipcRenderer.invoke(ActionEvents.DeleteAction,reqParam,reqQuery,reqBody);
    },
  }
};

electron.contextBridge.exposeInMainWorld("api", api);

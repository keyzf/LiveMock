import {
  IMatcher,
  HeaderMatcherM,
  StringMatcherCondition,
} from "core/struct/matcher";
import express from "express";
import * as matchUtils from "./matchUtils";
import _ from 'lodash';
import {matchAnyValue} from "./matchUtils";

class HeaderMatcher implements IMatcher {
  matcher: HeaderMatcherM;

  constructor(matcher: HeaderMatcherM) {
    this.matcher = matcher;
  }

  match(req: express.Request): boolean {
    let header = req.header(this.matcher.name);
    return matchAnyValue(header,this.matcher);
  }
}

export default HeaderMatcher;

import fromPairs from "lodash.frompairs";
import { parseStateDuration } from "./parseStateDuration";
import { modifyDictValues } from "./modifyDictValues";
import { IStepContext } from "./useStepContext";

export const parseDictDuration = (duration: any) =>
  fromPairs(
    modifyDictValues<string, number>((i) => parseStateDuration(i))(duration),
  ) as IStepContext["duration"];

import { JSArray } from "./jsArray/JsArrayOne";
import { ReactNativeArray } from "./rnArray/RnArray";

const oneArray = JSArray.slice(0, 1);
const twoArray = ReactNativeArray.slice(0, 1);
const oneThree = JSArray.slice(1, 2);

const oneArraya = ReactNativeArray.slice(1, 2);
const twoArraya = JSArray.slice(2, 3);
const oneThreea = ReactNativeArray.slice(2, 3);

export const allTopics = [...JSArray, ...ReactNativeArray];
export const topics = [...oneArray, ...twoArray, ...oneThree,...oneArraya, ...twoArraya, ...oneThreea];

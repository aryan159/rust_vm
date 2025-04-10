import { initialise } from "conductor/dist/conductor/runner/util/";
import { RustEvaluator } from "./RustEvaluator";

const {runnerPlugin, conduit} = initialise(RustEvaluator);

console.log("hello world from index.ts")
// conduit(program).then(result => {
//   console.log("Result:", result);
// }).catch(err => {
//   console.error("Evaluation error:", err);
// });
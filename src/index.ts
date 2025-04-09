import { initialise } from "conductor/dist/conductor/runner/util/";
import { SimpleLangEvaluator } from "./SimpleLangEvaluator";

const {runnerPlugin, conduit} = initialise(SimpleLangEvaluator);

console.log("hello world")

const program = "2 + (3 * 4)";
// conduit(program).then(result => {
//   console.log("Result:", result);
// }).catch(err => {
//   console.error("Evaluation error:", err);
// });
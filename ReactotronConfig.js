import Reactotron, { openInEditor } from "reactotron-react-native";
const reactotron = Reactotron.configure({
  host: "192.168.68.105",
}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(openInEditor())
  .connect(); // let's connect!

reactotron.clear();
console.tron = reactotron;
export default reactotron;

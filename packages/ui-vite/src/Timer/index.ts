import Timer from "./Timer";
import { App } from "vue";

export { Timer };
export default {
  install(app: App) {
    app.component(Timer.name, Timer);
  },
};

import { App } from "vue";
import MButton from "./button";
import MInput from "./input";
import MToast from "./toast/index.vue";
import MTimer from "./timer";

// type Tnames = 'MButton' | 'MInput' | 'MToast' | 'MTimer'
// type Telem = Record<Tnames, Component>
// const files = import.meta.glob(['/src/**/*.tsx', '/src/**/*.vue', '/src/**/*.ts'], { eager: true, import: 'default', })
// const elements: Telem = Object.getOwnPropertyNames(files).reduce((o, c) => {
//   const [, name] = /src\/([^\/]+)\//gi.exec(c)
//   const key = name.replace(/^([a-z])/gi, (_, $1) => $1.toUpperCase())
//   o[`M${key}`] = files[c]
//   return o
// }, {} as Record<Tnames, unknown>)
// const { MButton, MInput, MToast, MTimer } = elements
const components = [MButton, MInput, MToast, MTimer];

// 导出单独组件
export { MButton, MInput, MToast, MTimer };
// 全部导出
export default {
  install(app: App): void {
    components.forEach((c) => {
      // console.log('注册组件', c.name);
      app.component(c.name, c);
    });
  },
};

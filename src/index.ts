import { createApp } from "vue/dist/vue.esm-browser";

import MaasUI from './entry'

const options = {
  template: `
       <div style="margin-bottom:20px;">
       <MButton color="blue">主要按钮</MButton>
       <MButton color="green">绿色按钮</MButton>
       <MButton color="gray">灰色按钮</MButton>
       <MButton color="yellow">黄色按钮</MButton>
       <MButton color="red">红色按钮</MButton>
   </div>
   <div style="margin-bottom:20px;"
   >
       <MButton color="blue" plain>朴素按钮</MButton>
       <MButton color="green" plain>绿色按钮</MButton>
       <MButton color="gray" plain>灰色按钮</MButton>
       <MButton color="yellow" plain>黄色按钮</MButton>
       <MButton color="red" plain>红色按钮</MButton>
   </div>
   <div style="margin-bottom:20px;">
       <MButton size="small" plain>小按钮</MButton>
       <MButton size="medium" plain>中按钮</MButton>
       <MButton size="large" plain>大按钮</MButton>
   </div>
   <div style="margin-bottom:20px;">
       <MButton color="blue" round plain icon="search">搜索按钮</MButton>
       <MButton color="green" round plain icon="edit">编辑按钮</MButton>
       <MButton color="gray" round plain icon="check">成功按钮</MButton>
       <MButton color="yellow" round plain icon="message">提示按钮</MButton>
       <MButton color="red" round plain icon="delete">删除按钮</MButton>
   </div>
   <div style="margin-bottom:20px;">
       <MButton color="blue" round plain icon="search"></MButton>
       <MButton color="green" round plain icon="edit"></MButton>
       <MButton color="gray" round plain icon="check"></MButton>
       <MButton color="yellow" round plain icon="message"></MButton>
       <MButton color="red" round plain icon="delete"></MButton>
   </div>
       `
}

createApp(options)
  .use(MaasUI)
  .mount("#app");


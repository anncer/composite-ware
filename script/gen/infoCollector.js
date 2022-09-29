const inquirer = require('inquirer');
// import { inquirer } from 'inquirer'
const fs = require("fs-extra");
const { resolve } = require("path");

const listFilePath = "../../packages/components";

const RegxMap = {
  IS_COMP_NAME: /^[a-z]{1,}(\-{0,1}[a-z]{1,})+$/,
  IS_COMP_ZH_NAME:
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
};

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

module.exports = async () => {
  const meta = await inquirer.prompt([
    {
      type: "input",
      message: "请输入你要新建的组件名（纯英文，大写开头, 如果名称有多个单词,请以 '-' 连接）：",
      name: "compName",
      validate(answer) {
        const done = this.async();
        const validateRes = RegxMap.IS_COMP_NAME.test(answer);
        if (!validateRes) {
          done("请按要求输入正确的组件名！");
          return;
        }
        const listData = fs.readdirSync(resolve(__dirname, listFilePath))
        if (listData.find((item) => item.compName === answer)) {
          done("已存在同名文件，请确认后更换名字再重试。");
          return;
        }
        done(null, true);
      }
    },
    {
      type: "input",
      message: "请输入你要新建的组件名（中文）：",
      name: "compZhName",
      validate(answer) {
        const done = this.async();
        const validateRes = RegxMap.IS_COMP_ZH_NAME.test(answer);
        if (!validateRes) {
          done("请按要求输入正确的组件名！");
          return;
        }
        done(null, true);
      }
    },
    {
      type: "input",
      message: "请输入组件的功能描述：",
      name: "compDesc",
      default: "默认：这是一个新组件"
    }
  ]);
  const { compName } = meta;
  // meta.compClassName = kebabCase(compName);
  meta.tf = compName.split('-').map(it => {
    if (it.length > 1) {
      return it.slice(0,1).toUpperCase() + it.slice(1, it.length )
    } else {
      return it.toUpperCase()
    }
  }).join("")
  return meta;
};

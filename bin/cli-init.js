#!/usr/bin/env node

//初始化模板,调用格式为 lxl-cli-init <模板名> <别名>

const commd = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const template = require(`${__dirname}/../template.json`)

commd.usage('<template-name> [project-name]')

// 解析命令行参数
commd.parse(process.argv)


// 当没有输入参数的时候给个提示
if (commd.args.length < 1) return commd.help()


// 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
let templateName = commd.args[0] //下载的模板名称
let projectName = commd.args[1] //为下载后的模板重命名


if (!template[templateName]) {
   console.log(chalk.red('\n 不存在该模板! \n '))
   return
 }
 if (!projectName) {
   console.log(chalk.red('\n 项目名称不能为空! \n '))
   return
 }
 url = template[templateName]

 //开始下载
const spinner = ora("Downloading...");
spinner.start();


download (
   url,
   projectName,
   err => {
     if (err) {
       spinner.fail();
       console.log(chalk.red(`模板初始化失败. ${err}`))
       return
     }
 
     spinner.succeed();
     console.log(chalk.green('\n 模板初始化成功!'))
   }
 )
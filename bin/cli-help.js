#!/usr/bin/env node

const chalk = require('chalk')
const commd  = require('commander')

//定义帮助面板,调用格式为 lxl-cli-help

commd
   .version(require('../package.json').version)
   .usage('<command> [options]')
   .command(chalk.yellow('cli-add'), chalk.green('可以上传一个新模板'))
   .command(chalk.yellow('cli-delete'), chalk.green('可以删除一个模板'))
   .command(chalk.yellow('cli-show'), chalk.green('展示所有模板'))
   .command(chalk.yellow('cli-init'), chalk.green('初始化一个模板'))


// 解析命令行参数
commd.parse(process.argv)
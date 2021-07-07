#!/usr/bin/env node

//删除模板,调用格式为 lxl-cli-delete

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const template = require(`${__dirname}/../template.json`)


let delQuestion = [
    {
      name: "name",
      message: "请输入要删除的模板名称",
      validate (name) {
        if (name === '') {
          return chalk.red( '模板名称不能为空!')
        } else if (!template[name]) {
            return chalk.red( '不存在该模板,请重新检查输入!')
        } else  {
          return true
        }
      }
    }
  ]

  inquirer
  .prompt(delQuestion).then(answers => {
    // answers 就是用户输入的内容
    let { name } = answers;
    delete template[name]
    // 更新 template.json 文件
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(template), 'utf-8', err => {
      if (err) console.log(err)
      console.log('\n')
      console.log(chalk.green('模板删除成功!\n'))
    })
  })
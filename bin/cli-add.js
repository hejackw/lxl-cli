#!/usr/bin/env node

//添加模板,调用格式为 lxl-cli-add

//和用户交互的插件
const inquirer = require('inquirer')

//可以修改命令行交互样式
const chalk = require('chalk')

const fs = require('fs')

//读取模板,也就是template.json
const template = require(`${__dirname}/../template.json`)


//添加模板的交互问题

let addQuestion = [
   {
      name:"name",
      type:"input",
      message:"请输入模板名称:",
      validate(name){
         if(name === ''){
            return chalk.red("模板名称不能为空.")
         }else if(template[name]){
            return chalk.red("该模板名称已被使用,请重新输入.")
         }else{
            return true
         }
      }
   },
   {
      name:"url",
      type:"input",
      message:"请输入模板地址(GitHub):",
      validate(url){
         if(url === ''){
            return chalk.red("模板地址不能为空.")
         }else{
            return true
         }
      }
   }
]

//交互
inquirer.prompt(addQuestion).then((answers)=>{
   let {name,url} = answers

    // 过滤 unicode 字符
    template[name] = url.replace(/[\u0000-\u0019]/g, '')

   //把用户输入的模板记录在template.json中
   fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(template), 'utf-8', err => {
      if (err) console.log(err)
      console.log(chalk.green('添加成功!\n'))
    })


})
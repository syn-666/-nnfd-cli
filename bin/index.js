#! /usr/bin/env node
import { execa } from "execa";
import { program } from "commander";


program
	.name("nn cli")
	.description("a simple cli by nn")
	.version("0.0.1", '-v');

program
	.command("wechat")
	.description("打开微信小程序文档")
	.action(async () => {
        await execa('open', ['https://developers.weixin.qq.com/miniprogram/dev/framework/'])
	});

program
	.command("my")
	.description("打开微信小程序文档")
	.action(async () => {
        await execa('open', ['https://opendocs.alipay.com/mini/framework'])
	});

program
	.command("my")
	.description("打开支付宝小程序文档")
	.action(async () => {
        await execa('open', ['https://opendocs.alipay.com/mini/framework'])
	});

program
	.command("mdn")
	.description("打开MDN文档")
	.action(async () => {
        await execa('open', ['https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference'])
	});

    
    
program.parse(process.argv);


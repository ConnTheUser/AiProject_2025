环境准备：
	1、客户端安装matlab_agent脚本服务，并点击startup.bat启动
	2、服务端安装nodev21.7.3，如果没有安装yarn，需要执行npm install -g yarn进行全局安装
	3、服务端下载NextChat项目，把modules.zip解压放到项目根目录。其中.next是编译后的代码，node_modules是项目依赖
	4、执行命令
	cd NextChat
	yarn install
	yarn build 
	yarn start

tips:NextChat都是调用的本地matlab_agent接口，所以无需进行任何改动直接使用即可。
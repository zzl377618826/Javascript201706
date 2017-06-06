## git

### github上存储项目代码
1.git 是github的操作工具
2. 存储功能
3. 产生历史记录 查找责任人
4. 版本回退功能
5. 多人协作

### 安装
- windows
[git官网](https://git-scm.com/downloads)

- Mac
	[Homebrew](https://brew.sh/index_zh-cn.html)
	在终端输入以下命令
```
 /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
然后 安装git
```
brew install git
```

###注册github账号
[github官网](https://github.com/)

## 把远程仓库clone下来
### clone
```
git clone 仓库地址
```
### 在git仓库里都有一个隐藏的.git文件

### git使用
- 第一次使用的时候需要配置邮箱和用户名
```
git config --global user.email "你的邮箱"

git config --global user.name "你的称呼"
```

### 将本地修改上传到远程仓库
1.添加到暂存区
```
git add ./-A(添加所有)
```
2.提交到历史区
```
git commit -m"修改描述"
```
3.确保和远程是最新的
拉取远程仓库
```
git pull origin master
```
4.将本地仓库修改推送到远程仓库
```
git push origin master
```

### 如何拉取别人仓库
- 将别人仓库clone下来
```
git clone 别人的仓库地址
```
- 以后拉取最新状态
```
git pull origin master
```

### 查看当前仓库和哪些远程仓库建立了联系
```
git remote -v
```
- 添加别人的仓库联系
```
git remote add 名称 别人的远程仓库地址
```

## git 创建方式二
1.将本地原有的目录初始化为本地仓库
```
git init
```
2.在github上创建一个空远程仓库

3.将本地仓库和远程仓库建立联系
```
git remote add origin 远程仓库地址
```
### .gitignore git忽略文件


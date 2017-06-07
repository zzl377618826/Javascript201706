## git 老师仓库
####方式一（clone下来后不能做任何修改）
1.将老师仓库clone下来
```
git clone 老师仓库地址
```

2.以后同步更新
```
git pull origin master
```

#### 方式二
1.进入到老师仓库 => 右上角Fork 将老师的仓库（201706js.git） Fork 一份到自己GitHub仓库中
2. 将自己github中的仓库（201706js.git） clone 到本地
```
git clone 201706js.git
```

3.和老师仓库建立联系
```
 git remote add teacher https://github.com/Lwenli/201706js.git

```

4.以后得到老师的更新
（1）更新与老师的链接状态
```
 git remote update teacher
```
（2）将老师的更新拉取下来
```
git pull teacher master
```
(3)自己的本地和自己的远程仓库同步
```
git add .
git commit -m"update"
git pull origin master
git push origin master
```

### 如果本地仓库出问题解决不了 直接 删除掉 从新clone一个到本地
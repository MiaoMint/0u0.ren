# 0u0.ren

这里是我的个人主页

## 和我成为朋友

当你想要添加友链时，你可以通过修改仓库中的 `config.ts` 文件来添加你的的站点信息。下面是一些步骤帮助您完成这个过程：

1. 在仓库中找到名为 `config.ts`（或者类似的）的文件。这个文件包含了你的网站配置信息。

2. 打开 [`config.ts`](https://github.com/MiaoMint/0u0.ren/blob/main/src/config.ts#L53) 文件，找到一个用于存储友链信息的数组或对象。它可能看起来像这样：

 ```typescript
  friends: [
    {
      title: "ilunp",
      icon: "https://avatars.githubusercontent.com/u/46992517?v=4",
      link: "https://ilunp.com/",
      description: "一个二比卵子罢了",
    },
    {
      title: "SuemorのBlog",
      icon: "https://y.suemor.com/images89030875.jpeg",
      link: "https://www.suemor.com/",
      description: "所谓自由就是可以说二加二等于四的自由",
    },
...
]
 ```

3. 在数组或对象中添加一个新的友链条目。

请确保修改 `title` `icon` `link` 和 `description` 以匹配你要添加的友链的名称和链接。

4. 提交你对 `config.ts` 文件的修改。你可以通过创建一个新的分支，并向主页仓库提交一个 Pull Request（PR）来完成这一步骤。

 - 创建一个新的分支：打开仓库页面，点击 "Branch"（分支）按钮，输入一个分支名称，然后点击 "Create branch"（创建分支）。

 - 修改 `config.ts`：在新创建的分支上找到并修改 `config.ts` 文件，添加你的友链信息。

 - 提交一个 Pull Request：在仓库页面中的 "Pull requests"（拉取请求）选项卡下点击 "New pull request"（新建拉取请求），选择你的修改分支和主页仓库的默认分支进行比较，然后点击 "Create pull request"（创建拉取请求）。

5. 等待你的 Pull Request 被审查和合并。我审查你的修改，并在确认无误后将其合并到主页仓库中。

完成以上步骤后，你的友链就应该成功地添加到了你的主页中。请确保提供正确的友链名称和链接，并尽量遵守仓库的贡献规范和流程。希望这可以帮到你！如果你有任何其他问题，请随时问我。

# VsCode

## VS Code快捷键

VS Code用得熟不熟，首先就看你是否会用快捷键。以下列出的内容，都是常用快捷键，而加粗部分的快捷键，使用频率则非常高。

掌握10%的内容，足矣应对90%的工作。熟练使用它们，你就已经很牛了。

### 移动光标

| Mac快捷键   | Win快捷键   | 作用                       | 备注   |
| ----------- | ----------- | -------------------------- | ------ |
| **Cmd + ←** | **Fn + ←**  | 将光标定位到当前行的最左侧 | 很常用 |
| **Cmd + →** | **Fn + →**  | 将光标定位到当前行的最右侧 | 很常用 |
| Cmd + ↑     | Ctrl + Home | 将光标定位到文章的第一行   |        |
| Cmd + ↓     | Ctrl + End  | 将光标定位到文章的最后一行 |        |

根据上面的快捷键，我们可以举一反三。补充如下：

- 「方向键」：在**单个字符**之间移动光标
- 「option + 左右方向键」：在**单词**之间移动光标（很常用）。注：Win 快捷键是「Ctrl + 左右方向键」。
- 「Cmd + 左右方向键」：在**整行**之间移动光标（很常用）。注：Win 的快捷键是「Fn + 左右方向键」
- 「`Cmd + Shift + \`」：在**代码块**之间移动光标。

### 删除操作

| Mac快捷键              | Win快捷键            | 作用                   | 备注                                      |
| ---------------------- | -------------------- | ---------------------- | ----------------------------------------- |
| **option + Backspace** | **Ctrl + Backspace** | 删除光标之前的一个单词 | 英文有效，很常用                          |
| option + delete        | Ctrl + delete        | 删除光标之后的一个单词 |                                           |
| **Cmd + delete**       |                      | 删除光标之前的整行内容 | 很常用                                    |
| Cmd + delete           |                      | 删除光标之后的整行内容 |                                           |
| Cmd + shift + K        | Ctrl + Shift + K     | 删除整行               | 「Cmd + X」的作用是剪切，但也可以删除整行 |

备注：上面所讲到的移动光标、删除操作的快捷键，在其他编辑器里，也是同样的操作。

### 编辑操作

| Mac快捷键       | Win快捷键    | 作用                               | 备注                                   |
| --------------- | ------------ | ---------------------------------- | -------------------------------------- |
| **Cmd + Enter** | Ctrl + Enter | 在当前行下面新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向下插入一行 |
| **Option + ↑**  | Alt + ↑      | 将代码向上移动                     | 很常用                                 |
| **Option + ↓**  | Alt + ↓      | 将代码向下移动                     | 很常用                                 |

### JS语言相关

| Mac快捷键              | Win快捷键       | 作用                         | 备注                             |
| ---------------------- | --------------- | ---------------------------- | -------------------------------- |
| Cmd + /                | Ctrl + /        | 添加单行注释                 | 很常用                           |
| **Option + Shift + F** | Alt + shift + F | 代码格式化                   | 很常用                           |
| Ctrl + J               |                 | 将多行代码合并为一行         | Win 用户可在命令面板搜索”合并行“ |
| Cmd +                  |                 |                              |                                  |
| Cmd + U                | Ctrl + U        | 将光标的移动回退到上一个位置 | 撤销光标的移动和选择             |

### 跳转操作

| Mac快捷键       | Win快捷键        | 作用                                 | 备注   |
| --------------- | ---------------- | ------------------------------------ | ------ |
| **Ctrl + Tab**  | **Ctrl + Tab**   | 在已经打开的文件之间进行跳转         |        |
| **Cmd + P**     | Ctrl + P         | 在当前的项目工程里，**全局**搜索文件 | 很常用 |
| **Ctrl + G**    | **Ctrl + G**     | 跳转到指定行                         |        |
| Cmd + Shift + O | Ctrl + shift + O | 在当前文件的各种**方法之间**进行跳转 |        |

### 搜索

| Mac快捷键           | Win快捷键       | 作用                               | 备注   |
| ------------------- | --------------- | ---------------------------------- | ------ |
| Cmd + F             | Ctrl + F        | 在当前文件中搜索，光标在搜索框里   |        |
| Cmd + G             | F3              | 在当前文件中搜索，光标仍在编辑器里 |        |
| **Cmd + Shift + F** | Ctrl + Shift +F | 全局搜索                           | 很常用 |

### 多光标的使用

**技巧1**：按住 「Option」键（windows 用户是按住「Alt」键） ，然后在页面中希望中现光标的位置点击鼠标。

**技巧2**：选中某个文本，然后反复按住快捷键「 Cmd + D 」键（windows 用户是按住「Ctrl + D」键）， 即可将全文中与光标当前所在位置的词相同的词逐一加入选择。

**技巧3**：选中一堆文本后，按住「Option + Shift + i」键（windows 用户是按住「Alt + Shift + I」键），既可在**每一行的末尾**都创建一个光标。

### 工作区快捷键

| Mac快捷键                     | Win快捷键              | 作用                             | 备注                 |
| ----------------------------- | ---------------------- | -------------------------------- | -------------------- |
| **Cmd + B**                   | Ctrl + B               | 显示/隐藏侧边栏                  | 很实用               |
| `Cmd + \`                     | `Ctrl + \`             | 创建多个编辑器                   | 比较实用             |
| **Cmd + Option + 左右方向键** | Ctrl + Pagedown/Pageup | 在已经打开的文件之间进行**切换** | 非常实用             |
| Ctrl + Tab                    | Ctrl + Tab             | 在已经打开的文件之间进行跳转     | 不如上面的快捷键实用 |
| Cmd + J                       | Ctrl + J               | 显示/隐藏控制台                  |                      |

### 自定义快捷键

按住快捷键「Cmd + Shift + P」，弹出命令面板，在命令面板中输入“快捷键”，可以进入快捷键的设置。

当然，你也可以选择菜单栏「偏好设置 --> 键盘快捷方式」，进入快捷键的设置：

[![img](https://camo.githubusercontent.com/b70f994059dae544e2eeac253d7b23b77f36f390/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f323132302e706e67)](https://camo.githubusercontent.com/b70f994059dae544e2eeac253d7b23b77f36f390/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f323132302e706e67)

### 快捷键列表

你可以点击 VS Code 左下角的齿轮按钮，效果如下：

[![img](https://camo.githubusercontent.com/c4543a3562bbd9f61f631dc3d3dc566b937980c2/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313733382e706e67)](https://camo.githubusercontent.com/c4543a3562bbd9f61f631dc3d3dc566b937980c2/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313733382e706e67)

上图中，在展开的菜单中选择「键盘快捷方式」，就可以查看和修改所有的快捷键列表了：

[![img](https://camo.githubusercontent.com/6a0ccd5d76c839d5f1c3a33356771755bf43ab3a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313733392e706e67)](https://camo.githubusercontent.com/6a0ccd5d76c839d5f1c3a33356771755bf43ab3a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313733392e706e67)

## VS Code 的常见设置项

### 面包屑（Breadcrumb）

打开 VS Code 的设置项，选择「用户设置 -> 工作台 -> 导航路径」，如下图所示：

[![img](https://camo.githubusercontent.com/af61d4db2ce53dedd0a96baf7122e128f6eb1a0b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323030352e706e67)](https://camo.githubusercontent.com/af61d4db2ce53dedd0a96baf7122e128f6eb1a0b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323030352e706e67)

上图中，将红框部分打钩即可。

设置成功后，我们就可以查看到当前文件的「层级结构」，非常方便。如下图所示：

[![img](https://camo.githubusercontent.com/d29f58a183b5ab082c3db18dca6a3b7efc9271da/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323030392e706e67)](https://camo.githubusercontent.com/d29f58a183b5ab082c3db18dca6a3b7efc9271da/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323030392e706e67)

### 是否显示代码的行号

VS Code 默认显示代码的行号。你可以在设置项里搜索 `editor.lineNumbers`修改设置，配置项如下：

[![img](https://camo.githubusercontent.com/85d4b0824634db794d76f5829dd3a64c23e7fd7b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323134302e706e67)](https://camo.githubusercontent.com/85d4b0824634db794d76f5829dd3a64c23e7fd7b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323134302e706e67)

我建议保留这个设置项，无需修改。

### 右侧是否显示代码的缩略图

VS Code 会在代码的右侧，默认显示缩略图。你可以在设置项里搜索 `editor.minimap`进行设置，配置项如下：

[![img](https://camo.githubusercontent.com/2691fa58159c54bd454d86a7670062699c4f2ef3/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323135362e706e67)](https://camo.githubusercontent.com/2691fa58159c54bd454d86a7670062699c4f2ef3/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323135362e706e67)

### 将当前行代码高亮显示

当我们把光标放在某一行时，这一行的背景色并没有发生变化。如果想**高亮显示**当前行的代码，你可以在设置项里搜索`editor.renderLineHighlight`进行设置。配置项如下：

我设置完之后，发现效果不是很明显。有待优化。

### 空格 or 制表符

VS Code 会根据你所打开的文件来决定该使用空格还是制表。也就是说，如果你的项目中使用的都是制表符，那么，当你在写新的代码时，按下tab 键后，编辑器就会识别成制表符。

常见的设置项如下：

- **editor.detectIndentation**：自动检测（默认开启）。截图如下：

[![img](https://camo.githubusercontent.com/9c2d3fc5c54252d47eb60e71e3a8b8ad363159a5/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323230352e706e67)](https://camo.githubusercontent.com/9c2d3fc5c54252d47eb60e71e3a8b8ad363159a5/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323230352e706e67)

- **editor.insertSpaces**：按 Tab 键时插入空格（默认）。截图如下：

[![img](https://camo.githubusercontent.com/143a471b8b5812c8ea010c613e790d723f5e8e4d/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323230372e706e67)](https://camo.githubusercontent.com/143a471b8b5812c8ea010c613e790d723f5e8e4d/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323230372e706e67)

- **editor.tabSize**：一个制表符默认等于四个空格。截图如下：

[![img](https://camo.githubusercontent.com/c4520f2936c71a5ab6d356c35271db33d4b046e6/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323230392e706e67)](https://camo.githubusercontent.com/c4520f2936c71a5ab6d356c35271db33d4b046e6/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323230392e706e67)

### 改完代码后立即自动保存

改完代码后，默认不会自动保存。你可以在设置项里搜索`files.autoSave`，修改配置项如下：

[![img](https://camo.githubusercontent.com/f4b7408d3323e9356a0b79f66ec5fcf81673810b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323231362e706e67)](https://camo.githubusercontent.com/f4b7408d3323e9356a0b79f66ec5fcf81673810b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323231362e706e67)

上图中，我们将配置项修改为`onFocusChange`之后，那么，当光标离开该文件后，这个文件就会自动保存了。**非常方便**。

### 保存代码后，是否立即格式化

保存代码后，默认**不会立即**进行代码的格式化。你可以在设置项里搜索`editor.formatOnSave`查看该配置项：

[![img](https://camo.githubusercontent.com/0e63c1c1909f32495624f397dfbaf705a7d7e8b0/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323231332e706e67)](https://camo.githubusercontent.com/0e63c1c1909f32495624f397dfbaf705a7d7e8b0/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323231332e706e67)

我觉得这个配置项保持默认就好，不用打钩。

### 新建文件后的默认文件类型

当我们按下快捷键「Cmd + N」新建文件时，VS Code 默认无法识别这个文件到底是什么类型的，因此也就无法识别相应的语法高亮。如果你想修改默认的文件类型，可以在设置项里搜索`files.defaultLanguage`，设置项如下：

[![img](https://camo.githubusercontent.com/cb576e6fc89c0cb611ea965d349608c4ed2cf82a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323232312e706e67)](https://camo.githubusercontent.com/cb576e6fc89c0cb611ea965d349608c4ed2cf82a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431375f323232312e706e67)

上图中的红框部分，填入你期望的默认文件类型。我填的是`html`类型，你也可以填写成 `javascript` 或者 `markdown`，或者其他的语言类型。

### 删除文件时，是否弹出确认框

当我们在 VS Code 中删除文件时，默认会弹出确认框。如果你想修改设置，可以在设置项里搜索`xplorer.confirmDelete`。截图如下：

[![img](https://camo.githubusercontent.com/14a286f11a48c874dfdf8d7bfb6f76edf1870340/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313735382e706e67)](https://camo.githubusercontent.com/14a286f11a48c874dfdf8d7bfb6f76edf1870340/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313735382e706e67)

我建议这个设置项保持默认的打钩就好，不用修改。删除文件前的弹窗提示，也是为了安全考虑，万一手贱不小心删了呢？

## 命令面板的使用

Mac用户按住快捷键 `Cmd+Shift+P` （Windows用户按住快捷键`Ctrl+Shift+P`），可以打开命令面板。效果如下：

[![img](https://camo.githubusercontent.com/bc464fd6255491f3d580df195413b848af8b3119/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f313735305f322e706e67)](https://camo.githubusercontent.com/bc464fd6255491f3d580df195413b848af8b3119/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f313735305f322e706e67)

如果们需要修改一些设置项，可以通过「命令面板」来操作，效率会更高。这里列举一些。

### 字体设置

在命令面板输入“字体”，可以进行字体的设置，效果如下：

[![img](https://camo.githubusercontent.com/4644bd4113c9e2877b4aa3f084e0ae0090b8db87/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f323131302e706e67)](https://camo.githubusercontent.com/4644bd4113c9e2877b4aa3f084e0ae0090b8db87/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f323131302e706e67)

当然，你也可以在菜单栏，选择「首选项-设置-常用设置」，在这个设置项里修改字体大小。

### 快捷键设置

在命令面板输入“快捷键”，就可以进入快捷键的设置。

### 大小写转换

选中文本后，在命令面板中输入`transfrom`，就可以修改文本的大小写了。

[![img](https://camo.githubusercontent.com/002891614479ce283a27f5b5d80581496daec122/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431345f313735312e706e67)](https://camo.githubusercontent.com/002891614479ce283a27f5b5d80581496daec122/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431345f313735312e706e67)

## VS Code 的常用技巧

### 文件对比

VS Code 默认支持**对比两个文件的内容**。选中两个文件，然后右键选择「将已选项进行比较」即可，效果如下：

[![img](https://camo.githubusercontent.com/12e375333e03ce2525573524d7389f1f9538ab0b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f313735362e706e67)](https://camo.githubusercontent.com/12e375333e03ce2525573524d7389f1f9538ab0b/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f313735362e706e67)

VS Code自带的对比功能并不够强大，我们可以安装插件`compareit`，进行更丰富的对比。比如说，安装完插件`compareit`之后，我们可以将「当前文件」与「剪切板」里的内容进行对比：

[![img](https://camo.githubusercontent.com/a18aeb981eed910afdf0065198a2564c6a803064/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f313735372e706e67)](https://camo.githubusercontent.com/a18aeb981eed910afdf0065198a2564c6a803064/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303332395f313735372e706e67)

### 查找某个函数在哪些地方被调用了

比如我已经在`a.js`文件里调用了 `foo()`函数。那么，如果我想知道`foo()`函数在其他文件中是否也被调用了，该怎么做呢？

做法如下：在 `a.js` 文件里，选中`foo()`函数（或者将光标放置在`foo()`函数上），然后按住快捷键「Shift + F12」，就能看到 `foo()`函数在哪些地方被调用了，比较实用。

### 鼠标操作

- 在当前行的位置，鼠标三击，可以选中当前行。
- 用鼠标单击文件的**行号**，可以选中当前行。
- 在某个**行号**的位置，**上下移动鼠标，可以选中多行**。

### 重构

重构分很多种，我们来举几个例子。

**1、命名重构**：

当我们尝试去修改某个函数（或者变量名）时，我们可以把光标放在上面，然后按下「F2」键，那么，这个函数（或者变量名）出现的地方都会被修改。

**2、方法重构**：

选中某一段代码，这个时候，代码的左侧会出现一个「灯泡图标」，点击这个图标，就可以把这段代码提取为一个单独的函数。

### 在当前文件中搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

- Cmd + F（Win用户是Ctrl + F）：在当前文件中搜索，光标在搜索框里
- Cmd + G（Win用户是 F3）：在当前文件中搜索，光标仍在编辑器里

但是，你可能会注意到，搜索框里有很多按钮，每个按钮都对应着不同的功能，如下图所示：

[![img](https://camo.githubusercontent.com/abba20a640cfc9ce043c5b681c65bc19c5f3d503/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323035322e706e67)](https://camo.githubusercontent.com/abba20a640cfc9ce043c5b681c65bc19c5f3d503/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323035322e706e67)

上图中，你可以通过「Tab」键和「Shift + Tab」键在输入框和替换框之间进行切换。

「在选定内容中查找」这个功能还是比较实用的。你也可以在设置项里搜索 `editor.find.autoFindInSelection`，勾选该设置项后，那么，当你选中指定内容后，然后按住「Cmd + F」，就可以**自动**只在这些内容里进行查找。该设置项如下图所示：

[![img](https://camo.githubusercontent.com/7924918401fda75481b28531875848f9cf901de5/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323131362e706e67)](https://camo.githubusercontent.com/7924918401fda75481b28531875848f9cf901de5/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323131362e706e67)

正常情况下，我建议这个设置项不用勾选。

### 全局搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

- Cmd + Shift + F（Win用户是Ctrl + Shift +F）：在全局的文件夹中进行搜索。效果如下：

[![img](https://camo.githubusercontent.com/88b7ad92edbf4eb263391f7ad76cdc50a5f3c20a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323130372e706e67)](https://camo.githubusercontent.com/88b7ad92edbf4eb263391f7ad76cdc50a5f3c20a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431355f323130372e706e67)

上图中，你可以点击红框部分，展开更多的配置项。

### Git版本管理

VS Code 自带了 Git 版本管理，如下图所示：

[![img](https://camo.githubusercontent.com/279ed31f8fa3f15f3c937b6cd6b1e8da645fde58/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313835302e706e67)](https://camo.githubusercontent.com/279ed31f8fa3f15f3c937b6cd6b1e8da645fde58/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313835302e706e67)

上图中，我们可以在这里进行常见的git 命令操作。如果你还不熟悉 **Git版本管理**，先去补补课吧。

与此同时，我建议安装插件`GitLens`，它是 VS Code 中我最推荐的一个插件，简直是Git神器，码农必备。

### 将工作区放大/缩小

我们在上面的设置项里修改字体大小后，仅仅只是修改了代码的字体大小。

如果你想要缩放整个工作区（包括代码的字体、左侧导航栏的字体等），可以按下快捷键「**cmd +/-**」。windows用户是按下「ctrl +/-」

**当我们在给别人演示代码的时候，这一招十分管用**。

如果你想恢复默认的工作区大小，可以在命令面板输入`重置缩放`（英文是`reset zoom`）

### 创建多层子文件夹

我们可以在新建文件夹的时候，如果直接输入`aa/bb/cc`，比如：

[![img](https://camo.githubusercontent.com/9a93df0ab06d2d53f4a6b0afab7f76dac987491d/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323032322e706e67)](https://camo.githubusercontent.com/9a93df0ab06d2d53f4a6b0afab7f76dac987491d/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323032322e706e67)

那么，就可以创建多层子文件夹，效果如下：

[![img](https://camo.githubusercontent.com/21f10910eeec937f4a3303d14e832c393350df47/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323032332e706e67)](https://camo.githubusercontent.com/21f10910eeec937f4a3303d14e832c393350df47/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323032332e706e67)

### .vscode 文件夹的作用

如果你发现项目的根目录下有一个`.vscode`文件夹，说明这个文件夹代表的是当前项目的配置。

这个文件夹里可能包含以下集中文件：

- `settings.json`：工作空间设置。只针对当前项目有效。比如说，我可以在这里面要求当前项目的代码统一使用制表符，而不需要要求每一位码农去修改各自的配置文件。
- `sftp.json`：ftp文件传输的配置。

### 自带终端

我们可以按下「Ctrl + `」打开 VS Code 自带的终端。我认为内置终端并没有那么好用，我更建议你使用第三方的终端 **item2**。

### markdown语法支持

VS Code自带 markdown 语法高亮，写完 md 文件之后，你可以点击右上角的按钮进行预览，如下图所示：

[![img](https://camo.githubusercontent.com/f88cff18babbfe9ce9c832f6282fb6138c383b7c/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313930372e706e67)](https://camo.githubusercontent.com/f88cff18babbfe9ce9c832f6282fb6138c383b7c/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313930372e706e67)

你也可以在控制面板输入`Markdown: 打开预览`，直接全屏预览 markdown文件。

### Emmet in VS Code

`Emmet`可以极大的提高 html 和 css 的编写效率，它提供了一种非常简练的语法规则。

举个例子，我们在编辑器中输入缩写代码：`ul>li*6` ，然后按下 Tab 键，即可得到如下代码片段：

```
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

VS Code 默认支持 Emmet。更多 Emmet 语法规则，请自行查阅。

## 插件扩展 / 插件推荐

VS Code 有一个很强大的功能就是支持插件扩展。

[![img](https://camo.githubusercontent.com/96f7101a474b1ee3c05e5f80f1069c1fced24b59/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313933322e706e67)](https://camo.githubusercontent.com/96f7101a474b1ee3c05e5f80f1069c1fced24b59/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313933322e706e67)

上图中，点击红框部分，即可在输入框里，查找你想要的插件名，然后进行安装。

我来列举几个常见的插件，这些插件都很实用。

### GitLens

我强烈建议你安装插件`GitLens`，它是 VS Code 中我最推荐的一个插件，简直是Git神器，码农必备。如果你不知道，那真是out了。

GitLens 在 Git 管理上有很多强大的功能，比如：

- 将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。
- 查看某个 commit 的代码改动记录
- 查看不同的分支
- 可以将两个 commit 进行代码对比，甚至可以将两个 branch 分支进行整体的代码对比。这一点，简直是 GitLens 最强大的功能。

### RemoteHub

不要惊讶，RemoteHub 和 GitLens 是同一个作者开发出来的。

`RemoteHub`插件的作用是：可以在本地查看 GitHub 网站上的代码，而不需要将代码下载到本地。

[![img](https://camo.githubusercontent.com/9dfd128b14bf0ee3bbf7c36b3751ed9d133029fa/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313933372e706e67)](https://camo.githubusercontent.com/9dfd128b14bf0ee3bbf7c36b3751ed9d133029fa/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313933372e706e67)

这个插件目前使用的人还不多，赶紧安装起来尝尝鲜吧。

### TODO Highlight

写代码过程中，突然发现一个Bug，但是又不想停下来手中的活，以免打断思路，怎么办？按照代码规范，我们一般是在代码中加个TODO注释。比如：（注意，一定要写成大写`TODO`，而不是小写的`todo`）

```
//TODO:这里有个bug，我一会儿再收拾你
```

或者：

```
//FIXME:我也不知道为啥， but it works only that way.
```

安装了插件 `TODO Highlight`之后，按住「Cmd + Shift + P」打开命令面板，输入「Todohighlist」，选择相关的命令，我们就可以看到一个 todoList 的清单。

### Bracket Pair Colorizer 2：突出显示成对的括号【荐】

`Bracket Pair Colorizer 2`插件：以不同颜色显示括号并用连线标注括号范围。

### Rainbow Brackets：

`Rainbow Brackets`插件：突出显示成对的括号。

### indent-rainbow：突出显示缩进

`indent-rainbow`插件：突出显示缩进。

安装完成后，效果如下图所示：

[![img](https://camo.githubusercontent.com/2efc03f752e0f961bfb54c09725c2e3daa6a33ba/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313935382e706e67)](https://camo.githubusercontent.com/2efc03f752e0f961bfb54c09725c2e3daa6a33ba/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f313935382e706e67)

### sftp：文件传输

如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器，可以安装`sftp`这个插件，很好用。在公司会经常用到。

安装完成后，输入快捷键「cmd+shift+P」弹出命令面板，然后输入`sftp:config`，回车，当前工程的`.vscode`文件夹下就会自动生成一个`sftp.json`文件，我们需要在这个文件里配置的内容可以是：

- `host`：服务器的IP地址
- `username`：工作站自己的用户名
- `privateKeyPath`：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是ppk文件）
- `remotePath`：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用sftp上传文件之前，要手动在工作站上mkdir生成这个根目录
- `ignore`：指定在使用sftp: sync to remote的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号

举例如下：(注意，其中的注释需要去掉)

```
{
    "host": "",     //服务器ip
    "port": 22,     //端口，sftp模式是22
    "username": "", //用户名
    "password": "", //密码
    "protocol": "sftp", //模式
    "agent": null,
    "privateKeyPath": null,
    "passphrase": null,
    "passive": false,
    "interactiveAuth": false,
    "remotePath": "/root/node/build/",  //服务器上的文件地址
    "context": "./server/build",        //本地的文件地址

    "uploadOnSave": true,   //监听保存并上传
    "syncMode": "update",
    "watcher": {            //监听外部文件
        "files": false,     //外部文件的绝对路径
        "autoUpload": false,
        "autoDelete": false
    },
    "ignore": [             //忽略项
        "**/.vscode/**",
        "**/.git/**",
        "**/.DS_Store"
    ]
}
```

### 颜色主题推荐： SynthWave '84

`SynthWave '84` 这个主题很酷。

### Live Share：实时编码分享

`Live Share`这个神奇的插件是由微软官方出品，它的作用是：**实时编码分享**。也就是说，它可以实现你和你的同伴一起写代码。这绝对就是**结对编程**的神器啊。

安装方式：

打开插件管理，搜索“live share”，安装。安装后重启 VS Code，在左侧会多出一个按钮：

[![img](https://camo.githubusercontent.com/34cfa3970fcffd5697117a72644c65895b56c344/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323031322e706e67)](https://camo.githubusercontent.com/34cfa3970fcffd5697117a72644c65895b56c344/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323031322e706e67)

上图中，点击红框部分，登录后就可以分享你的工作空间了。

[![img](https://camo.githubusercontent.com/111d67b102e6472c8985f4f6349b245ce96a397a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323030352e706e67)](https://camo.githubusercontent.com/111d67b102e6472c8985f4f6349b245ce96a397a/687474703a2f2f696d672e736d79687661652e636f6d2f32303139303431385f323030352e706e67)

### Settings Sync

- 地址：https://github.com/shanalikhan/code-settings-sync
- 作用：多台设备之间，同步 VS Code 配置。

### vscode-pigments

css颜色高亮显示。

### vscode-syncing

- 地址：https://github.com/nonoroazoro/vscode-syncing
- 作用：多台设备之间，同步 VS Code 配置。

## 参考链接

- https://segmentfault.com/a/1190000012811886

## 最后一段

如果你有什么推荐的 VS Code 插件，欢迎留言。

同时，你也可以关注我在 GitHub 上的 [前端入门项目](https://github.com/qianguyihao/Web)，超级详细和真诚。

## 参考链接

「Vscode」打造类sublime的高颜值编辑器：https://idoubi.cc/2019/07/08/vscode-sublime-theme/
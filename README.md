# flow-std

Std Flow 用于统一流程图规范。和 Std UI 不同的是，Std Flow 并不追求全平台的 UI 一致性，更关注的是功能的一致性。

* 项目目的：标准化流程图
* 进度：20%
* 已实现的功能
    * 生成 .pos（ProcessOn）
    * 生成 SVG

构建 JSON 如下：

```json
{
    "_type": "flow",
    "version": "0.0.1",
    "width": 400,
    "height": 400,
    "_children": [
        {
            "_type": "start",
            "id": "start",
            "x": 100,
            "y": 100,
            "width": 100,
            "height": 100,
            "color": "#f00",
            "_text": "开始啦"
        },
        {
            "_type": "op",
            "id": "op1",
            "x": 100,
            "y": 100,
            "width": 100,
            "height": 100,
            "color": "#f00",
            "_text": "第一步"
        },
        {
            "_type": "op",
            "id": "op2",
            "x": 100,
            "y": 100,
            "width": 100,
            "height": 100,
            "color": "#f00",
            "_text": "第二步"
        },
        {
            "_type": "op",
            "id": "op3",
            "x": 100,
            "y": 100,
            "width": 100,
            "height": 100,
            "color": "#f00",
            "_text": "第三步"
        },
        {
            "_type": "cond",
            "id": "cond",
            "x": 100,
            "y": 100,
            "width": 100,
            "height": 100,
            "color": "#f00",
            "_text": "判断一下"
        },
        {
            "_type": "end",
            "id": "end",
            "x": 100,
            "y": 100,
            "width": 100,
            "height": 100,
            "color": "#f00",
            "_text": "结束啦"
        },
    ]
}
```

生成的图形如下：

![](!/../demo@2x.png)

play

```shell
npm i
ts-node make.ts
```

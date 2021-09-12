import * as fs from 'fs'
import { uid } from 'uid'

function createStart(node) {

    const id = node.id || uid(14)
    // const id = uid(14)

    return {
        "parent": "",
        "link": "",
        "shapeStyle": {
            "alpha": 1
        },
        "textBlock": [
            {
                "position": {
                    "w": "w-20",
                    "x": 10,
                    "h": "h",
                    "y": 0
                },
                "text": node._text
            }
        ],
        "anchors": [
            {
                "x": "w/2",
                "y": "0"
            },
            {
                "x": "w/2",
                "y": "h"
            },
            {
                "x": "0",
                "y": "h/2"
            },
            {
                "x": "w",
                "y": "h/2"
            }
        ],
        "title": "开始/结束",
        "fontStyle": {},
        "dataAttributes": [
            {
                "name": "序号",
                "id": "17bda5640edbd5",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "名称",
                "id": "17bda5640edbe",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "所有者",
                "id": "17bda5640edbae",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "连接",
                "id": "17bda5640edada",
                "type": "link",
                "category": "default",
                "value": ""
            },
            {
                "name": "便笺",
                "id": "17bda5640edb2c",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "成本",
                "id": "17bda5640edbba",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "时间",
                "id": "17bda5640edf52",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "部门",
                "id": "17bda5640ed1f7",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "输入",
                "id": "17bda5640ed685",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "输出",
                "id": "17bda5640ed34",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "风险",
                "id": "17bda5640ed2ca",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "备注",
                "id": "17bda5640ed00a",
                "type": "string",
                "category": "default",
                "value": ""
            }
        ],
        "props": {
            "zindex": 1,
            "w": node.width,
            "x": node.x,
            "h": node.height,
            "y": node.y,
            "angle": 0
        },
        "path": [
            {
                "actions": [
                    {
                        "x": "Math.min(w,h)/3",
                        "action": "move",
                        "y": "0"
                    },
                    {
                        "x": "w-Math.min(w,h)/3",
                        "action": "line",
                        "y": "0"
                    },
                    {
                        "y1": "0",
                        "x": "w-Math.min(w,h)/3",
                        "action": "curve",
                        "x1": "w+Math.min(w,h)/3/3",
                        "y2": "h",
                        "y": "h",
                        "x2": "w+Math.min(w,h)/3/3"
                    },
                    {
                        "x": "Math.min(w,h)/3",
                        "action": "line",
                        "y": "h"
                    },
                    {
                        "y1": "h",
                        "x": "Math.min(w,h)/3",
                        "action": "curve",
                        "x1": "-Math.min(w,h)/3/3",
                        "y2": "0",
                        "y": "0",
                        "x2": "-Math.min(w,h)/3/3"
                    },
                    {
                        "action": "close"
                    }
                ]
            }
        ],
        "lineStyle": {},
        "children": [],
        "resizeDir": [
            "tl",
            "tr",
            "br",
            "bl"
        ],
        "name": "terminator",
        "fillStyle": {},
        "theme": {},
        id,
        "attribute": {
            "container": false,
            "rotatable": true,
            "visible": true,
            "collapsable": false,
            "collapsed": false,
            "linkable": true,
            "markerOffset": 5
        },
        "category": "flow",
        "locked": false,
        "group": ""
    }

    // return {
    //     "parent": "",
    //     "link": "",
    //     "shapeStyle": {
    //         "alpha": 1
    //     },
    //     "textBlock": [
    //         {
    //             "position": {
    //                 "w": "w-20",
    //                 "x": 10,
    //                 "h": "h",
    //                 "y": 0
    //             },
    //             "text": node._text
    //         }
    //     ],
    //     "anchors": [
    //         {
    //             "x": "w/2",
    //             "y": "0"
    //         },
    //         {
    //             "x": "w/2",
    //             "y": "h"
    //         },
    //         {
    //             "x": "0",
    //             "y": "h/2"
    //         },
    //         {
    //             "x": "w",
    //             "y": "h/2"
    //         }
    //     ],
    //     "title": "开始/结束",
    //     "fontStyle": {},
    //     "dataAttributes": [
    //     ],
    //     "props": {
    //         "zindex": 1,
    //         "w": node.width,
    //         "x": node.x,
    //         "h": node.height,
    //         "y": node.y,
    //         "angle": 0
    //     },
    //     "lineStyle": {},
    //     "children": [],
    //     "resizeDir": [
    //         "tl",
    //         "tr",
    //         "br",
    //         "bl"
    //     ],
    //     "name": "terminator",
    //     "fillStyle": {},
    //     "theme": {},
    //     id,
    //     "attribute": {
    //         "container": false,
    //         "rotatable": true,
    //         "visible": true,
    //         "collapsable": false,
    //         "collapsed": false,
    //         "linkable": true,
    //         "markerOffset": 5
    //     },
    //     "category": "flow",
    //     "locked": false,
    //     "group": ""
    // }
}

function createOp(node) {
    const id = node.id || uid(14)

    return {
        "parent": "",
        "link": "",
        "shapeStyle": {
            "alpha": 1
        },
        "textBlock": [
            {
                "position": {
                    "w": "w-20",
                    "x": 10,
                    "h": "h",
                    "y": 0
                },
                "text": node._text
            }
        ],
        "anchors": [
            {
                "x": "w/2",
                "y": "0"
            },
            {
                "x": "w/2",
                "y": "h"
            },
            {
                "x": "0",
                "y": "h/2"
            },
            {
                "x": "w",
                "y": "h/2"
            }
        ],
        "title": "流程",
        "fontStyle": {},
        "dataAttributes": [
            {
                "name": "序号",
                "id": "17bda56d2b260e",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "名称",
                "id": "17bda56d2b2636",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "所有者",
                "id": "17bda56d2b2d5f",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "连接",
                "id": "17bda56d2b2aa4",
                "type": "link",
                "category": "default",
                "value": ""
            },
            {
                "name": "便笺",
                "id": "17bda56d2b243e",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "成本",
                "id": "17bda56d2b25dd",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "时间",
                "id": "17bda56d2b2182",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "部门",
                "id": "17bda56d2b2dfb",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "输入",
                "id": "17bda56d2b2c0b",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "输出",
                "id": "17bda56d2b26ad",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "风险",
                "id": "17bda56d2b22c9",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "备注",
                "id": "17bda56d2b2964",
                "type": "string",
                "category": "default",
                "value": ""
            }
        ],
        "props": {
            "zindex": 3,
            "w": node.width,
            "x": node.x,
            "h": node.height,
            "y": node.y,
            "angle": 0
        },
        "path": [
            {
                "actions": [
                    {
                        "x": "0",
                        "action": "move",
                        "y": "0"
                    },
                    {
                        "x": "w",
                        "action": "line",
                        "y": "0"
                    },
                    {
                        "x": "w",
                        "action": "line",
                        "y": "h"
                    },
                    {
                        "x": "0",
                        "action": "line",
                        "y": "h"
                    },
                    {
                        "action": "close"
                    }
                ]
            }
        ],
        "lineStyle": {},
        "children": [],
        "resizeDir": [
            "tl",
            "tr",
            "br",
            "bl"
        ],
        "name": "process",
        "fillStyle": {},
        "theme": {},
        id,
        "attribute": {
            "container": false,
            "rotatable": true,
            "visible": true,
            "collapsable": false,
            "collapsed": false,
            "linkable": true,
            "markerOffset": 5
        },
        "category": "flow",
        "locked": false,
        "group": ""
    }
}

function createCondition(node) {
    const id = node.id || uid(14)

    return {
        "parent": "",
        "link": "",
        "shapeStyle": {
            "alpha": 1
        },
        "textBlock": [
            {
                "position": {
                    "w": "w-20",
                    "x": 10,
                    "h": "h",
                    "y": 0
                },
                "text": node._text
            }
        ],
        "anchors": [
            {
                "x": "w/2",
                "y": "0"
            },
            {
                "x": "w/2",
                "y": "h"
            },
            {
                "x": "0",
                "y": "h/2"
            },
            {
                "x": "w",
                "y": "h/2"
            }
        ],
        "title": "判定",
        "fontStyle": {},
        "dataAttributes": [
            {
                "name": "序号",
                "id": "17bda577ba38cf",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "名称",
                "id": "17bda577ba362e",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "所有者",
                "id": "17bda577ba3c43",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "连接",
                "id": "17bda577ba37c9",
                "type": "link",
                "category": "default",
                "value": ""
            },
            {
                "name": "便笺",
                "id": "17bda577ba38db",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "成本",
                "id": "17bda577ba3148",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "时间",
                "id": "17bda577ba3f79",
                "type": "number",
                "category": "default",
                "value": ""
            },
            {
                "name": "部门",
                "id": "17bda577ba312d",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "输入",
                "id": "17bda577ba3c0c",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "输出",
                "id": "17bda577ba35d8",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "风险",
                "id": "17bda577ba3b14",
                "type": "string",
                "category": "default",
                "value": ""
            },
            {
                "name": "备注",
                "id": "17bda577ba3b8f",
                "type": "string",
                "category": "default",
                "value": ""
            }
        ],
        "props": {
            "zindex": 7,
            "w": node.width,
            "x": node.x,
            "h": node.height,
            "y": node.y,
            "angle": 0
        },
        "path": [
            {
                "actions": [
                    {
                        "x": "0",
                        "action": "move",
                        "y": "h/2"
                    },
                    {
                        "x": "w/2",
                        "action": "line",
                        "y": "0"
                    },
                    {
                        "x": "w",
                        "action": "line",
                        "y": "h/2"
                    },
                    {
                        "x": "w/2",
                        "action": "line",
                        "y": "h"
                    },
                    {
                        "x": "0",
                        "action": "line",
                        "y": "h/2"
                    },
                    {
                        "action": "close"
                    }
                ]
            }
        ],
        "lineStyle": {},
        "children": [],
        "resizeDir": [
            "tl",
            "tr",
            "br",
            "bl"
        ],
        "name": "decision",
        "fillStyle": {},
        "theme": {},
        id,
        "attribute": {
            "container": false,
            "rotatable": true,
            "visible": true,
            "collapsable": false,
            "collapsed": false,
            "linkable": true,
            "markerOffset": 5
        },
        "category": "flow",
        "locked": false,
        "group": ""
    }
}

function createLinker(node) {
    const id = node.id || uid(14)

    let angles = {
        right: 0,
        bottom: Math.PI / 2,
        top: Math.PI * 1.5,
        left: Math.PI,
    }

    let fromNode: any = root._children.find(item => item.id == node.from.id)
    let toNode: any = root._children.find(item => item.id == node.to.id)

    console.log('fromNode', fromNode)
    let fromPt = {
        "x": fromNode.x + fromNode.width * (node.from.x || 0),
        "y": fromNode.y + fromNode.height * (node.from.y || 0),
    }
    let fromAngle = 0
    if (node.from.x == 0.5 && node.from.y == 1) {
        // from top to bottom
        fromAngle = angles.top
    } 
    else {
        // from left to right
    }

    let toPt = {
        "x": toNode.x + toNode.width * (node.to.x || 0),
        "y": toNode.y + toNode.height * (node.to.y || 0),
    }
    let toAngle = 0
    if (node.to.x == 0.5 && node.to.y == 0) {
        // from top to bottom
        toAngle = angles.bottom
    } 
    else if (node.to.x == 1 && node.to.y == 0.5) {
        toAngle = angles.left
    }
    else {
        // from left to right
    }
    

    return {
        "linkerType": "broken",
        "lineStyle": {},
        "name": "linker",
        "from": {
            // "x": fromNode.x + fromNode.width,
            // "y": fromNode.y + fromNode.height / 2,
            ...fromPt,
            "angle": fromAngle,
            "id": node.from.id,
        },
        id,
        "text": node._text || '',
        "to": {
            ...toPt,
            "angle": toAngle,
            // 0 right
            // Math.PI / 2 down
            // Math.PI * 1.5 top
            // Math.PI left
            "id": node.to.id,
        },
        "locked": false,
        "group": "",
        "points": [
            {
                "x": (fromPt.x + toPt.x) / 2,
                "y": (fromPt.y + toPt.y) / 2
            },
            {
                "x": (fromPt.x + toPt.x) / 2,
                "y": (fromPt.y + toPt.y) / 2
            }
        ],
        "dataAttributes": [],
        "props": {
            "zindex": 4
        }
    }
}

const root = {
    "_type": "flow",
    "version": "0.0.1",
    "width": 800,
    "height": 800,
    "_children": [
        {
            "_type": "start",
            "id": "start",
            "x": 100,
            "y": 100,
            "width": 120,
            "height": 56,
            // "color": "#f00",
            "_text": "开始啦"
        },
        {
            "_type": "op",
            "id": "op1",
            "x": 100,
            "y": 200,
            "width": 120,
            "height": 56,
            "_text": "第一步"
        },
        {
            "_type": "op",
            "id": "op2",
            "x": 100,
            "y": 300,
            "width": 120,
            "height": 56,
            "_text": "第二步"
        },
        {
            "_type": "op",
            "id": "op3",
            "x": 300,
            "y": 400,
            "width": 120,
            "height": 56,
            "_text": "第三步"
        },
        {
            "_type": "cond",
            "id": "cond",
            "x": 100,
            "y": 400,
            "width": 120,
            "height": 56,
            "_text": "判断一下"
        },
        {
            "_type": "end",
            "id": "end",
            "x": 100,
            "y": 500,
            "width": 120,
            "height": 56,
            "_text": "结束啦"
        },
        {
            "_type": "linker",
            from: {
                id: 'start',
                x: 0.5,
                y: 1,
            },
            to: {
                id: 'op1',
                x: 0.5,
                y: 0,
            },
        },
        {
            "_type": "linker",
            from: {
                id: 'op1',
                x: 0.5,
                y: 1,
            },
            to: {
                id: 'op2',
                x: 0.5,
                y: 0,
            },
        },
        {
            "_type": "linker",
            from: {
                id: 'op2',
                x: 0.5,
                y: 1,
            },
            to: {
                id: 'cond',
                x: 0.5,
                y: 0,
            },
        },
        {
            "_type": "linker",
            _text: '否',
            from: {
                id: 'cond',
                x: 0.5,
                y: 1,
            },
            to: {
                id: 'end',
                x: 0.5,
                y: 0,
            },
        },
        {
            "_type": "linker",
            _text: '是',
            from: {
                id: 'cond',
                x: 1,
                y: 0.5,
            },
            to: {
                id: 'op3',
                x: 0,
                y: 0.5,
            },
        },
        {
            "_type": "linker",
            from: {
                id: 'op3',
                x: 0.5,
                y: 1,
            },
            to: {
                id: 'end',
                x: 1,
                y: 0.5,
            },
        },
    ]
}

let elements = {}

const NodeType = {
    Start: 'start',
    End: 'end',
    Op: 'op',
    Condition: 'cond',
    Linker: 'linker',
}
root._children.map(node => {
    if (node._type == NodeType.Start) {
        return createStart(node)
    }
    if (node._type == NodeType.End) {
        return createStart(node)
    }
    if (node._type == NodeType.Op) {
        return createOp(node)
    }
    if (node._type == NodeType.Condition) {
        return createCondition(node)
    }
    if (node._type == NodeType.Linker) {
        return createLinker(node)
    }
})
.filter(item => item)
.map((node: any) => {
    elements[node.id] = node
})

let out = {
    "diagram": {
        "elements": {
            elements,
            // "elements": {
            // },
            "page": {
                "padding": 20,
                "backgroundColor": "transparent",
                "orientation": "portrait",
                "gridSize": 15,
                "width": root.width,
                "showGrid": true,
                "lineJumps": false,
                "height": root.height
            }
        }
    },
    "meta": {
        // "exportTime": "2021-09-12 23:58:26",
        // "member": "57f33ba3e4b0300f4fdc6b5d",
        "diagramInfo": {
            // "creator": "57f33ba3e4b0300f4fdc6b5d",
            // "created": "2021-09-12 22:07:33",
            // "modified": "2021-09-12 23:38:36",
            "title": "flow",
            "category": "flow"
        },
        "id": "613e09a5e401fd7aedfe5a0c",
        "type": "ProcessOn Schema File",
        "version": "1.0"
    }
}
fs.writeFileSync('out/flow.pos', JSON.stringify(out, null, 4), 'utf8')


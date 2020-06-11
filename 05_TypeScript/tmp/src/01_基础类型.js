"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 布尔值
exports.isDone = false;
// 数字
exports.decLiteral = 6;
exports.hexLiteral = 0xf00d;
exports.binaryLiteral = 10;
exports.octalLiteral = 484;
// 字符串
// @ts-ignore
exports.name = 'bob';
exports.firstName = "Gene";
exports.fillName = exports.firstName + " " + exports.name;
// 数组
exports.array1 = [1, 2, 3];
exports.array2 = [1, 2, 3];
exports.list1 = ['a', 'b', 'c'];
exports.list2 = ['a', 'b', 'c'];
// 元组
exports.tupleX = ['hello', 10];
// 枚举
// @ts-ignore
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color = exports.Color || (exports.Color = {}));
exports.red = Color.Red;
exports.green = Color.Green;
exports.blue = Color.Blue;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 7] = "Green";
    Color2[Color2["Blue"] = 12] = "Blue";
})(Color2 = exports.Color2 || (exports.Color2 = {}));
//# sourceMappingURL=01_基础类型.js.map
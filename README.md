# LeetCode解题思路

<!-- TOC depthFrom:2 depthTo:3 -->

- [数组](#数组)
    - [561. Array Partition I](#561-array-partition-i)
    - [566. Reshape the Matrix](#566-reshape-the-matrix)

<!-- /TOC -->

## 数组

### 561. Array Partition I

> - [原题地址](https://leetcode.com/problems/array-partition-i/description/) 
> - [JS解法](JavaScript/561-Array-Partition-I.js)

 给一个包含2n个整数的数组，将它分为n部分，返回每部分的最小值相加之和，求出最大的和

#### 思路

要求得最小值相加的最大和 => 即要保证每部分的最小值尽可能大 => 每部分最大值和最小之差尽可能小

1. 先将数组排序
2. 求数组的`奇数项`的和

> **坑：** JS数组的 `sort()` 方法按照 `ACSII` 码排序


### 566. Reshape the Matrix

> - [原题地址](https://leetcode.com/problems/reshape-the-matrix/description/) 
> - [JS解法](JavaScript/566-Reshape-the-Matrix.js)

 矩阵重塑，给一个二维矩阵，重塑为指定行和列的矩阵，例如：给一个 2×2 的矩阵，重塑为 1×4； 重塑的矩阵必须包含原矩阵的所有数据，如果无法重塑，则返回原矩阵

#### 思路

先将原矩阵降成一维矩阵，再重塑为二维矩阵

> **注意：**
> 1. 考虑边界值（c<1; r<1）

#### 技能点

- [数组降维](http://web.jobbole.com/85129/)
    - 使用双重循环
    - 使用数组的 `concat() `
    - 使用 `concat()` 的 `apply()`
- 数组的slice方法

> **坑：** 数组的slice方法 `arr.slice(start, end)` 第二个参数代表结束位置，不是数组的长度



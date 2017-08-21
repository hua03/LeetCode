# LeetCode解题思路

<!-- TOC depthFrom:1 depthTo:2 -->

- [LeetCode解题思路](#leetcode解题思路)
    - [561. Array Partition I](#561-array-partition-i)

<!-- /TOC -->

## 561. Array Partition I

> [项目地址](https://leetcode.com/problems/array-partition-i/description/) 

 给一个包含2n个整数的数组，将它分为n部分，返回每部分的最小值相加之和，求出最大的和

### 思路

要求得最小值相加的最大和 => 即要保证每部分的最小值尽可能大 => 每部分最大值和最小之差尽可能小

1. 先将数组排序
2. 求数组的`奇数项`的和

> **坑：** JS数组的 `sort()` 方法按照 `ACSII` 码排序



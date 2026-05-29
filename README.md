# 日行小记

私人每日任务清单网页，支持：

- 日度 / 月度任务管理
- 本地 `localStorage` 持久化
- 截止时间提醒
- 跨天日度任务自动覆盖到对应日期
- 本地安装为桌面 / 主屏幕应用

## 当前项目结构

- `index.html`
  页面入口
- `assets/styles.css`
  页面样式
- `assets/app.js`
  页面交互逻辑
- `manifest.webmanifest`
  安装所需清单
- `service-worker.js`
  安装版缓存与离线壳
- `icon-192.png`
  安装图标
- `icon-512.png`
  安装图标
- `apple-touch-icon.png`
  Apple 设备图标

## 本地打开方式

直接双击 `index.html` 可以使用基础功能。 

## 数据说明

任务数据默认保存在当前浏览器的 `localStorage` 中。  
更换浏览器、清除站点数据或换域名后，数据不会自动同步。

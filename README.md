# corona-timeline

## Setup
环境配置 `npm install`

## Start
本地启动 `npm start`

## Build
项目构建
`npm install -g serve`

`npm run build`

## Start Server
在80端口开启前端服务
`serve -s build -l 80`

## Project Structure
```
├── README.md
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.js 
│   ├── App.test.js
│   ├── assets
│   ├── components
│   │   ├── BubbleMap.js
│   │   ├── CoronaMap.js
│   │   ├── EventLine.js
│   │   ├── EventModal.js
│   │   └── GlobeDiv.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   ├── setupProxy.js
│   └── setupTests.js
```
The project entrance is /src/App.js, and the components of corona event timeline, event details modal and corona heatmap 
and bubble map are defined and implemented in directory /src/components/.

项目入口文件为/src/App.js, 核心代码首页事件时间线, 事件详情弹窗和疫情地图气泡图国家筛选组件分别在/src/components/EventLine.js, /src/components/EventModal.js和/src/components/BubbleMap.js中实现。

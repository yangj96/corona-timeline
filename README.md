# corona-timeline

## Setup
`npm install`

## Start
`npm start`

## Build
`npm install -g serve`

`npm run build`

`serve -s build`

## Project Structure
```$xslt
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



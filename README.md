# Yui's Responsive [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Website: [https://zcemycl.github.io/practice-app/](https://zcemycl.github.io/practice-app/)
### How to Start?
```
git clone https://github.com/zcemycl/practice-app.git
npm install
touch .env # edit api keys
npm start
```

### Functionalities 
|Features|Locations|Description|
|--|--|--|
|Backend Support|[flask2react](https://github.com/zcemycl/flask2react)|Support chatapp socket, fetch non-dynamic and dynamic data. |
|Router|[Link](https://github.com/zcemycl/practice-app/blob/master/src/App.js)|Enable access to different pages.|
|Single Page Application|[Link](https://github.com/zcemycl/practice-app/tree/master/public)|Enable resources suffix.|
|Navigation Bar|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Navbar/Navbar.jsx)|Link the home page to different demos and profiles.|
|Slider Graph|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/ProGraph/UIPlot/UIPlot.jsx)|Update datapoint dynamically via slider control.|
|Fetch Data Graph|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/ProGraph/FetchPlot/FetchPlot.jsx)|Fetch JSON data via REST API from flask2react.|
|Real-time Data Graph|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/ProGraph/SocketPlot/SocketPlot.jsx)|Fetch Real-time randomly generated data from flask2react|
|Authentication|[Link](https://github.com/zcemycl/practice-app/tree/master/src/components/Auth)|GitHub Secret Key as authenication method.  - Username, Password: IamLeo |
|Chatapp|[Link](https://github.com/zcemycl/practice-app/tree/master/src/components/Chatapp)|Support real-time text communication.|
|Image Annotation for object segmentation|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Annotate/Annotate.jsx)|`cd resources` -> `pip install -r requirements.txt` -> `python readAnnotate.py [--img str] [--annotatefile str]` |
|Google Map and Projections|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Leaflet/Leaflet.jsx)|Mark Outcodes and Areas of United Kingdoms.|
|3D Scene|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/ThreeFiber/ThreeFiber.jsx)||
|3D City Map|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Map/Map.jsx)|Map with 3D Building Projections.|
|Like and Comment Section|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/CommentLike/CommentLike.jsx)|Provide supports for like, votes, clap and comments for the page.|
|Knowledge Graph|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Knowledge/Knowledge.jsx)|Alternative Table of Contents.|
|Website Tour|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Knowledge/Knowledge.jsx)|Support User-friendly guide for users to navigate the website.|
|Visitor Record|[Link](https://github.com/zcemycl/practice-app/blob/master/src/App.js)|Connect to Google Sheet API to store Visitor Information.|
|Online Shop|[Link](https://github.com/zcemycl/practice-app/blob/master/src/components/Products/Products.jsx)||


![img](./resources/view.png)

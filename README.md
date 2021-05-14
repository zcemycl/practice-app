# Yui's Responsive [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Website: [https://zcemycl.github.io/practice-app/](https://zcemycl.github.io/practice-app/)

### Functionalities 
- Backend connection
  - Real time data graph
  - Connected to REST API from https://github.com/zcemycl/flask2react
- Authentication
  - Username: IamLeo 
  - Password: IamLeo  
- Chatapp
  - Support real-time messaging
  - Not support conversation history
- 3D Scene
  - Three Fiber, drei, Blender
- Like and Comment Section
  - Like -- Lyket
  - Comment -- Ably
- 3D City Map
  - OpenStreetMap and Blender
- Image Annotation
  - rough -- draw, drag, resize and delete
  - Maybe connect to S3 for data synchronization
  - Can use json file to import annotation
```
cd resources
pip install -r requirements.txt
python readAnnotate.py [--img str] [--annotatefile str]
```  
- Knowledge Graph
  - vis.js -- Show force network.
  - Can act as a table of content.
- Feedback Form [To-do]
- Try D3 force, cytoscapejs, react-diagram, drag and drop, etc.
- React Tour 
- Need to use more lifecycle.
- Newsletter Subscription [To-do]
- Online shop [In Progress]

![img](./resources/view.png)

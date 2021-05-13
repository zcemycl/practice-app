import numpy as np 
import cv2
import json
import argparse

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--img",type=str,default="/media/yui/Disk/project/ui/practice-app/src/components/Annotate/kitchen1.jpg")
    p.add_argument("--annotatefile",type=str,default="/media/yui/Disk/project/ui/practice-app/resources/annotations.json")
    args = p.parse_args()
    
    f = open(args.annotatefile)
    data = json.load(f)
    print(data[0])
    print(type(data[0]))
    img = cv2.imread(args.img)
    for box in data:
        x1 = box['bbox']['x']
        x2 = box['bbox']['w']+x1
        y1 = box['bbox']['y']
        y2 = box['bbox']['h']+y1
        img = cv2.rectangle(img,(x1,y1),(x2,y2), (255,0,0), 2)
    h,w,c = img.shape
    img = cv2.resize(img, (w//3, h//3))  
    cv2.imshow('image',img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()


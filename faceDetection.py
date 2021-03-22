# Import Module
import numpy as np  # Numpy is for Array Handler
# Main Module Import From OpenCV Module
from cv2 import cv2
import sys  # System

# Path Here Live Detection Face Capture File
faceCascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Open Frontal Camera ( Live Web Camera )
#print("Did the cam work bro")
video_camera = cv2.VideoCapture(0)

# Live Streaming Face Detection
while True:
    # Face Frame
    #print("Yes it did bro")
    ret, frame = video_camera.read()
    # Face Frame For Detected Face
    grayfaces = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Multi Scale For Multi Faces
    faces = faceCascade.detectMultiScale(
        grayfaces,
        scaleFactor=1.5,
        minNeighbors=5,
        minSize=(40, 40),
        # resize = (600, 600),
        flags=cv2.CASCADE_SCALE_IMAGE
    )
    #print("Then what's the problem bro")

    print(faces)
    print(type(faces))
    # Created Rectangle For Face
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 225), 2)
    # Show Image For Live Face Detected
    # windows function
    cv2.imshow('FaceDetection', frame)

    # Exit Function
    # exit key function if you click the Q keyword then Quit the windows

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# release function
cv2. video_capture.release()
# Destroyed Open Windows And Kill Memory Storage
cv2.destroyAllWindows()
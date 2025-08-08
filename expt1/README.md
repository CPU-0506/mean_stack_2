# Experiment 1

## 1A
### Angular Application Setup
The application is setup at localhost:4200. Run the following command inside the prj directory to run the project.
```
ng serve --open
```

## 1B
### Components and Modules
A component named hello is created, which displays "Hello Angular" at home screen.
Run using command given in 1A to view.

## 1C
### Elements of Template
Added an event to the hello component template, which interchanges the course name between "Angular.js" and "MongoDB", when clicked on the button "Change course"

## 1D
### Change Detection
Added a new component "child", which takes an array from component "hello".
When the array "courses" in the component is changed, the change is detected (implicitly) and propagated to component "child", which is reflected on the app.
# [Hospital Appointment Booking] (https://booking-vg.netlify.app/) - MERN Stack Website



## Brief Description

Hospital Appointment Booking website is a platform where patients can  book appointment as per  convenience and Time.Patients can get information about doctors from various specialised fields.

### `Short tech summary`
  - Implemented authentication,authorization using Json Web Token for login,along with all CRUD features.
  -React is Used for Front end and nodeJS as Back end along with MongoDB as database  
  - Implemented [MongoDB ChangeStream](https://www.mongodb.com/docs/manual/changeStreams) for push notification to admin about payments


## Features

### `User features`
  - User can see the List of doctors as well can filter doctors based on their speciality.
  -If user wants to book appointmet they user has to register and login to book appointments
  - For booking  user can select doctor, date and time slot as per convenience and need
  - If time slot is already booked then user will be notified through popup
  - user can see all the previous as well as current appointments and can cancel apppointments if need arises to do so
  
  
  
### `Admin features`
  - Admin has right to add doctor.
  - Admin can delete doctor if doctor is no longer providing service to hospital
  - Admin can see list of all appointments and update accordingly
  - Whenever any user schedules appointment then Admin gets realtime popup through push notification.
  
  
## Tech Used
  - ReactJS
  - ExpressJS
  - NodeJS
  - MongoDB and MongoDB ChangeStream
  - Socket.io - for Push Notification
  

## Screenshots📷

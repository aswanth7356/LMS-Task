# React + Vite

Learning Management System (LMS)
--------------------------------
This is a Learning Management System (LMS) built using React and Tailwind CSS. The application is responsive and allows users to explore subjects, view modules, and watch videos using YouTube and Vimeo players.


Features
--------
• Responsive design using Tailwind CSS

• Subjects listing with Modules and Video Sections

• Video player with custom controls (Play/Pause, Rewind, Forward, Volume)

• Video playback from YouTube and Vimeo

• Modal to play videos with outside click to close

• Download and Doubt buttons for each video

• Error handling and loading indicators


Technologies Used
-----------------
• React.js

• Tailwind CSS

• Axios Library

• React Router Dom

• React Player

• React Icons (Lucide React)

• React-hot-toast


Installation
-------------
• npm create vite@latest

• Install dependencies: npm install


Start the development server:
------------------------------
• npm run dev


API Integration
---------------
• Subjects Listing API: Displays subjects on the homepage

• Modules Listing API: Shows modules when a subject is selected

• Videos API: Displays videos within each module


How to Use
----------
• Select a subject from the homepage.

• Click Continue Button to view the list of available videos.

• Click on a video title to open the modal and watch the video.

• Use the custom controls to Play/Pause, Rewind, Forward, or adjust the Volume.

• Click outside the modal or press the close icon to exit the video.


Responsive Design
-----------------
• The application is fully responsive and adapts to different screen sizes, including mobile and tablet views.

• Buttons and icons have hover effects and transitions for better user experience.

• Error Handling

• Displays appropriate error messages if there are issues with API calls or video playback.

• Loading indicators are shown when data is being fetched.


Code Structure
--------------
• src/components: Contains reusable components - Video Modal

• src/pages: Includes pages like Home, Modules, and Videos



---

🚦 Road Hazard Tracker

Making Roads Safer, One Hazard at a Time

Road Hazard Tracker is an innovative web application that empowers citizens and authorities to report, visualize, and respond to road hazards in real-time. The app leverages cutting-edge web technologies to create safer, smarter, and more sustainable cities.

This project aligns with Sustainable Development Goal (SDG) 11 – Sustainable Cities and Communities, by promoting safe, inclusive, and resilient urban mobility.


---

🌟 Features

1. Report Hazards Effortlessly

Users can quickly submit road hazards such as potholes, floods, accidents, or debris.

Each hazard submission includes:

Type of hazard (e.g., pothole, flood)

Description

Severity (low, medium, high)

Precise GPS coordinates


Submissions are validated to ensure accurate location and details.


2. Live Hazard Map

Interactive, real-time map powered by React-Leaflet and Leaflet.

Hazards are represented by markers that show type, severity, and description on click.

Users can zoom and pan across the city to see hazards in their area.


3. Real-Time Updates with Socket.IO

New hazards appear immediately on the map without page reload.

Users connected simultaneously see updates live, ensuring up-to-date hazard information.

Notifications for newly reported hazards can be integrated to alert authorities or commuters.


4. Stay Safe Section

Provides safety tips and advice to help users navigate urban roads safely.

Focuses on accident prevention, emergency measures, and hazard awareness.


5. Responsive and User-Friendly

Fully responsive design that works across mobile devices, tablets, and desktops.

Clear navigation with intuitive links between pages: Home, Report Hazard, Map View, and Stay Safe.



---
![HOMEPAGE] (HOME.png)




---

🚀 Technologies Used

Frontend: React, React Router, React-Leaflet, Leaflet, CSS, Socket.IO-client

Backend: Node.js, Express, MongoDB, Mongoose, Socket.IO

Environment Management: dotenv

Development Tools: Nodemon, Postman



---

🛠 Installation & Setup

Clone the Repository

git clone https://github.com/<your-username>/road-hazard-tracker.git
cd road-hazard-tracker

Backend Setup

cd backend
npm install

Create a .env file with your MongoDB URI:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server:

nodemon server.js

Frontend Setup

cd ../frontend
npm install
npm start

Frontend will run at http://localhost:3000 and connect to backend http://localhost:5000.


---

💻 Usage

1. Open the Home Page to get an overview of the app.


2. Click Report Hazard to submit a hazard:

Select type, severity, description.

Use the map to pick the exact location or enter coordinates.



3. Switch to Map View to see all hazards visually plotted on the interactive map.


4. Newly submitted hazards appear live without refreshing the page thanks to Socket.IO.


5. Visit Stay Safe for useful tips to prevent accidents and navigate safely.




---

🌐 API Endpoints

Endpoint	Method	Description

/api/hazards	GET	Fetch all hazards
/api/hazards	POST	Submit a new hazard (real-time updates)


Socket.IO Events:

newHazard → Broadcasts newly submitted hazard to all connected clients.



---

🎯 Sustainable Development Goals (SDGs)

This project directly contributes to SDG 11: Sustainable Cities and Communities by:

Promoting safer urban mobility.

Enabling real-time reporting and rapid response to hazards.

Supporting informed decision-making for city authorities and commuters.



---

🧩 Contributing

Contributions are welcome! You can:

Fork the repository

Submit pull requests

Report issues

Suggest new features


Guidelines:

Follow existing code style.

Test thoroughly before submitting pull requests.

Ensure documentation is updated.



---

⚖ License

This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal or commercial purposes, with proper attribution. See LICENSE for full details.


---

👨‍💻 Author

Yusuf Edun

GitHub: https://github.com/yusuf-328



---

✅ Road Hazard Tracker is a fully functional, real-time, interactive app designed to make roads safer, keep communities informed, and save lives.


---

If you want, I can also add badges, GIF demos of live updates, and a table of contents to make this README even more GitHub-ready and visually professional.

Do you want me to do that next?

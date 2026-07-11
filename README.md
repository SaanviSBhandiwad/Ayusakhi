# Ayusakhi

Empowering patients to manage their health effortlessly with secure report storage, appointment booking, AI chatbot assistance, and medical reminders.

## Project Overview

HealthConnect is a full-stack healthcare platform where patients can:
- Securely log in and save health reports
- Book medical appointments
- Receive voice-activated AI chatbot assistance
- Get medication and appointment reminders

Designed to offer a seamless and supportive experience for patients navigating their health journey.

## Tech Stack

Frontend: React, Tailwind CSS  
Backend: Supabase (Authentication and Database)  
AI Chatbot: Python with NLP and voice integration  
Hosting: GitHub Pages, Netlify, or Vercel

## Getting Started

### Installation

1. Clone the repository:

2. Install frontend dependencies:

3. Set up Supabase:
- Create a Supabase project at https://supabase.com
- Configure your Supabase URL and Key in your environment variables

4. (Optional) Run the Python chatbot:


### Start the development server:

## Folder Structure

healthconnect/  
├── src/  
│   ├── components/  
│   ├── pages/  
│   ├── assets/  
│   └── services/  
├── chatbot/  
│   └── app.py  
├── tsconfig.app.json  
├── README.md  
└── package.json  

## Authentication and Data Security

- Patients log in using Supabase Auth
- Health reports and appointment data are stored securely with role-based access
- AI chatbot runs locally or through a secure backend integration

## AI Chatbot Features

Built using Python libraries such as speech_recognition, nltk, and pyttsx3 to:
- Answer health-related queries
- Guide patients on using the platform
- Schedule reminders via voice input

## Features Overview

- Login and signup via email
- Upload, view, and download health reports
- Real-time chatbot assistant
- Appointment scheduling
- Automatic medical reminders
- Responsive user interface with Tailwind CSS

## License

This project is open-source under the MIT License.

## Contribution

Feel free to fork the repository, submit pull requests, or raise issues.




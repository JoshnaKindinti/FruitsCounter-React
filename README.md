# Fruits Counter - React Application

A simple, interactive React application that tracks and displays the number of mangoes and bananas Bob eats in real-time. This project demonstrates basic React concepts such as **State Management**, **Event Handling**, and **Component Architecture** using Class Components.

---

## 🚀 Features

* **Real-time Counter:** Click buttons to instantly increment the individual count of mangoes and bananas.
* **Dynamic UI:** Dynamically updates the heading text as the state changes.
* **Clean Layout:** A structured user interface split into card-based blocks for each fruit.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Class Components)
* **Styling:** CSS3 (External stylesheet)

---

## 📁 Project Structure

The core logic of the application resides in the following structure:
```text
src/
├── components/
│   └── FruitsCounter/
│       ├── index.js   <-- (Your provided Component Code)
│       └── index.css  <-- (Component Styles)
├── App.js
└── index.js
```
###💻 Code Overview
State: The component maintains an internal state initialized with mangoes: 0 and bananas: 0.

Event Handlers: onMango and onBanana utilize this.setState() with a functional argument (prevState) to safely update the count based on the previous state.

Destructuring: Extracted mangoes and bananas from this.state inside the render() method for cleaner JSX syntax.

🏁 Getting Started
Follow these steps to get the project up and running locally.

Prerequisites
Make sure you have Node.js (v14.x or higher recommended) and npm installed on your machine. You can check your versions using:

```bash
node -v
npm -v
```
Installation
Clone the repository (or create a new React app if setting up from scratch):

```bash
npx create-react-app fruits-counter-app
cd fruits-counter-app

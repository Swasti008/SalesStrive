# Sales Strive
### Sales Strive is a React-based affiliate marketing application utilizing Redux for state management and Shadcn's design library with Tailwind CSS for UI styling. This application provides features for user authentication, sales tracking, and item exploration with functionalities for searching, sorting, and filtering.

## Features
### 1. Home Page:
1. Introduction to the application.
2. Dummy login with email validation and authentication using credentials stored in JSON.

### 2. Dashboard (Post Login):
1. User profile card showing the user’s name and profile picture.
2. Display of total sales and rewards earned.
3. List of sales including brand, sales value, purchase date, and reward points.
4. Clickable item cards redirect to a detailed description page.
5. Search and sort functionalities by rewards value and date.

### 3. Item Description Page:
1. Detailed description of the selected item.
2. Back button to return to the dashboard.

**Bonus Features:**
   - Filtered items by brand.
   - Implemented pagination with control over items per page.

## State Management:

1. Implemented Redux for managing application state.
2. Used Redux Toolkit to streamline Redux setup and reduce boilerplate code.
## Design and Styling:

1. UtilizeD Shadcn's design library with Tailwind CSS for UI components and styling.
2. Clean, efficient, and user-friendly UI.


## API Interaction:

1. Used axios for interacting with Mock API Data.
## Output:-

## Setup Guide

To set up and run the **Sales Strive** project locally, follow these steps:

### 1. Clone the Repository

Clone the GitHub repository to your local machine:

```bash
git clone https://github.com/Swasti008/SalesStrive.git
```

### 2. Navigate to Project Directory
Change into the project directory:
```
cd salesStrive
```
### 3. Install Dependencies
```
npm install
```
### 4. To Run the project
```
npm run dev
```
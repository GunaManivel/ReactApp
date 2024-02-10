# React Price Card

**Description**

This is a React component named CompA. It is designed to render a pricing section with dynamically generated cards based on the provided `arrObj` prop.

**Installation**

To use this component in your React project, follow these steps:

1. Copy the `CompA.jsx` file into your project's components directory.
2. Ensure you have the necessary dependencies installed:
   + React
   + Bootstrap (assuming Bootstrap classes are used)
3. Import the `CompA`component where you want to use it.
4. Pass the `arrObj` prop to `CompA` with an array of objects containing the necessary data for each pricing card.

**Props**

+ `arrObj` (Array of Objects): An array containing objects with data for each pricing card. Each object should have properties like `Membership`, `Price`, `User`, `Storage`, etc.

**Structure**

+ The component uses Bootstrap classes for styling.
+ Each card is dynamically generated based on the data provided in the `arrObj` prop.
+ The card structure includes a title, price, features list, and a button.

**Note**

+ Ensure that Bootstrap CSS is properly imported into your project to style the component correctly.
+ Customize the component's appearance and functionality according to your project's requirements.
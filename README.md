# Frontend Assignment
Its the clone of the Myntra shopping page, with the vast filtering features and the product display.

<div>
  <img src="./src/assets/Banner.jpg" alt="Project Banner">
</div>

## Features
- Filter products based on 
    - Gender
    - Brand
    - Category
    - Color
    - Disccount range
    - Price range
- Sort products based on
    - Popularity
    - Trending
    - Recommended
- Filtering is given the highest priority, like if user is in women section, then only the women's brands and colors will be shown (not every brands from all the genders and vice-versa)
- Pagination is used for better user experience (each page contains 10 products)
- A dummy product JSON is being created for rendering all the products.
- UI of Myntra is not perfectly responsive, still while building the project,
  responsiveness is taken care of.
- The sidebar behaves as a hamburger menu in mobile screens
- Different GRID view of products are displayed based on the screen size
- For better state management, Zustand is used though it has only single Landing page

## Technologies Used
- React
- Zustand
- TailwindCSS

## Installation
- Clone the repository
- Run `npm install`
- Run `npm run dev`
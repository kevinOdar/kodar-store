# kodar-store

A react project

## Features:

- Filtering products
- Adding products to the cart
- We can view the products on a grid style or a list style

### Upcoming features:

- Payment
- Login
- Save cart items on the local storage
- Sort products

## Dependencies

### Development dependencies

- prettier
- eslint-config-prettier
- eslint-plugin-prettier

### Testing/Documentation dependencies

- @testing-library/jest-dom/extend-expect ==> So we can use testing functions like toHaveTextContent, toBeInTheDocument
- @storybook ==> Tool for UI development

#### Additional information

Adding the line: "eslint.validate": ["hmtl", "javascript", "javascriptreact"], ==> ESLint can shows errors on the coding process.

## Testing

run on console: `npm test -- --coverage`

## Design Systems

run on console: `npm run storybook`

## Deployment

This project is deployed on https://kodar-store.vercel.app/

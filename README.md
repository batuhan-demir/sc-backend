# DouDel

DouDel was developed as part of the Google Solution Challenge 2024 to address the United Nations' 17 challenges to end hunger.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

`git clone https://github.com/batuhan-demir/sc-backend`

`cd sc-backend`

`npm i`

`npm start`

## How It Works

POST: The information of the user registered with the /user/register endpoint is added to the database.

POST: /user/login endpoint to log in and return the required user token.

With /product endpoint, products can be listed, new products can be added, existing products can be updated.

The /user/basket endpoint is used to list the products in the user's basket, add new products, complete the purchase, etc. Product information is stored as id and populated when needed.

## Contact

[iletisim@bdemir.net](mailto:iletisim@bdemir.net)
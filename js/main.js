// დავალება 1
function isMultipleOfFive(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }

  return number % 5 === 0 ? true : false;

  return number % 5 === 0;
}

console.log(isMultipleOfFive(5));

// დავალება 2

function calculateDiscountedPrice(price, discount) {
  const percentage = discount / 100;
  const discountedPrice = price * percentage;
  return Math.round(price - discountedPrice);
}
console.log(calculateDiscountedPrice(997, 30));
// დავალება 3
function functionvaluta(code) {
  const formatvaluta = code;
  if (formatvaluta) {
    functionvaluta = "USD";

    return "$";
    functionvaluta = "GEL";
    return "₾";
    functionvaluta = "EUR";
    return "€";
  } else {
    (" this is true ");
  }
}
console.log(functionvaluta("USD"));

// დავალება 4

function convertToLowerCase(string) {
  const formatedString = string.toLowerCase();
  return formatedString;
}
console.log(convertToLowerCase("MY NAME IS JANE"));
// დავალება 5

function numbererrey(numbers) {
  const filteredArray = numbers.filter((number) => number % 2 === 1);
  return filteredArray;
}

const numbersArr = [10, 8, 30, 16, 50, 12, 7, 8, 9];

const sum = numbersArr.reduce((initialValue, element) => {
  return initialValue + element;
}, 10);

console.log(Math.max(...numbersArr));

console.log(numbererrey(numbersArr));

// დავალება 6

function getCheapestProduct(products) {
  const cheapestProductFromProducts = products.reduce(
    (cheapestProduct, product) =>
      +product.price < +cheapestProduct.price ? product : cheapestProduct
  );

  const cheapestProductFromProducts = products.sort(
    (a, b) => +a.price - +b.price
  )[0];

  return cheapestProductFromProducts;
}

// console.log(getCheapestProduct(data));

// დავალება 7

function functionproduct(products, productTitle) {
  const product = products.find((product) => product.title === productTitle);
  return product;
}

console.log(
  functionproduct(data, "1-წლიანი გარანტიით.PS4  500gb 2ჯოისტიკით+ 400თამაში")
);

greetUser();

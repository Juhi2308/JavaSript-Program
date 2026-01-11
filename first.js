/*fullName = "Tony Stark";
age = 24;
price = 99.9;
const PI = 3.14;
console.log(fullName);*/


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Check Multiple of 5</title>
</head>
<body>
  <h1>Check if a Number is a Multiple of 5</h1>
  <p>When the page loads, it will ask you to enter a number.</p>
  <p>Open the console to see the result.</p>

  <script>
    let num = prompt("Enter a number:");
    num = Number(num); // Convert input to a number
    if (num % 5 === 0) {
      console.log(num + " is a multiple of 5");
    } else {
      console.log(num + " is NOT a multiple of 5");
    }
  </script>
</body>
</html>

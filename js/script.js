let score = 1000;
const totalRight = 4;

const hidingCompartment = Math.floor(Math.random() * 10 + 1);

for (let usedRight = 1; usedRight <= totalRight; usedRight++) {
  let fathersEstimate = Number(prompt("Guess the compartment number!"));

  if (fathersEstimate === hidingCompartment) {
    console.log(`Congratulations, you found your son. Your score is:${score}`);
    break;
  } else if (fathersEstimate < hidingCompartment) {
    console.log("Your son is in a compartment with a larger number");
    score = score - 250;
  } else if (fathersEstimate > hidingCompartment) {
    console.log("Your son is in a compartment with a smaller number");
    score = score - 250;
  }

  if (usedRight === 4) {
    console.log(
      `Unfortunately, you didn't find your son. Your score is: ${score}`
    );
    break;
  }
}

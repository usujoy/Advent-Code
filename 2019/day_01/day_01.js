const masses = Deno.readTextFileSync("./day-1-input.txt");

const massesInNumbers = masses.split("\n").map((number) => +number);

const fuelNeeded = (mass) => {
  return Math.floor(mass / 3) - 2;
};

const totalFuel = (fuel) => {
  const requiredFuel = fuelNeeded(fuel);
  if (requiredFuel < 2) {
    return 0;
  }

  return requiredFuel + totalFuel(requiredFuel);
};

const fuel = massesInNumbers.reduce(
  (sum, masses) => sum + fuelNeeded(masses),
  0
);

const totalFuelNeeded = fuel + totalFuel(fuel);

console.log(totalFuelNeeded);

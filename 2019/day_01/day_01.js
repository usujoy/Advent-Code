const totalFuel = (shipMasses) => {
  const eachMasses = shipMasses.map((mass) => {
    const newMass = Math.floor(mass / 3) - 2;

    return newMass < 0 ? 0 : newMass;
  });

  if (eachMasses.every((mass) => mass === 0)) {
    return eachMasses;
  }

  return totalFuel(eachMasses).map((mass, i) => mass + eachMasses[i]);
};

const add = (value1, value2) => value1 + value2;

const main = () => {
  const data = Deno.readTextFileSync("./2019/day_01/day-1-input.txt");
  const masses = data.split("\n").map((mass) => +mass);

  return totalFuel(masses).reduce(add, 0);
};

console.log(main());

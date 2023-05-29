const createLogo = (name) =>  // name = "Antony Lambi"
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export { createLogo };

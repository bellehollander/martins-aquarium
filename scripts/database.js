const database = {
  fish: [
    {
      species: "discus",
      length: "5",
      name: "Emma",
      location: "Amazon",
      food: "algae flakes, tropical flakes, or shrimp pellets",
      imgUrl:
        "https://images3.ratemyfishtank.com/photo/370x370/0/177/fish-5970565-1920-bfwfozi.jpg",
    },
    {
      species: "Flowerhorn Cichlid",
      length: "12",
      name: "Louisa ",
      location: "Thailand",
      food: "whole fish or crustaceans",
      imgUrl:
        "https://i5.walmartimages.com/asr/dcf4d812-96dd-429f-ba98-ed0405543fca.c76d68da0d56c548b962cdd0a653b923.jpeg",
    },
    {
      species: " Dwarf Puffer Fish",
      length: "1",
      name: "Sweetie",
      location: "Southern Karnataka",
      food: "small snails, bloodworms, brine shrimp",
      imgUrl:
        "https://aquadiction.world/img/profile/1037-dwarf-pufferfish1.jpg",
    },
    {
      species: "Zebra Plecos",
      length: "2",
      name: "Cruz",
      location: " Rio Xingu ",
      food: "brine shrimp and bloodworms",
      imgUrl:
        "https://i.pinimg.com/736x/01/a4/18/01a41843939a823ca91d95370d37abed--freshwater-aquarium-aquarium-fish.jpg",
    },
    {
      species: "Black Ghost Knifefish",
      length: "18",
      name: "Kirsten",
      location: "Venezuela",
      food: "Daphnia, Brine Shrimp",
      imgUrl:
        "https://www.aquariumnetwork.com/wp-content/uploads/2014/07/Black-Ghost-Knife-Fish.jpg",
    },
    {
      species: "Freshwater African Butterflyfish",
      length: "5",
      name: "Ellise ",
      location: "Sierra Leone",
      food: "spiders, flies, crickets",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0274/9749/6712/products/image_195b910f-1b5e-4d16-a377-f2f89aae87b3.jpg?v=1625862219",
    },
  ],

  tips: [
    {
      id: "1",
      tipName: "Properly condition your water",
      description: `The properties of your tank’s water is crucial to the long-term well-being of your fish. Remember that tap water contains many properties, such as minerals that need to be balanced out.`,
    },

    {
      id: "2",
      tipName: "Maintain pH balance and other chemical levels",
      description: `pH levels measure the balance of acidity and alkalinity in your aquarium’s water`,
    },

    {
      id: "3",
      tipName: "Make sure water temperature is right.",
      description: `Freshwater fish need a constant water temperature between 72°F – 82°F; saltwater fish thrive between 75°F – 80°F.`,
    },

    {
      id: "4",
      tipName: "Clean tank glass and other structures.",
      description:
        "Algae buildup gives your tank a murky, swampy look, and reduces the amount of oxygen in the water. ",
    },
  ],
};
let locationVariable = [];
database.fish.map(function (data) {
  locationVariable.push(data.location);
});

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
export const getTips = () => {
  return database.tips.map((tips) => ({ ...tips }));
};
export const getLocation = () => {
  return locationVariable;
};

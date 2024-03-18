import { tezos } from "./tezos";

export const changeName = async (name: string) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1L9K6UjrAQXbMWWBAkVsXmx99aCPZ8PunR"
    );
    const op = await contract.methods.changeName(name).send();
    return op.confirmation();
  } catch (error) {
    console.error(error);
  }
};

export const changeAge = async (age: number) => {
  try {
    const contract = await tezos.wallet.at(
      "KT1L9K6UjrAQXbMWWBAkVsXmx99aCPZ8PunR"
    );
    const op = await contract.methods.changeAge(age).send();
    return op.confirmation();
  } catch (error) {
    console.error(error);
  }
};

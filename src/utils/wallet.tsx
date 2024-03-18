import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-dapp";

export const wallet = new BeaconWallet({
  name: "Person",
  preferredNetwork: NetworkType.GHOSTNET,
});

export const connectWallet = async () => {
  console.log("Connecting to beacon");
  try {
    const res = await wallet.requestPermissions({
      network: {
        type: NetworkType.GHOSTNET,
      },
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  console.log("Connected to beacon");
};

export const getAccount = async () => {
  const connectedWallet = await wallet.client.getActiveAccount();
  if (connectedWallet) {
    return connectedWallet.address;
  } else return "";
};

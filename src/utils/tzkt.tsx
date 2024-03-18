// storage interaction
export const fetchStorage = async () => {
  const res = await fetch(
    "https://api.ghostnet.tzkt.io/v1/contracts/KT1L9K6UjrAQXbMWWBAkVsXmx99aCPZ8PunR/storage"
  );
  const data = await res.json();
  return data;
};

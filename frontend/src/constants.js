export const PRIORITATI = [
  { value: "mica", label: "Mică" },
  { value: "medie", label: "Medie" },
  { value: "mare", label: "Mare" },
];

export const ETICHETE_PRIORITATE = Object.fromEntries(
  PRIORITATI.map((p) => [p.value, p.label])
);

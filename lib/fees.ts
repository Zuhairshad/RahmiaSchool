// Fee structure shown on the Fee Structure page. Amounts are monthly, in PKR.
export type FeeRow = {
  level: string;
  classes: string;
  monthly: number | null;
};

export const feeRows: FeeRow[] = [
  { level: "Preschool & Primary", classes: "Play Group to Grade 5", monthly: 2000 },
  { level: "Middle School", classes: "Grade 6 – 8", monthly: 3000 },
  { level: "Hifz with Understanding", classes: "Boys, from Grade 4", monthly: 2500 },
  { level: "High School", classes: "Grade 9 – 10", monthly: 4000 },
];

// Charged in addition to the monthly fee, the same for every level.
export const extraCharges = [
  { label: "Admission fee", amount: 5000 },
  { label: "Annual charges", amount: 3000 },
];

export const formatFee = (amount: number | null) =>
  amount === null ? "Contact the school" : `PKR ${amount.toLocaleString("en-US")}`;

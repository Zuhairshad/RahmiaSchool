// Fee structure shown on the Fee Structure page. Fill in the amounts (in PKR)
// here; a level whose amount is still null shows "Contact the school" until then.
export type FeeRow = {
  level: string;
  classes: string;
  admission: number | null;
  monthly: number | null;
};

export const feeRows: FeeRow[] = [
  { level: "Preschool", classes: "Play Group, Nursery & Prep", admission: null, monthly: null },
  { level: "Primary", classes: "Class 1 – 5", admission: null, monthly: null },
  { level: "Middle School", classes: "Class 6 – 8", admission: null, monthly: null },
  { level: "High School", classes: "Class 9 – 10", admission: null, monthly: null },
  { level: "Hifz with Understanding", classes: "Boys, from Grade 4", admission: null, monthly: null },
];

export const formatFee = (amount: number | null) =>
  amount === null ? "Contact the school" : `PKR ${amount.toLocaleString("en-US")}`;

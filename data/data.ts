export type Tchart = (typeof chart)[number];
export type TOrders = {
  id: number;
  name: string;
  date: Date | undefined;
  amount: number;
  status: "paid" | "refund";
  photo: string;
};

export const chart = [
  {
    id: 1,
    title: "Total Order",
    amount: 350,
  },
  {
    id: 2,
    title: "Total Refund",
    amount: 270,
  },
  {
    id: 3,
    title: "Average Sales",
    amount: 1567,
  },
  {
    id: 4,
    title: "Total Order",
    amount: 350,
  },
];

export const Orders: TOrders[] = [
  {
    id: 1,
    name: "Marcus Bergson",
    date: new Date(2023, 10, 16),
    amount: 80000,
    status: "paid",
    photo:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Jaydon Vaccaro",
    date: new Date(2023, 10, 16),
    amount: 150000,
    status: "refund",
    photo:
      "https://images.unsplash.com/photo-1592598015799-35c84b09394c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Corey Schieifer",
    date: new Date(2023, 10, 15),
    amount: 87000,
    status: "paid",
    photo:
      "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Cooper Press",
    date: new Date(2023, 10, 15),
    amount: 100000,
    status: "refund",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Philip Lubin",
    date: new Date(2023, 10, 14),
    amount: 78000,
    status: "paid",
    photo:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const top_platform = [
  {
    id: 1,
    platform: "Book Bazaar",
    amount: 2500000,
    percent: 15,
  },
  {
    id: 2,
    platform: "Artisan Aisle",
    amount: 1800000,
    percent: 10,
  },
  {
    id: 3,
    platform: "Toy Troop",
    amount: 1200000,
    percent: 8,
  },
  {
    id: 4,
    platform: "XStore",
    amount: 1000000,
    percent: 7,
  },
];

export type TPlatform = (typeof top_platform)[number];

import {
  ShieldCheck, CreditCard, Wifi, TrainFront, Plane, Smartphone, HeartPulse, UtensilsCrossed, ShoppingBag,
  CalendarDays, Ticket, Car, Map, ListChecks, Siren, BatteryCharging, Receipt, Coins, Languages,
} from "lucide-react";

const MAP = {
  visa: { Icon: ShieldCheck, cls: "bg-red-50 text-red-600" },
  pay: { Icon: CreditCard, cls: "bg-blue-50 text-blue-600" },
  wifi: { Icon: Wifi, cls: "bg-violet-50 text-violet-600" },
  train: { Icon: TrainFront, cls: "bg-emerald-50 text-emerald-600" },
  plane: { Icon: Plane, cls: "bg-sky-50 text-sky-600" },
  apps: { Icon: Smartphone, cls: "bg-amber-50 text-amber-600" },
  shield: { Icon: HeartPulse, cls: "bg-rose-50 text-rose-600" },
  food: { Icon: UtensilsCrossed, cls: "bg-orange-50 text-orange-600" },
  bag: { Icon: ShoppingBag, cls: "bg-pink-50 text-pink-600" },
  calendar: { Icon: CalendarDays, cls: "bg-teal-50 text-teal-600" },
  ticket: { Icon: Ticket, cls: "bg-indigo-50 text-indigo-600" },
  car: { Icon: Car, cls: "bg-orange-50 text-orange-600" },
  map: { Icon: Map, cls: "bg-lime-50 text-lime-700" },
  check: { Icon: ListChecks, cls: "bg-emerald-50 text-emerald-600" },
  sos: { Icon: Siren, cls: "bg-rose-50 text-rose-600" },
  battery: { Icon: BatteryCharging, cls: "bg-yellow-50 text-yellow-700" },
  receipt: { Icon: Receipt, cls: "bg-cyan-50 text-cyan-700" },
  coins: { Icon: Coins, cls: "bg-amber-50 text-amber-600" },
  lang: { Icon: Languages, cls: "bg-sky-50 text-sky-600" },
} as const;

export type IconName = keyof typeof MAP;

export function IconBox({ name, size = "md" }: { name: IconName; size?: "sm" | "md" | "lg" }) {
  const { Icon, cls } = MAP[name] ?? MAP.map;
  const box = size === "lg" ? "h-14 w-14" : size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const ic = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-xl ${box} ${cls}`}>
      <Icon className={ic} />
    </span>
  );
}

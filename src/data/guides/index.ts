import type { Guide } from "@/data/types";

// Visa & Entry
import visaFreeCountries from "./visa-free-countries";
import transit240 from "./240-hour-transit";
import chinaTouristVisaL from "./china-tourist-visa-l";
import specialVisaFree from "./special-visa-free";
import onlineArrivalCard from "./online-arrival-card";
import arrivalImmigration from "./arrival-immigration";
// Money & Internet
import alipayWechatPay from "./alipay-wechat-pay";
import atmCashDcc from "./atm-cash-dcc";
import internetEsim from "./internet-esim";
import essentialApps from "./essential-apps";
// Transport
import highSpeedTrains from "./high-speed-trains";
import metroDidiMaps from "./metro-didi-maps";
import domesticFlights from "./domestic-flights";
import airports from "./airports";
import sharedBikes from "./shared-bikes";
import drivingInChina from "./driving-in-china";
// Food & Shopping
import foodOrderingAllergies from "./food-ordering-allergies";
import bubbleTeaCoffee from "./bubble-tea-coffee";
import foodDeliveryLuggage from "./food-delivery-luggage";
import shoppingTaxRefund from "./shopping-tax-refund";
// Practical
import hotelsInChina from "./hotels-in-china";
import medicationsCustomsLostPhone from "./medications-customs-lost-phone";
import attractionTickets from "./attraction-tickets";
import whenToGo from "./when-to-go";
import safetyHealth from "./safety-health";

export const GUIDES: Guide[] = [
  visaFreeCountries,
  transit240,
  chinaTouristVisaL,
  specialVisaFree,
  onlineArrivalCard,
  arrivalImmigration,
  alipayWechatPay,
  atmCashDcc,
  internetEsim,
  essentialApps,
  highSpeedTrains,
  metroDidiMaps,
  domesticFlights,
  airports,
  sharedBikes,
  drivingInChina,
  foodOrderingAllergies,
  bubbleTeaCoffee,
  foodDeliveryLuggage,
  shoppingTaxRefund,
  hotelsInChina,
  medicationsCustomsLostPhone,
  attractionTickets,
  whenToGo,
  safetyHealth,
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
export const guidesByCategory = (c: Guide["category"]) => GUIDES.filter((g) => g.category === c);

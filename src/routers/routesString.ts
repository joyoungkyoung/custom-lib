const BASE = "/mobile";

const MENUS = `${BASE}/menus`;
const ADVANCE_RESERVATION = `${BASE}/advance-reservation`;
const CALL = `${BASE}/call`;
const BUS_ROUTE = `${BASE}/bus-route`;
const PAY = `${BASE}/pay`;
const TICKET = `${BASE}/ticket`;

export const RoutesString = {
  Main: `${BASE}`,

  UserAuth: `${BASE}/user-auth`,

  Menus: `${MENUS}`,
  Faq: `${MENUS}/faq`,
  Notice: `${MENUS}/notice`,
  InformationUse: `${MENUS}/information-use`,
  TermsPolicy: `${MENUS}/terms-policy`,
  TermsPolicyDeatil: `${MENUS}/terms-policy/details`,
  BookingHistory: `${MENUS}/booking-history`,

  CallMain: `${BASE}/call-main`,

  AdvanceReservation: `${ADVANCE_RESERVATION}`,
  AdvanceReservationHome: `${ADVANCE_RESERVATION}/home`,
  SelectBoadingTime: `${ADVANCE_RESERVATION}/select-boarding-time`,
  SelectBoadingPlace: `${ADVANCE_RESERVATION}/select-boarding-place`,
  AdvanceReservationView: `${ADVANCE_RESERVATION}/view`,

  Call: `${CALL}`,

  BusRoute: `${BUS_ROUTE}`,
  BusRouteCheck: `${BUS_ROUTE}/check`,
  BusRouteConfirm: `${BUS_ROUTE}/confirm`,

  Pay: `${PAY}`,
  PayStart: `${PAY}/start`,
  PayFail: `${PAY}/fail`,
  PayComplete: `${PAY}/complete`,
  PayApproval: `${PAY}/approval`,

  Ticket: `${TICKET}`,
  TicketReceipt: `${TICKET}/receipt`,

  BusOperation: `${BASE}/bus-operation`,
} as const;

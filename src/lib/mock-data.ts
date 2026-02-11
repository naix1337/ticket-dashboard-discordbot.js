// Mock data for the Discord Ticket Bot Dashboard

export type TicketStatus = "open" | "in_progress" | "closed";
export type TicketCategory = "general" | "bug" | "feature" | "billing" | "other";

export interface Ticket {
  id: string;
  title: string;
  status: TicketStatus;
  category: TicketCategory;
  creator: string;
  assignee: string | null;
  createdAt: string;
  messages: { author: string; content: string; time: string; isStaff: boolean }[];
}

export interface Supporter {
  id: string;
  name: string;
  avatar: string;
  ticketsHandled: number;
  avgResponseTime: string;
  online: boolean;
}

export const tickets: Ticket[] = [
  {
    id: "T-1001", title: "Server Zugang funktioniert nicht", status: "open", category: "bug",
    creator: "Max#1234", assignee: "Anna#5678", createdAt: "2026-02-11T10:30:00",
    messages: [
      { author: "Max#1234", content: "Ich kann mich nicht auf dem Server einloggen.", time: "10:30", isStaff: false },
      { author: "Anna#5678", content: "Kannst du mir deinen Benutzernamen nennen?", time: "10:35", isStaff: true },
    ],
  },
  {
    id: "T-1002", title: "Neuen Channel erstellen", status: "in_progress", category: "feature",
    creator: "Lisa#4321", assignee: "Tom#9999", createdAt: "2026-02-10T14:15:00",
    messages: [
      { author: "Lisa#4321", content: "Kann ein neuer Projekt-Channel erstellt werden?", time: "14:15", isStaff: false },
      { author: "Tom#9999", content: "Welches Projekt betrifft es?", time: "14:20", isStaff: true },
      { author: "Lisa#4321", content: "Projekt Alpha – für das Design-Team.", time: "14:22", isStaff: false },
    ],
  },
  {
    id: "T-1003", title: "Bot antwortet nicht", status: "open", category: "bug",
    creator: "Paul#7777", assignee: null, createdAt: "2026-02-11T08:45:00",
    messages: [
      { author: "Paul#7777", content: "Der Bot reagiert auf keinen Befehl mehr.", time: "08:45", isStaff: false },
    ],
  },
  {
    id: "T-1004", title: "Rechnung fehlt", status: "closed", category: "billing",
    creator: "Sara#2222", assignee: "Anna#5678", createdAt: "2026-02-09T16:00:00",
    messages: [
      { author: "Sara#2222", content: "Ich habe keine Rechnung für Januar bekommen.", time: "16:00", isStaff: false },
      { author: "Anna#5678", content: "Ich habe sie gerade erneut gesendet.", time: "16:10", isStaff: true },
      { author: "Sara#2222", content: "Danke, ist angekommen!", time: "16:15", isStaff: false },
    ],
  },
  {
    id: "T-1005", title: "Allgemeine Frage zu Rollen", status: "closed", category: "general",
    creator: "Jan#3333", assignee: "Tom#9999", createdAt: "2026-02-08T11:00:00",
    messages: [
      { author: "Jan#3333", content: "Wie bekomme ich die Moderator-Rolle?", time: "11:00", isStaff: false },
      { author: "Tom#9999", content: "Du musst dich im #bewerbungen Channel bewerben.", time: "11:05", isStaff: true },
    ],
  },
  {
    id: "T-1006", title: "Emoji-Vorschlag", status: "open", category: "feature",
    creator: "Mia#5555", assignee: "Anna#5678", createdAt: "2026-02-11T09:00:00",
    messages: [
      { author: "Mia#5555", content: "Können wir Custom-Emojis hinzufügen?", time: "09:00", isStaff: false },
    ],
  },
];

export const supporters: Supporter[] = [
  { id: "1", name: "Anna#5678", avatar: "A", ticketsHandled: 142, avgResponseTime: "3 Min", online: true },
  { id: "2", name: "Tom#9999", avatar: "T", ticketsHandled: 98, avgResponseTime: "5 Min", online: true },
  { id: "3", name: "Lena#1111", avatar: "L", ticketsHandled: 67, avgResponseTime: "8 Min", online: false },
  { id: "4", name: "Felix#4444", avatar: "F", ticketsHandled: 45, avgResponseTime: "4 Min", online: true },
];

export const ticketChartData = [
  { day: "Mo", opened: 12, closed: 8 },
  { day: "Di", opened: 8, closed: 10 },
  { day: "Mi", opened: 15, closed: 12 },
  { day: "Do", opened: 10, closed: 9 },
  { day: "Fr", opened: 6, closed: 11 },
  { day: "Sa", opened: 3, closed: 5 },
  { day: "So", opened: 4, closed: 2 },
];

export const categoryData = [
  { name: "Bug", value: 35, fill: "hsl(234 89% 63%)" },
  { name: "Feature", value: 25, fill: "hsl(142 71% 45%)" },
  { name: "Billing", value: 15, fill: "hsl(38 92% 50%)" },
  { name: "General", value: 20, fill: "hsl(220 9% 46%)" },
  { name: "Sonstiges", value: 5, fill: "hsl(0 84% 60%)" },
];

export const recentActivities = [
  { id: 1, text: "Anna#5678 hat Ticket T-1001 übernommen", time: "vor 5 Min" },
  { id: 2, text: "Ticket T-1004 wurde geschlossen", time: "vor 15 Min" },
  { id: 3, text: "Neues Ticket T-1006 erstellt von Mia#5555", time: "vor 30 Min" },
  { id: 4, text: "Tom#9999 hat auf T-1002 geantwortet", time: "vor 1 Std" },
  { id: 5, text: "Ticket T-1005 wurde geschlossen", time: "vor 2 Std" },
];

export const botConfig = {
  categories: [
    { id: "1", name: "Bug", emoji: "🐛", description: "Fehlermeldungen und Bugs" },
    { id: "2", name: "Feature", emoji: "✨", description: "Feature-Vorschläge" },
    { id: "3", name: "Billing", emoji: "💰", description: "Abrechnungsfragen" },
    { id: "4", name: "General", emoji: "💬", description: "Allgemeine Fragen" },
  ],
  autoReplies: {
    greeting: "Willkommen! Ein Supporter wird sich in Kürze um dein Anliegen kümmern. 🎫",
    closing: "Dein Ticket wurde geschlossen. Danke für deine Geduld! ⭐",
  },
  supportRoles: ["Moderator", "Admin", "Support-Team"],
  channelCategory: "Support-Tickets",
};

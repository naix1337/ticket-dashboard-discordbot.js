import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Ticket, CheckCircle, Clock, Users } from "lucide-react";
import { tickets, ticketChartData, categoryData, recentActivities, supporters } from "@/lib/mock-data";

const stats = [
  { label: "Offene Tickets", value: tickets.filter((t) => t.status === "open").length, icon: Ticket, color: "text-primary" },
  { label: "Geschlossen heute", value: 5, icon: CheckCircle, color: "text-[hsl(var(--success))]" },
  { label: "Ø Antwortzeit", value: "4 Min", icon: Clock, color: "text-[hsl(var(--warning))]" },
  { label: "Aktive Supporter", value: supporters.filter((s) => s.online).length, icon: Users, color: "text-primary" },
];

const chartConfig = {
  opened: { label: "Eröffnet", color: "hsl(234 89% 63%)" },
  closed: { label: "Geschlossen", color: "hsl(142 71% 45%)" },
};

const Dashboard = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Dashboard</h1>

    {/* Stat Cards */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardContent className="flex items-center gap-4 p-5">
            <div className={`rounded-xl bg-accent p-3 ${s.color}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Charts Row */}
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle className="text-base">Ticket-Verlauf (7 Tage)</CardTitle></CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart data={ticketChartData}>
              <XAxis dataKey="day" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="opened" fill="var(--color-opened)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="closed" fill="var(--color-closed)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">Nach Kategorie</CardTitle></CardHeader>
        <CardContent className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2}>
                {categoryData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Pie>
              <ChartTooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
        <div className="flex flex-wrap gap-3 px-6 pb-4">
          {categoryData.map((c) => (
            <div key={c.name} className="flex items-center gap-1.5 text-xs">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.fill }} />
              {c.name}
            </div>
          ))}
        </div>
      </Card>
    </div>

    {/* Recent Activity */}
    <Card>
      <CardHeader><CardTitle className="text-base">Letzte Aktivitäten</CardTitle></CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentActivities.map((a) => (
            <div key={a.id} className="flex items-center justify-between rounded-lg bg-accent/50 px-4 py-2.5 text-sm">
              <span>{a.text}</span>
              <span className="text-muted-foreground text-xs whitespace-nowrap ml-4">{a.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Dashboard;

import { supporters } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const Team = () => {
  const sorted = [...supporters].sort((a, b) => b.ticketsHandled - a.ticketsHandled);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Team</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sorted.map((s, i) => (
          <Card key={s.id} className="relative overflow-hidden">
            {i === 0 && (
              <div className="absolute right-3 top-3">
                <Trophy className="h-5 w-5 text-[hsl(var(--warning))]" />
              </div>
            )}
            <CardContent className="flex flex-col items-center gap-3 pt-6 pb-5">
              <Avatar className="h-14 w-14">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                  {s.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="font-semibold">{s.name}</p>
                <Badge variant={s.online ? "default" : "secondary"} className="mt-1 text-xs">
                  {s.online ? "Online" : "Offline"}
                </Badge>
              </div>
              <div className="mt-2 grid w-full grid-cols-2 gap-2 text-center">
                <div className="rounded-lg bg-accent p-2">
                  <p className="text-lg font-bold">{s.ticketsHandled}</p>
                  <p className="text-xs text-muted-foreground">Tickets</p>
                </div>
                <div className="rounded-lg bg-accent p-2">
                  <p className="text-lg font-bold">{s.avgResponseTime}</p>
                  <p className="text-xs text-muted-foreground">Ø Antwort</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ranking Table */}
      <Card>
        <CardHeader><CardTitle className="text-base">Leistungs-Ranking</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sorted.map((s, i) => (
              <div key={s.id} className="flex items-center gap-4 rounded-lg bg-accent/50 px-4 py-3">
                <span className="text-lg font-bold text-muted-foreground w-6 text-center">#{i + 1}</span>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">{s.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-sm">{s.name}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold">{s.ticketsHandled} Tickets</p>
                  <p className="text-xs text-muted-foreground">Ø {s.avgResponseTime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;

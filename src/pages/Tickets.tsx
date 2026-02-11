import { useState } from "react";
import { tickets, type Ticket, type TicketStatus, type TicketCategory } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const statusBadge: Record<TicketStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  open: { label: "Offen", variant: "destructive" },
  in_progress: { label: "In Bearbeitung", variant: "default" },
  closed: { label: "Geschlossen", variant: "secondary" },
};

const Tickets = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Ticket | null>(null);

  const filtered = tickets.filter((t) => {
    if (statusFilter !== "all" && t.status !== statusFilter) return false;
    if (categoryFilter !== "all" && t.category !== categoryFilter) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tickets</h1>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-base">Alle Tickets</CardTitle>
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Suchen..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-8 w-48" />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-36"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Status</SelectItem>
                  <SelectItem value="open">Offen</SelectItem>
                  <SelectItem value="in_progress">In Bearbeitung</SelectItem>
                  <SelectItem value="closed">Geschlossen</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-36"><SelectValue placeholder="Kategorie" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Kategorien</SelectItem>
                  <SelectItem value="bug">Bug</SelectItem>
                  <SelectItem value="feature">Feature</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Titel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Kategorie</TableHead>
                <TableHead className="hidden md:table-cell">Ersteller</TableHead>
                <TableHead className="hidden lg:table-cell">Zugewiesen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((t) => (
                <TableRow key={t.id} className="cursor-pointer" onClick={() => setSelected(t)}>
                  <TableCell className="font-mono text-xs">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.title}</TableCell>
                  <TableCell><Badge variant={statusBadge[t.status].variant}>{statusBadge[t.status].label}</Badge></TableCell>
                  <TableCell className="hidden md:table-cell capitalize">{t.category}</TableCell>
                  <TableCell className="hidden md:table-cell">{t.creator}</TableCell>
                  <TableCell className="hidden lg:table-cell">{t.assignee ?? "—"}</TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Keine Tickets gefunden</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Ticket Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="font-mono text-sm text-muted-foreground">{selected?.id}</span>
              {selected?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 text-sm">
            {selected && <Badge variant={statusBadge[selected.status].variant}>{statusBadge[selected.status].label}</Badge>}
            <Badge variant="outline" className="capitalize">{selected?.category}</Badge>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {selected?.messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.isStaff ? "flex-row-reverse" : ""}`}>
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarFallback className={`text-xs ${m.isStaff ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                    {m.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className={`rounded-xl px-3 py-2 text-sm max-w-[80%] ${m.isStaff ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                  <p className="text-xs font-medium mb-1 opacity-70">{m.author} · {m.time}</p>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tickets;

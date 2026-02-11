import { useState } from "react";
import { botConfig } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Config = () => {
  const [categories, setCategories] = useState(botConfig.categories);
  const [greeting, setGreeting] = useState(botConfig.autoReplies.greeting);
  const [closing, setClosing] = useState(botConfig.autoReplies.closing);
  const [roles, setRoles] = useState(botConfig.supportRoles);
  const [channelCategory, setChannelCategory] = useState(botConfig.channelCategory);
  const [newRole, setNewRole] = useState("");

  const addRole = () => {
    if (newRole.trim() && !roles.includes(newRole.trim())) {
      setRoles([...roles, newRole.trim()]);
      setNewRole("");
      toast.success("Rolle hinzugefügt");
    }
  };

  const removeCategory = (id: string) => {
    setCategories(categories.filter((c) => c.id !== id));
    toast.success("Kategorie entfernt");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Bot-Konfiguration</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Categories */}
        <Card>
          <CardHeader><CardTitle className="text-base">Ticket-Kategorien</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {categories.map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-lg border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.emoji}</span>
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeCategory(c.id)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full" onClick={() => {
              setCategories([...categories, { id: String(Date.now()), name: "Neue Kategorie", emoji: "📋", description: "Beschreibung" }]);
              toast.success("Kategorie hinzugefügt");
            }}>
              <Plus className="h-4 w-4 mr-1" /> Kategorie hinzufügen
            </Button>
          </CardContent>
        </Card>

        {/* Auto-Replies */}
        <Card>
          <CardHeader><CardTitle className="text-base">Auto-Reply Nachrichten</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Begrüßung</label>
              <Textarea value={greeting} onChange={(e) => setGreeting(e.target.value)} rows={3} className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Abschlussnachricht</label>
              <Textarea value={closing} onChange={(e) => setClosing(e.target.value)} rows={3} className="mt-1" />
            </div>
            <Button size="sm" onClick={() => toast.success("Gespeichert!")}>Speichern</Button>
          </CardContent>
        </Card>

        {/* Support Roles */}
        <Card>
          <CardHeader><CardTitle className="text-base">Support-Rollen</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <Badge key={r} variant="secondary" className="gap-1 pr-1">
                  {r}
                  <button onClick={() => { setRoles(roles.filter((x) => x !== r)); toast.success("Rolle entfernt"); }}
                    className="ml-1 rounded-full p-0.5 hover:bg-destructive/20">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input placeholder="Neue Rolle..." value={newRole} onChange={(e) => setNewRole(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addRole()} />
              <Button size="sm" onClick={addRole}>Hinzufügen</Button>
            </div>
          </CardContent>
        </Card>

        {/* Channel Settings */}
        <Card>
          <CardHeader><CardTitle className="text-base">Kanal-Einstellungen</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium">Ticket-Kategorie (Discord)</label>
              <Input value={channelCategory} onChange={(e) => setChannelCategory(e.target.value)} className="mt-1" />
            </div>
            <Button size="sm" onClick={() => toast.success("Gespeichert!")}>Speichern</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Config;

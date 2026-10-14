import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, PawPrint, MessageCircle, ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

// Dados atualizados com novos nomes e características
const mockMatches = [
  {
    id: 1,
    name: "Pipoca",
    species: "Cachorro",
    age: "1 ano",
    size: "Pequeno",
    energy: 5,
    matchScore: 95,
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop",
    ongName: "ONG Lar Seguro",
    reason: "Alta compatibilidade: Seu perfil ativo combina perfeitamente com a energia contagiante deste filhote.",
  },
  {
    id: 2,
    name: "Mingau",
    species: "Gato",
    age: "5 anos",
    size: "Médio",
    energy: 1,
    matchScore: 89,
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
    ongName: "Gatos do Bem",
    reason: "Excelente match: Ele prefere um ambiente tranquilo, assim como você.",
  },
  {
    id: 3,
    name: "Farofa",
    species: "Cachorro",
    age: "3 anos",
    size: "Médio",
    energy: 4,
    matchScore: 82,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    ongName: "Adote um Amigo",
    reason: "Boa compatibilidade: Um companheiro ideal para caminhadas diárias.",
  },
  {
    id: 4,
    name: "Tofu",
    species: "Gato",
    age: "2 anos",
    size: "Pequeno",
    energy: 3,
    matchScore: 75,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop",
    ongName: "Proteção Animal",
    reason: "Compatibilidade moderada: Gato brincalhão que adora atenção.",
  },
];

export function AdopterDashboard() {
  return (
    <div className="min-h-screen bg-parchment/30">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrint className="w-8 h-8 text-violet" />
            <span className="text-xl font-bold text-violet">AnimalMatch</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild className="text-lg text-violet">
              <Link to="/"><ArrowLeft className="mr-2 h-5 w-5" /> Início</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-violet">Meus Matches</h1>
          <p className="text-xl text-gray-600">Encontramos {mockMatches.length} pets compatíveis com seu perfil.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="rounded-3xl p-6 shadow-lg border-none">
            <p className="text-base text-gray-500 font-medium">Total de Matches</p>
            <div className="text-5xl font-bold text-violet mt-2">{mockMatches.length}</div>
          </Card>
          <Card className="rounded-3xl p-6 shadow-lg border-none">
            <p className="text-base text-gray-500 font-medium">Match Mais Alto</p>
            <div className="text-5xl font-bold text-groovy mt-2">95%</div>
          </Card>
          <Card className="rounded-3xl p-6 shadow-lg border-none">
            <p className="text-base text-gray-500 font-medium">Conversas Ativas</p>
            <div className="text-5xl font-bold text-violet mt-2">2</div>
          </Card>
        </div>

        {/* Matches Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mockMatches.map((match) => (
            <Card key={match.id} className="rounded-3xl shadow-xl border-none overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={match.image} alt={match.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-3xl text-violet font-bold">{match.name}</CardTitle>
                  <Badge className="bg-groovy text-lg px-4 py-1">{match.matchScore}% Match</Badge>
                </div>
                <p className="text-lg text-gray-500">{match.ongName}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-base">{match.species}</Badge>
                  <Badge variant="outline" className="text-base">{match.size}</Badge>
                </div>
                <Progress value={match.matchScore} className="h-3" />
                <p className="text-lg bg-sky/20 p-4 rounded-xl">{match.reason}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button className="flex-1 text-lg py-6 rounded-xl" variant="outline">Conversar</Button>
                <Button className="flex-1 text-lg py-6 rounded-xl bg-violet">Ver Detalhes</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
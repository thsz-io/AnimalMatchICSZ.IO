import { Link } from "react-router";
import { motion } from "motion/react";
import { PawPrint, Plus, Eye, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Nomes e dados dos animais atualizados conforme solicitado
const mockAnimals = [
  {
    id: 1,
    name: "Cartola",
    species: "Gato",
    age: "2 anos",
    size: "Médio",
    energy: 4,
    status: "Em Triagem",
    matchesCount: 10,
    requestsCount: 3,
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop",
    daysInShelter: 12,
  },
  {
    id: 2,
    name: "Soneca",
    species: "Gato",
    age: "7 anos",
    size: "Médio",
    energy: 1,
    status: "Disponível",
    matchesCount: 5,
    requestsCount: 2,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    daysInShelter: 90,
  },
  {
    id: 3,
    name: "Bolinha",
    species: "Gato",
    age: "1 ano",
    size: "Pequeno",
    energy: 5,
    status: "Disponível",
    matchesCount: 20,
    requestsCount: 8,
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
    daysInShelter: 5,
  },
  {
    id: 4,
    name: "Fumaça",
    species: "Cachorro",
    age: "4 anos",
    size: "Grande",
    energy: 3,
    status: "Em Processo",
    matchesCount: 9,
    requestsCount: 4,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    daysInShelter: 35,
  },
];

export function OngDashboard() {
  return (
    <div className="min-h-screen bg-parchment/30">
      {/* Header */}
      {/* Header - Compare com o seu atual */}
<header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <PawPrint className="w-8 h-8 text-violet" />
      <span className="text-xl font-bold text-violet">Animal Match - Painel ONG</span>
    </div>
    
    <div className="flex gap-4">
      {/* --- AQUI ESTÁ A ADIÇÃO --- */}
      <Link to="/como-funciona" className="text-lg text-violet font-semibold hover:underline flex items-center mr-4">
        Entenda o Match
      </Link>
      {/* --------------------------- */}
      
      {/* Os botões originais que você já tinha continuam aqui: */}
      <Button variant="ghost" asChild className="text-lg text-violet">
        <Link to="/"><ArrowLeft className="mr-2 h-5 w-5" /> Início</Link>
      </Button>
      <Button asChild className="bg-groovy hover:bg-gum text-lg px-6 py-6 rounded-2xl">
        <Link to="/cadastro-animal"><Plus className="mr-2 h-5 w-5" /> Cadastrar Animal</Link>
      </Button>
    </div>
  </div>
</header>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-violet">Gestão de Animais</h1>
          <p className="text-xl text-gray-600">ONG Patinhas Felizes - {mockAnimals.length} animais cadastrados</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total de Animais", val: mockAnimals.length, desc: "Ativos no sistema" },
            { label: "Total de Matches", val: mockAnimals.reduce((acc, a) => acc + a.matchesCount, 0), desc: "Compatibilidades geradas" },
            { label: "Solicitações Ativas", val: mockAnimals.reduce((acc, a) => acc + a.requestsCount, 0), desc: "Pedidos de adoção" },
            { label: "Em Processo", val: mockAnimals.filter(a => a.status === "Em Processo").length, desc: "Adoções em andamento" },
          ].map((stat, i) => (
            <Card key={i} className="rounded-3xl p-6 shadow-lg border-none">
              <p className="text-base text-gray-500 font-medium">{stat.label}</p>
              <div className="text-4xl font-bold text-violet mt-2">{stat.val}</div>
              <p className="text-sm text-gray-400 mt-1">{stat.desc}</p>
            </Card>
          ))}
        </div>

        {/* Animals Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-violet">Meus Animais</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mockAnimals.map((animal) => (
              <Card key={animal.id} className="rounded-3xl shadow-xl border-none overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4"><Badge className="text-base bg-groovy">{animal.status}</Badge></div>
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-1 rounded-full text-base font-medium">{animal.daysInShelter} dias no abrigo</div>
                </div>

                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-violet">{animal.name}</CardTitle>
                  <p className="text-lg text-gray-500">{animal.species} • {animal.size} • {animal.age}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-sky/20 rounded-2xl"><div className="text-3xl font-bold text-violet">{animal.matchesCount}</div><div className="text-sm text-gray-500">Matches</div></div>
                    <div className="p-4 bg-sky/20 rounded-2xl"><div className="text-3xl font-bold text-violet">{animal.requestsCount}</div><div className="text-sm text-gray-500">Solicitações</div></div>
                    <div className="p-4 bg-sky/20 rounded-2xl"><div className="text-3xl font-bold text-violet">{animal.energy}</div><div className="text-sm text-gray-500">Energia</div></div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-4 p-6">
                  <Button className="flex-1 text-lg py-6 rounded-xl" variant="outline" asChild>
                    <Link to={`/dossie/${animal.id}`}><Eye className="mr-2 h-5 w-5" /> Ver Dossiê</Link>
                  </Button>
                  <Button className="flex-1 text-lg py-6 rounded-xl bg-violet hover:bg-violet/90">
                    <MessageCircle className="mr-2 h-5 w-5" /> Conversas ({animal.requestsCount})
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
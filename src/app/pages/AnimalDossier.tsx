import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, MessageCircle, TrendingUp, Users, Heart, Syringe, Scissors, MapPin, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

// Dados unificados para os animais
const animalsData = {
  "1": { name: "Cacau", species: "Gato", age: "2 anos", size: "Pequeno", status: "Em Triagem", image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&h=600&fit=crop" },
  "2": { name: "Soneca", species: "Gato", age: "7 anos", size: "Médio", status: "Disponível", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop" },
  "3": { name: "Bolinha", species: "Gato", age: "1 ano", size: "Pequeno", status: "Disponível", image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=600&fit=crop" },
  "4": { name: "Fumaça", species: "Cachorro", age: "4 anos", size: "Grande", status: "Em Processo", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop" }
};

// Dados de candidatos interessados
const mockCandidates = [
  {
    id: 1,
    name: "Maria Silva",
    matchScore: 95,
    messages: [
      { id: 1, sender: "candidate", text: "Olá! Fiquei muito interessada no Cacau. Tenho experiência com cachorros e um quintal grande." },
      { id: 2, sender: "ong", text: "Olá Maria! Que ótimo! O Cacau é muito carinhoso e adora brincar." }
    ]
  },
  {
    id: 2,
    name: "João Santos",
    matchScore: 88,
    messages: [
      { id: 1, sender: "candidate", text: "Gostaria de saber mais sobre os cuidados necessários." },
      { id: 2, sender: "ong", text: "Claro! O Cacau precisa de passeios diários e muito carinho." }
    ]
  },
  {
    id: 3,
    name: "Ana Costa",
    matchScore: 82,
    messages: [
      { id: 1, sender: "candidate", text: "Tenho dois filhos pequenos. O Cacau se dá bem com crianças?" }
    ]
  }
];

export function AnimalDossier() {
  const { animalId } = useParams();
  const animal = animalsData[animalId as keyof typeof animalsData] || { name: "Animal", species: "Desconhecido", age: "-", size: "-", status: "-", image: "" };
  const [activeTab, setActiveTab] = useState("interactions");

  return (
    <div className="min-h-screen bg-parchment/30 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button variant="ghost" asChild className="mb-6 text-lg text-violet">
          <Link to="/dashboard-ong"><ArrowLeft className="mr-2 h-6 w-6" /> Voltar ao Dashboard</Link>
        </Button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Card className="rounded-3xl shadow-xl overflow-hidden border-none">
            <div className="md:flex">
              <div className="md:w-1/3"><img src={animal.image} alt={animal.name} className="w-full h-full object-cover" /></div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-5xl font-bold mb-3 text-violet">{animal.name}</h1>
                    <p className="text-xl text-gray-600">{animal.species} • {animal.size} • {animal.age}</p>
                  </div>
                  <Badge className="text-lg px-6 py-2 bg-groovy">{animal.status}</Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 h-16 p-2 bg-white rounded-2xl shadow-sm">
            <TabsTrigger value="interactions" className="text-lg font-semibold">Interações / Chat</TabsTrigger>
            <TabsTrigger value="timeline" className="text-lg font-semibold">Linha do Tempo / Prontuário</TabsTrigger>
          </TabsList>

         <TabsContent value="interactions">
  <Card className="rounded-3xl p-8">
    <CardTitle className="text-2xl mb-6">Candidatos Interessados</CardTitle>
    <Accordion type="single" collapsible className="space-y-4">
      {mockCandidates.map((candidate) => (
        <AccordionItem 
          key={candidate.id} 
          value={`item-${candidate.id}`} 
          className="border rounded-2xl px-4"
        >
          <AccordionTrigger className="text-lg">
            {candidate.name} (Match {candidate.matchScore}%)
          </AccordionTrigger>
          <AccordionContent className="text-lg text-gray-600">
            <div className="space-y-4">
              {/* Exibe a última mensagem do chat */}
              <div className="p-4 bg-gray-50 rounded-xl">
                "{candidate.messages[candidate.messages.length - 1].text}"
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="text-lg">Ver Perfil</Button>
                <Button className="bg-violet text-lg">Responder Chat</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Card>
</TabsContent>

          <TabsContent value="timeline">
            <Card className="rounded-3xl p-8">
              <CardTitle className="text-2xl mb-6">Histórico Médico e Comportamental</CardTitle>
              <div className="space-y-6 text-lg">
                <div className="flex gap-4 items-center"><Shield className="text-violet" /> <span>Resgate e Acolhimento</span></div>
                <div className="flex gap-4 items-center"><Syringe className="text-violet" /> <span>Vacinação e Vermifugação</span></div>
                <div className="flex gap-4 items-center"><Scissors className="text-violet" /> <span>Castração</span></div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
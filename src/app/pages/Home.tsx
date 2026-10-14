import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Search, Shield, PawPrint, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

// fotos
const mockAnimals = [
  { 
    id: 1, 
    name: "Florisbela", 
    species: "Cachorro", 
    age: "2 anos", 
    size: "Grande", 
    energy: 4, 
    image: "https://i.postimg.cc/FzKSMWw0/baixados-(4).jpg",
    description: "Amante da natureza e sempre sorridente" 
  },
  { 
    id: 2, 
    name: "Biscoito", 
    species: "Cachorro", 
    age: "4 anos", 
    size: "Pequeno", 
    energy: 2, 
    image: "https://i.postimg.cc/kG5S01Lt/770537817537713331.jpg",
    description: "Um pouco desconfiado, mas muito leal" 
  },
  { 
    id: 3, 
    name: "Cacau", 
    species: "Cachorro", 
    age: "6 anos", 
    size: "Grande", 
    energy: 1, 
    image: "https://i.postimg.cc/Y0SF5nTg/baixados-(3).jpg",
    description: "Zen, adora tomar um solzinho" 
  },
  { 
    id: 4, 
    name: "Pusi", 
    species: "Gato", 
    age: "2 anos", 
    size: "Médio", 
    energy: 5, 
    image: "https://i.postimg.cc/7hLzFsj0/Hello-pusi.jpg",
    description: "Gamer profissional e fã de energia" 
  },
  { 
    id: 5, 
    name: "Estagiário", 
    species: "Gato", 
    age: "1 ano", 
    size: "Pequeno", 
    energy: 3, 
    image: "https://i.postimg.cc/SRK9BTHW/baixados-(2).jpg",
    description: "Trabalha muito no home office" 
  },
  { 
    id: 6, 
    name: "Timão", 
    species: "Gato", 
    age: "3 anos", 
    size: "Médio", 
    energy: 3, 
    image: "https://i.postimg.cc/hvGmkyNJ/Gatinho-corinthiano-3.jpg",
    description: "Fanático pelo Coringão" 
  },
];

export function Home() {
  const [speciesFilter, setSpeciesFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [energyFilter, setEnergyFilter] = useState<string>("all");

  const filteredAnimals = mockAnimals.filter((animal) => {
    if (speciesFilter !== "all" && animal.species !== speciesFilter) return false;
    if (sizeFilter !== "all" && animal.size !== sizeFilter) return false;
    if (energyFilter !== "all" && animal.energy !== parseInt(energyFilter)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-parchment/30">
      {/* Header com estilo ajustado */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <PawPrint className="w-8 h-8 text-violet" />
      <span className="text-xl font-bold text-violet">AnimalMatch</span>
    </div>
    <nav className="flex gap-2">
      {/* Botão Quero Adotar */}
      <Button variant="ghost" className="text-violet hover:bg-sky/20" asChild>
        <Link to="/cadastro-adotante">Quero Adotar</Link>
      </Button>
      
      {/* Botão Sou ONG */}
      <Button className="bg-groovy hover:bg-gum text-white rounded-full" asChild>
          <Link to="/cadastro-ong">Sou ONG</Link>
      </Button>
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sky/20 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6 text-violet">
            Match Real, Adoção Responsável
          </motion.h1>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">Encontre o pet perfeito para seu estilo de vida através do nosso algoritmo.</p>
          <Button 
      size="lg" 
      asChild 
      className="bg-groovy hover:bg-gum rounded-2xl shadow-lg shadow-groovy/20"
    >
      <Link to="/cadastro-adotante">Começar Agora</Link>
    </Button>
  </div>
</section>

      {/* Grid de Animais */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-violet">Animais Disponíveis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal, index) => (
            <motion.div key={animal.id} whileHover={{ y: -10 }}>
              <Card className="rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-none overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={animal.image} className="w-full h-full object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-violet mb-2">{animal.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{animal.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-sky text-violet hover:bg-sky/80">{animal.species}</Badge>
                    <Badge variant="outline" className="border-gray-200">{animal.size}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-groovy hover:bg-gum rounded-xl">Ver Compatibilidade</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
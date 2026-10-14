import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Target, Scale, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function MatchExplanation() {
  const steps = [
    {
      icon: Target,
      title: "Análise de Perfil",
      desc: "Analisamos seu estilo de vida, rotina e disponibilidade de tempo para o pet."
    },
    {
      icon: Scale,
      title: "Critérios Técnicos",
      desc: "Cruzamos dados como porte, nível de energia (1-5) e necessidade de quintal."
    },
    {
      icon: HeartPulse,
      title: "Compatibilidade Real",
      desc: "Geramos uma porcentagem de match baseada na harmonia entre suas preferências e a saúde/bem-estar do animal."
    },
    {
      icon: ShieldCheck,
      title: "Adoção Segura",
      desc: "Garantimos que o perfil escolhido proporcione a melhor qualidade de vida possível para o animal."
    }
  ];

  return (
    <div className="min-h-screen bg-parchment/30 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8 text-lg text-violet">
          <Link to="/"><ArrowLeft className="mr-2 h-6 w-6" /> Voltar ao Início</Link>
        </Button>

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-violet">Como funciona o nosso Match?</h1>
          <p className="text-2xl text-gray-600">Nosso algoritmo inteligente garante que você e seu novo amigo sejam perfeitos um para o outro.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="rounded-3xl p-6 h-full shadow-lg border-none hover:shadow-2xl transition-all">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-sky/20 rounded-2xl text-violet"><step.icon className="w-8 h-8" /></div>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Check, PawPrint, Heart, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Progress } from "../components/ui/progress";
import { Slider } from "../components/ui/slider";

export function AnimalRegister() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "", species: "", size: "", age: "",
    vaccinated: false, neutered: false, dewormed: false,
    energyLevel: 3, needsYard: false,
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => navigate("/dashboard-ong");

  const progress = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-parchment/30 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="mb-6 text-lg text-violet">
          <Link to="/dashboard-ong"><ArrowLeft className="mr-2 h-6 w-6" /> Voltar</Link>
        </Button>
        
        <h1 className="text-4xl font-bold mb-2 text-violet">Cadastro de Animal</h1>
        <p className="text-lg text-gray-600 mb-8">Registre um novo pet para adoção.</p>
        
        <Progress value={progress} className="h-4 mb-10" />

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="rounded-3xl shadow-lg p-8">
                <CardHeader><CardTitle className="text-3xl flex items-center gap-3 text-violet"><PawPrint className="text-groovy"/> 1. Informações Básicas</CardTitle></CardHeader>
                <CardContent className="space-y-6 text-lg">
                  <div className="space-y-2"><Label className="text-lg">Nome do Animal *</Label><Input className="p-6 text-lg" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} /></div>
                  <Label className="text-lg">Espécie *</Label>
                  <RadioGroup className="flex gap-6" onValueChange={(val) => handleChange("species", val)}>
                    <div className="flex items-center gap-2"><RadioGroupItem value="dog" id="dog" /><Label className="text-lg" htmlFor="dog">Cachorro</Label></div>
                    <div className="flex items-center gap-2"><RadioGroupItem value="cat" id="cat" /><Label className="text-lg" htmlFor="cat">Gato</Label></div>
                  </RadioGroup>
                  <Label className="text-lg">Porte *</Label>
                  <Select onValueChange={(val) => handleChange("size", val)}>
                    <SelectTrigger className="p-6 text-lg"><SelectValue placeholder="Selecione o porte" /></SelectTrigger>
                    <SelectContent><SelectItem value="small">Pequeno</SelectItem><SelectItem value="medium">Médio</SelectItem><SelectItem value="large">Grande</SelectItem></SelectContent>
                  </Select>
                  <div className="space-y-2"><Label className="text-lg">Idade Aproximada *</Label><Input className="p-6 text-lg" value={formData.age} onChange={(e) => handleChange("age", e.target.value)} /></div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="rounded-3xl shadow-lg p-8">
                <CardHeader><CardTitle className="text-3xl flex items-center gap-3 text-violet"><Shield className="text-groovy"/> 2. Saúde</CardTitle></CardHeader>
                <CardContent className="space-y-6">
                  {["vaccinated", "neutered", "dewormed"].map((item) => (
                    <div key={item} className="flex items-center justify-between p-6 bg-white rounded-2xl border">
                      <Label className="text-xl capitalize">{item.replace(/([A-Z])/g, ' $1')}</Label>
                      <Switch checked={formData[item as keyof typeof formData] as boolean} onCheckedChange={(val) => handleChange(item, val)} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="rounded-3xl shadow-lg p-8">
                <CardHeader><CardTitle className="text-3xl flex items-center gap-3 text-violet"><Heart className="text-groovy"/> 3. Comportamento</CardTitle></CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-lg">Nível de Energia ({formData.energyLevel}/5)</Label>
                    <Slider min={1} max={5} step={1} value={[formData.energyLevel]} onValueChange={([val]) => handleChange("energyLevel", val)} />
                  </div>
                  <div className="flex items-center justify-between p-6 bg-white rounded-2xl border">
                    <Label className="text-xl">Necessita de Quintal?</Label>
                    <Switch checked={formData.needsYard} onCheckedChange={(val) => handleChange("needsYard", val)} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="text-lg py-8 px-10 rounded-2xl">Voltar</Button>
          {currentStep < 3 ? (
            <Button onClick={handleNext} className="text-lg py-8 px-10 rounded-2xl bg-groovy hover:bg-gum">Próximo</Button>
          ) : (
            <Button onClick={handleSubmit} className="text-lg py-8 px-10 rounded-2xl bg-violet hover:bg-violet/90">Cadastrar Animal</Button>
          )}
        </div>
      </div>
    </div>
  );
}
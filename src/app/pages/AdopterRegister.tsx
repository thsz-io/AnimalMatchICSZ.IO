import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Shield, MapPin, Camera, Upload, Home, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Progress } from "../components/ui/progress";

export function AdopterRegister() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [documentUploaded, setDocumentUploaded] = useState(false);
  const [selfieVerified, setSelfieVerified] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", cpf: "", birthdate: "",
    cep: "", street: "", number: "", neighborhood: "", city: "", uf: "",
    income: "", housingType: "", hasYard: "", freeTime: "",
    preferredSize: "", preferredEnergy: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => { setIsFinished(true); setTimeout(() => navigate("/dashboard-adotante"), 2000); };

  if (isFinished) return (
    <div className="min-h-screen flex items-center justify-center bg-parchment/30">
      <div className="text-center p-12 bg-white rounded-3xl shadow-xl">
        <Check className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-violet mb-4">Cadastro Concluído!</h1>
      </div>
    </div>
  );

  const progress = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-parchment/30 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="mb-6 text-lg"><Link to="/"><ArrowLeft className="mr-2 h-6 w-6" /> Voltar</Link></Button>
        <h1 className="text-4xl font-bold mb-2 text-violet">Cadastro de Adotante</h1>
        <Progress value={progress} className="h-4 mb-8" />

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="rounded-3xl shadow-lg p-6 space-y-4">
                <CardHeader><CardTitle className="text-2xl flex items-center gap-2"><Shield className="text-primary"/> 1. Segurança e Identificação</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><Label className="text-lg">Nome Completo *</Label><Input className="p-6 text-lg" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} /></div>
                    <div><Label className="text-lg">E-mail *</Label><Input className="p-6 text-lg" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><Label className="text-lg">Telefone *</Label><Input className="p-6 text-lg" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} /></div>
                    <div><Label className="text-lg">CPF *</Label><Input className="p-6 text-lg" value={formData.cpf} onChange={(e) => handleChange("cpf", e.target.value)} /></div>
                  </div>
                  <div><Label className="text-lg">Data de Nascimento *</Label><Input type="date" className="p-6 text-lg" value={formData.birthdate} onChange={(e) => handleChange("birthdate", e.target.value)} /></div>
                  <div className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer" onClick={() => setDocumentUploaded(true)}>
                    <Upload className="mx-auto mb-2" /> <p className="text-lg">{documentUploaded ? "Documento enviado!" : "Clique para upload (RG/CNH)"}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="rounded-3xl shadow-lg p-6 space-y-4">
                <CardHeader><CardTitle className="text-2xl flex items-center gap-2"><Home className="text-primary"/> 2. Moradia e Endereço</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1"><Label className="text-lg">CEP *</Label><Input className="p-6 text-lg" value={formData.cep} onChange={(e) => handleChange("cep", e.target.value)} /></div>
                    <div className="col-span-2"><Label className="text-lg">Logradouro *</Label><Input className="p-6 text-lg" value={formData.street} onChange={(e) => handleChange("street", e.target.value)} /></div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1"><Label className="text-lg">Nº *</Label><Input className="p-6 text-lg" value={formData.number} onChange={(e) => handleChange("number", e.target.value)} /></div>
                    <div className="col-span-3"><Label className="text-lg">Bairro *</Label><Input className="p-6 text-lg" value={formData.neighborhood} onChange={(e) => handleChange("neighborhood", e.target.value)} /></div>
                  </div>
                  <Label className="text-lg">Tipo de Moradia *</Label>
                  <RadioGroup className="flex gap-4" onValueChange={(val) => handleChange("housingType", val)}>
                    <RadioGroupItem value="apartment" id="ap"/><Label className="text-lg" htmlFor="ap">Apartamento</Label>
                    <RadioGroupItem value="house" id="house"/><Label className="text-lg" htmlFor="house">Casa</Label>
                  </RadioGroup>
                  <Label className="text-lg">Tempo Livre Diário *</Label>
                  <Select onValueChange={(val) => handleChange("freeTime", val)}>
                    <SelectTrigger className="p-6 text-lg"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                    <SelectContent><SelectItem value="1">Pouco tempo</SelectItem><SelectItem value="3">Bastante tempo</SelectItem></SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="rounded-3xl shadow-lg p-6 space-y-4">
                <CardHeader><CardTitle className="text-2xl flex items-center gap-2"><Heart className="text-primary"/> 3. Preferências</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <Label className="text-lg">Porte Preferido *</Label>
                  <Select onValueChange={(val) => handleChange("preferredSize", val)}>
                    <SelectTrigger className="p-6 text-lg"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                    <SelectContent><SelectItem value="small">Pequeno</SelectItem><SelectItem value="large">Grande</SelectItem></SelectContent>
                  </Select>
                  <Label className="text-lg">Nível de Energia Desejado *</Label>
                  <Select onValueChange={(val) => handleChange("preferredEnergy", val)}>
                    <SelectTrigger className="p-6 text-lg"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                    <SelectContent><SelectItem value="1">Calmo</SelectItem><SelectItem value="5">Muito Ativo</SelectItem></SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="p-6 text-lg">Voltar</Button>
          {currentStep < 3 ? (
            <Button onClick={handleNext} className="p-6 text-lg bg-groovy">Próximo</Button>
          ) : (
            <Button onClick={handleSubmit} className="p-6 text-lg bg-violet">Finalizar</Button>
          )}
        </div>
      </div>
    </div>
  );
}
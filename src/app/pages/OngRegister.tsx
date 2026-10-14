import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Check, Building2, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function OngRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", cnpj: "", cep: "", street: "", number: "", neighborhood: "", city: "", uf: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-parchment/30 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Button variant="ghost" asChild className="mb-6 text-lg">
          <Link to="/"><ArrowLeft className="mr-2 h-6 w-6" /> Voltar</Link>
        </Button>

        <Card className="rounded-3xl shadow-xl p-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-violet flex items-center gap-3">
              <Building2 className="text-groovy" /> Cadastro da ONG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            {/* Dados Básicos */}
            <div className="space-y-4">
              <Label className="text-lg">Nome da Instituição *</Label>
              <Input className="p-6 text-lg" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
              
              <Label className="text-lg">CNPJ *</Label>
              <Input className="p-6 text-lg" value={formData.cnpj} onChange={(e) => handleChange("cnpj", e.target.value)} />
            </div>

            <hr className="border-sky" />

            {/* Endereço */}
            <h3 className="text-2xl font-semibold flex items-center gap-2"><MapPin className="text-groovy" /> Endereço</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1"><Label className="text-lg">CEP *</Label><Input className="p-6 text-lg" value={formData.cep} onChange={(e) => handleChange("cep", e.target.value)} /></div>
              <div className="col-span-2"><Label className="text-lg">Logradouro *</Label><Input className="p-6 text-lg" value={formData.street} onChange={(e) => handleChange("street", e.target.value)} /></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1"><Label className="text-lg">Nº *</Label><Input className="p-6 text-lg" value={formData.number} onChange={(e) => handleChange("number", e.target.value)} /></div>
              <div className="col-span-3"><Label className="text-lg">Bairro *</Label><Input className="p-6 text-lg" value={formData.neighborhood} onChange={(e) => handleChange("neighborhood", e.target.value)} /></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3"><Label className="text-lg">Cidade *</Label><Input className="p-6 text-lg" value={formData.city} onChange={(e) => handleChange("city", e.target.value)} /></div>
              <div className="col-span-1"><Label className="text-lg">UF *</Label><Input className="p-6 text-lg" maxLength={2} value={formData.uf} onChange={(e) => handleChange("uf", e.target.value)} /></div>
            </div>

            <Button className="w-full text-xl py-8 mt-6 bg-violet hover:bg-violet/90 rounded-2xl" onClick={() => navigate("/dashboard-ong")}>
              <Check className="mr-2" /> Finalizar Cadastro
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
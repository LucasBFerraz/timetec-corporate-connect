import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });

  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.onload = () => setRecaptchaReady(true);
    document.body.appendChild(script);
  }, [recaptchaSiteKey]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaReady || !window.grecaptcha) {
      toast({
        title: 'Erro',
        description: 'reCAPTCHA ainda não carregado. Tente novamente em instantes.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit_form' });
      if (!token) throw new Error('Token do reCAPTCHA não foi gerado.');

      const payload = {
        messaging_product: 'whatsapp',
        to: '5521964896877',
        type: 'template',
        template: {
          name: 'timetec',
          language: { code: 'pt_BR' },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: formData.name },
                { type: 'text', text: formData.company },
                { type: 'text', text: formData.phone },
                { type: 'text', text: formData.email },
                { type: 'text', text: formData.interest || '-' },
                { type: 'text', text: formData.message || '-' },
              ],
            },
          ],
        },
        captchaToken: token,
      };

      const url = `https://graph.facebook.com/v22.0/${import.meta.env.VITE_WA_PHONE_ID}/messages`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_WA_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());

      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });

      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        interest: '',
        message: '',
      });
    } catch (err: any) {
      toast({
        title: 'Erro ao enviar',
        description: err?.message ?? 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(21) 98866-5393',
      link: 'tel:+5521988665393',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      content: '(21) 98866-5393',
      link: 'https://wa.me/5521988665393',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@timetectelecom.com.br',
      link: 'mailto:contato@timetectelecom.com.br',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rio de Janeiro - RJ',
      link: '#',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-timetec-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-timetec-red/10 text-timetec-red px-4 py-2 rounded-full text-sm font-medium mb-6">
            Entre em Contato
          </div>
          <h2 className="text-4xl font-bold text-timetec-gray mb-6">
            Solicite seu <span className="text-timetec-red">Orçamento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe técnica está pronta para apresentar as melhores soluções em telecomunicações para sua empresa. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-timetec-gray mb-8">Fale Conosco</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <a
                      href={info.link}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-timetec-gray-light transition-colors duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-timetec-red/10 rounded-xl flex items-center justify-center group-hover:bg-timetec-red group-hover:text-white transition-all duration-300">
                          <info.icon className="h-6 w-6 text-timetec-red group-hover:text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-timetec-gray mb-1">{info.title}</h4>
                        <p className="text-gray-600 group-hover:text-timetec-red transition-colors duration-300">{info.content}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Clock className="h-5 w-5 text-timetec-red" />
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-sm">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Seu nome completo"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                      placeholder="Nome da sua empresa"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      placeholder="(21) 91234-5678"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="seu@email.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Interesse</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => handleInputChange('interest', value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione o produto de interesse" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      <SelectItem value="pabx">Central PABX</SelectItem>
                      <SelectItem value="telefones-ip">Telefones IP</SelectItem>
                      <SelectItem value="headsets">Headsets</SelectItem>
                      <SelectItem value="acessorios">Acessórios</SelectItem>
                      <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full timetec-gradient text-lg py-6 hover:opacity-90 transition-opacity"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

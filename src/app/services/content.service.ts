import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAccordion } from '../components/accordion/models/Accordion.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {
    this.faqsSubject.next([
      {
        title: 'Qual é a política de devolução?',
        content:
          'Você pode devolver qualquer produto dentro de 30 dias após a compra.',
      },
      {
        title: 'Como posso entrar em contato com o atendimento ao cliente?',
        content:
          'Você pode entrar em contato com o atendimento ao cliente via e-mail em support@example.com ou ligar para 123-456-7890.',
      },
      {
        title: 'Vocês oferecem envio internacional?',
        content: 'Sim, oferecemos envio internacional para mais de 50 países.',
      },
      {
        title: 'Quais métodos de pagamento são aceitos?',
        content: 'Aceitamos Visa, MasterCard, American Express e PayPal.',
      },
      {
        title: 'Onde são fabricados seus produtos?',
        content:
          'Nossos produtos são fabricados em várias localidades, incluindo EUA, Europa e Ásia.',
      },
      {
        title: 'Posso rastrear meu pedido?',
        content:
          'Sim, você pode rastrear seu pedido usando o número de rastreamento fornecido no e-mail de confirmação.',
      },
      {
        title: 'Vocês oferecem cartões-presente?',
        content:
          'Sim, oferecemos cartões-presente que podem ser comprados em nosso site.',
      },
      {
        title: 'Como posso alterar ou cancelar meu pedido?',
        content:
          'Para alterar ou cancelar seu pedido, entre em contato com nosso atendimento ao cliente dentro de 24 horas após a realização do pedido.',
      },
      {
        title: 'O que devo fazer se receber um item danificado?',
        content:
          'Se você receber um item danificado, entre em contato com o atendimento ao cliente imediatamente com fotos do dano.',
      },
      {
        title: 'Vocês têm um programa de fidelidade?',
        content:
          'Sim, temos um programa de fidelidade que recompensa você com pontos para cada compra.',
      },
      {
        title: 'Como posso redefinir minha senha?',
        content:
          'Para redefinir sua senha, clique em "Esqueceu a senha" na página de login e siga as instruções.',
      },
      {
        title: 'Posso devolver itens em promoção?',
        content:
          'Itens em promoção podem ser devolvidos dentro de 14 dias após a compra.',
      },
      {
        title: 'Qual é a sua política de privacidade?',
        content:
          'Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Você pode lê-la em nosso site.',
      },
      {
        title: 'Vocês oferecem produtos personalizados?',
        content:
          'Sim, oferecemos uma variedade de produtos que podem ser personalizados. Confira nossas opções de personalização na página do produto.',
      },
      {
        title: 'Há taxas adicionais de envio?',
        content:
          'As taxas de envio variam com base na localização e no tamanho do pedido. Você pode ver os custos de envio no checkout.',
      },
      {
        title: 'Como posso saber sobre novos produtos e promoções?',
        content:
          'Assine nossa newsletter ou nos siga nas redes sociais para ficar atualizado sobre novos produtos e promoções.',
      },
      {
        title: 'Vocês oferecem descontos para estudantes?',
        content:
          'Sim, oferecemos um desconto de 10% para estudantes. Verifique seu status de estudante no checkout.',
      },
      {
        title: 'Qual é a sua política para compras em grande quantidade?',
        content:
          'Para compras em grande quantidade, entre em contato conosco diretamente para preços e condições especiais.',
      },
      {
        title: 'Posso usar vários códigos promocionais em um único pedido?',
        content:
          'Não, apenas um código promocional pode ser aplicado por pedido.',
      },
      {
        title: 'Como posso deixar uma avaliação de um produto?',
        content:
          'Você pode deixar uma avaliação na página do produto clicando em "Escrever uma Avaliação".',
      },
      {
        title: 'O que devo fazer se esquecer meu nome de usuário?',
        content:
          'Se você esquecer seu nome de usuário, use o recurso "Esqueceu o nome de usuário" na página de login para recuperá-lo.',
      },
      {
        title: 'Quais são os benefícios de se cadastrar na newsletter?',
        content:
          'Ao se cadastrar na nossa newsletter, você receberá atualizações exclusivas sobre novos produtos, promoções especiais e dicas úteis diretamente no seu e-mail. Além disso, você pode ganhar descontos exclusivos para assinantes.',
      },
    ]);
  }

  private faqsSubject = new BehaviorSubject<IAccordion[]>([]);

  faqs$ = this.faqsSubject.asObservable();
}

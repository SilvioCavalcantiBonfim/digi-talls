import { Component } from '@angular/core';

@Component({
  selector: 'dt-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  protected testimonials = [
    {
      id: 1,
      texto:
        'A Digi Talls foi fundamental para a organização do meu TCC. A equipe foi super atenciosa e me ajudou em cada detalhe.',
      autor: 'Mariana Oliveira',
      cargo: 'Graduanda em Administração',
    },
    {
      id: 2,
      texto:
        'Contratei os serviços de mentoria e fiquei impressionado com o nível de conhecimento e suporte fornecido.',
      autor: 'Carlos Andrade',
      cargo: 'Mestrando em Engenharia de Produção',
    },
    {
      id: 3,
      texto:
        'Eu estava com dificuldade em entender as normas da ABNT, mas a Digi Talls deixou tudo claro e organizado!',
      autor: 'Fernanda Lima',
      cargo: 'Graduanda em Pedagogia',
    },
    {
      id: 4,
      texto:
        'O suporte técnico para formatação da minha dissertação foi incrível. Recomendo sem pensar duas vezes.',
      autor: 'Rafael Costa',
      cargo: 'Mestrando em Direito',
    },
    {
      id: 5,
      texto:
        'A pontualidade e a atenção aos detalhes me surpreenderam. O resultado ficou perfeito para a defesa do meu TCC.',
      autor: 'Letícia Mendes',
      cargo: 'Graduanda em Ciências Contábeis',
    },
    {
      id: 6,
      texto:
        'Além da revisão, recebi dicas preciosas para melhorar a argumentação do meu trabalho. Excelente serviço!',
      autor: 'André Santos',
      cargo: 'Doutorando em Filosofia',
    },
    {
      id: 7,
      texto:
        'Eu nunca imaginei que seria tão fácil organizar meu projeto. A equipe da Digi Talls foi fantástica do início ao fim.',
      autor: 'Joana Marques',
      cargo: 'Graduanda em Design',
    },
    {
      id: 8,
      texto:
        'A revisão e a formatação foram impecáveis. Meu orientador elogiou bastante o resultado final.',
      autor: 'Guilherme Nascimento',
      cargo: 'Mestrando em Economia',
    },
    {
      id: 9,
      texto:
        'Contratei o serviço de revisão e fiquei encantada com o cuidado da equipe. Recomendo de olhos fechados!',
      autor: 'Beatriz Farias',
      cargo: 'Graduanda em Letras',
    },
    {
      id: 10,
      texto:
        'O apoio que recebi durante a mentoria fez toda a diferença no meu desenvolvimento acadêmico. Obrigado, Digi Talls!',
      autor: 'Lucas Moreira',
      cargo: 'Doutorando em Psicologia',
    },
  ];
}

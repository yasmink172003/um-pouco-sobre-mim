import { initScrollReveal } from "./scrollReveal.js";

import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));


hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".php",
  "PHP é uma linguagem de programação voltada para o desenvolvimento de aplicações para a web e para criar sites, favorecendo a conexão entre os servidores e a interface do usuário."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".Bootstrapt",
  "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples."
);
hoverChangeDescription(
  ".node.js",
  "O Node.js é um ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações standalone (autossuficientes) em uma máquina servidora, sem a necessidade do navegador.."
);
hoverChangeDescription(
  ".angular",
  "O AngularJS é um framework de código aberto usado para construir aplicativos para web baseados em uma única página dinâmica. ."
);

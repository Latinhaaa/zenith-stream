# ZENITH STREAM

Uma plataforma demonstrativa de descoberta e organização de anime, recriada de forma independente para portfólio. O catálogo vem da API pública Jikan/MyAnimeList; contas, watchlist, avaliações e feedback são guardados apenas no navegador (localStorage), sem enviar dados a terceiros.

## Status do projeto

> **Em desenvolvimento.** A demonstração pública está funcional, mas o projeto ainda não representa uma versão final. Algumas áreas, integrações e detalhes de experiência continuam em evolução e receberão ajustes futuros.

### Melhorias planejadas

- Refinar a busca, os filtros e a organização do catálogo
- Aprimorar calendário, lançamentos e conteúdo de “Em breve”
- Evoluir autenticação, perfis e persistência de dados
- Melhorar acessibilidade, desempenho e experiência em dispositivos móveis
- Integrar um serviço de vídeo autorizado caso o projeto avance além da demonstração

## Demonstração online

O projeto é publicado automaticamente no GitHub Pages a cada atualização da branch `main`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite. Para gerar a versão de produção, use `npm run build`.

## Recursos

- Catálogo, ranking, lançamentos e busca por gênero pela API Jikan
- Login/cadastro demonstrativos locais
- Watchlist com status e progresso de episódios
- Página de detalhes com avaliações e comentários
- Player de demonstração com controles de velocidade
- Formulário de feedback e histórico de buscas
- Perfil personalizável com temas e cores
- Layout responsivo para computador e celular

## Nota de portfólio

Esta versão não inclui obras, vídeos ou fontes de streaming protegidas. O player demonstra a interface usando trailers fornecidos pelo catálogo. Para uma produção real, use conteúdo licenciado e um provedor de vídeo autorizado.

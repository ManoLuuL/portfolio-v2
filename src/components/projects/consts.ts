import { ProjectCardProps } from "./components/project-card/types";

export const projectsRepos: ProjectCardProps[] = [
    {
        title: 'Dispensa Saudavel',
        description: 'Com ampla variedade de receitas, filtrar opções com base nos ingredientes disponíveis, calcular seu IMC e receber dicas personalizadas de dietas.',
        image: 'despensasaudavel.png',
        source: 'https://github.com/ManoLuuL/despensa-saudavel',
        website: 'https://despensa-saudavel.vercel.app/',
        skills: ['Typescript', 'PostgreSQL', 'React'],
    },
    {
        title: 'Kanban Board',
        description: 'Demonstrando um sistema de gerenciamento de tarefas simples com a funcionalidade de arrastar e soltar utilizando React Beautiful DnD.',
        image: 'kanban.jpg',
        source: 'https://github.com/ManoLuuL/kanban-board',
        website: 'https://kanban-board-manoluul.vercel.app/',
        skills: ['Typescript', 'React', 'TailwindCSS'],
    },
    {
        title: 'SnapChat Clone',
        description: 'Clone do SnapChat com upload de imagens para o Cloudinary e autenticação via MongoDB, recriando a experiência do app original.',
        image: 'snapclone.jpg',
        source: 'https://github.com/ManoLuuL/snapchat-clone',
        skills: ['NextJs', 'Typescript', 'TailwindCSS', 'Mongo', 'Cloudinary'],
    },
    {
        title: 'Template ERP',
        description: 'Template administrativo para sistemas ERP, utilizando Next.js e Firebase para autenticação e gerenciamento de dados.',
        image: 'templateadm.png',
        source: 'https://github.com/ManoLuuL/template-admin',
        skills: ['NextJs', 'Typescript', 'TailwindCSS', 'Firebase'],
    },
    {
        title: 'Sistema de Tarefas',
        description: 'Aplicação simples para criação e gerenciamento de tarefas, permitindo adicionar, editar e remover itens com uma interface intuitiva.',
        image: 'sistematask.png',
        source: 'https://github.com/ManoLuuL/SistemaDeTask',
        skills: ['Javascript', 'React'],
    },

]
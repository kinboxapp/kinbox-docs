module.exports = {
    title: "Kinbox",
    tagline: "Ferramente de atendimento ao cliente",
    url: "https://help.kinbox.com.br",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "kinboxapp", // Usually your GitHub org/user name.
    projectName: "kinbox-docs", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "",
            logo: {
                alt: "Kinbox Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                // { to: "blog", label: "Blog", position: "left" },
                // {
                //     href: "https://github.com/facebook/docusaurus",
                //     label: "GitHub",
                //     position: "right",
                // },
            ],
        },
        footer: {
            style: "light",
            links: [
                {
                    title: "Integração com WhatsApp",
                    items: [
                        {
                            label: "Como adicionar um canal de Whatsapp?",
                            to: "/docs/whatsapp/doc1",
                        },
                        {
                            label: "Como configurar o celular?",
                            to: "/docs/whatsapp/doc2",
                        },
                        {
                            label: "Como não ter o número banido?",
                            to: "/docs/whatsapp/doc3",
                        },
                        {
                            label: "O que fazer se meu número for banido?",
                            to: "/docs/whatsapp/doc4",
                        },
                        {
                            label: "Como fazer número durar mais nas campanhas?",
                            to: "/docs/whatsapp/doc5",
                        },
                    ],
                },
                // {
                //     title: "More",
                //     items: [
                //         {
                //             label: "Blog",
                //             to: "blog",
                //         },
                //         {
                //             label: "GitHub",
                //             href: "https://github.com/facebook/docusaurus",
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Kinbox Ltda.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/kinboxapp/kinbox-docs/edit/master/",
                    routeBasePath: '/docs'
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
                // },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
}

import styles from '../layout/Navbar.module.css'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        cName: styles.navtext
    },
    {
        title: 'Educação',
        path: '/educacao',
        cName: styles.navtext,
        children: [
            {
                title: 'Motor e mecânica',
                path: './../pages/Educacao/MotorEMecanica/MotorEMecanica.js',
                cName: styles.navtext
            },
            {
                title: 'Chassi e suspensão',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Sistema elétrico',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Design',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Segurança',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Combustíveis',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Aerodinâmica',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'História',
                path: '/',
                cName: styles.navtext
            }
        ]
    },
    {
        title: 'Categorias',
        path: '/categoria',
        cName: styles.navtext,
        children:[
            {
                title: 'Hatch',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Sedan',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Hatchback',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Cupês',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Conversíveis',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Picape',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'SUV',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'CrossOver',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Minivans',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Elétricos',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Hibridos',
                path: '/',
                cName: styles.navtext
            }
        ]
    },
    {
        title: 'Blog',
        path: '/blog',
        cName: styles.navtext,
        children: [
            {
                title: 'Notícias',
                path: '/',
                cName: styles.navtext
            },
            {
                title: 'Artigos',
                path: '/',
                cName: styles.navtext
            }
        ]
    },
    {
        title: 'Sobre nós',
        path: '/sobrenos',
        cName: styles.navtext
    },
]
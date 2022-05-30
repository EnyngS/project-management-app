import { Context } from './type';

const language: Context = {
  ru: {
    header: {
      btn: [
        'Войти',
        'Регистрация',
        'Вернуться в приложение',
        'Выйти',
        'Новый борд',
        'Создать задачу',
        'Назад',
      ],
    },
    welcomePage: {
      promo1: [
        'Project Management App',
        'помогает командам эффективно решать рабочие задачи.',
        'Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень собственным уникальным способом вместе с Rs PMApp.',
      ],
      promo2: [
        'Это не просто работа. Это координация действий в команде.',
        'Начните с досок, колонок и карточек, а затем переходите к более сложным функциям. Управляйте проектами, упорядочивайте задачи и поддерживайте командный дух.',
      ],
      promo3: [
        'Владислав Сусиков',
        'Учусь в RS School на курсах: React 2022 Q1, JavaScript/Front-end 2022Q1. Изучаю веб-разрабоку около 1-го года',
      ],
    },
    LoginAuthPage: {
      btn: ['Войти', 'Регистрация'],
    },
  },
  en: {
    header: {
      btn: ['login', 'singup', 'Go to Main Page', 'Log out', 'New board', 'Create task', 'Back'],
    },
    welcomePage: {
      promo1: [
        'Project Management App',
        'helps teams to solve work tasks effectively.',
        'Team up, manage projects, and take productivity to the next level in your own unique way with Rs PMApp.',
      ],
      promo2: [
        "It's not just a job. This is team coordination.",
        'Start with boards, columns and cards and then move on to more advanced features. Manage projects, organize tasks and maintain team spirit.',
      ],
      promo3: [
        'Vladislav Susikov',
        "I study at RS School on courses: React 2022 Q1, JavaScript/Front-end 2022Q1. I've been learning web development for about 1 year",
      ],
    },
    LoginAuthPage: {
      btn: ['Login', 'Singup'],
    },
  },
};

export default language;

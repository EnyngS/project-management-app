import { Context } from "./type"

const language : Context = {
	ru:{
		header: {
			btn: ['Войти','Регистрация','Вернуться в приложение','Выйти'],
		},
		welcomePage: {
			promo1: [
				'Project Management App',
				'помогает командам эффективно решать рабочие задачи.',
				'Работайте в команде, управляйте проектами и выводите продуктивность на новый уровень собственным уникальным способом вместе с Rs PMApp.'
			],
			promo2: [
				'Это не просто работа. Это координация действий в команде.',
				'Начните с досок, колонок и карточек, а затем переходите к более сложным функциям. Управляйте проектами, упорядочивайте задачи и поддерживайте командный дух.'
			] 
		},
		LoginAuthPage: {
			btn: ['Войти','Регистрация']
		},
	},
	en: {
		header: {
			btn: ['login','singup','Go to Main Page','Log out'],
		},
		welcomePage: {
			promo1: [
				'Project Management App',
				'helps teams to solve work tasks effectively.',
				'Team up, manage projects, and take productivity to the next level in your own unique way with Rs PMApp.'
			],
			promo2: [
				"It's not just a job. This is team coordination.",
				'Start with boards, columns and cards and then move on to more advanced features. Manage projects, organize tasks and maintain team spirit.'
			] 
		},
		LoginAuthPage: {
			btn: ['Login', 'Singup']
		},
	},
}

export default language
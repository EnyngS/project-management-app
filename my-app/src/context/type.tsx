export type Context = {
	ru: {
		header: {
			btn: [string,string,string,string,string,string,string]
		},
		welcomePage: {
			promo1: [string,string,string],
			promo2: [ string,string ],
			developers:[
				{
					name: string,
					description: string,
				},
				{
					name: string,
					description: string,
				}
			]
		},
		LoginAuthPage: {
			btn: [string,string]
		},
		mainPage:{
			modalBoard: {
				name: string,
				description: string
				btn: string
			}
		},
		taskPage:{
			board: {
				btnColumn: string
				btnTask: string
			}
		}
	};
	en: {
		header: {
			btn: [string,string,string,string,string,string,string]
		},
		welcomePage: {
			promo1: [string,string,string],
			promo2: [ string, string ],
			developers:[
				{
					name: string,
					description: string,
				},
				{
					name: string,
					description: string,
				}
			]
		},
		LoginAuthPage: {
			btn: [string,string]
		},
		mainPage:{
			modalBoard: {
				name: string,
				description: string
				btn: string
			}
		},
		taskPage:{
			board: {
				btnColumn: string
				btnTask: string
			}
		}
	}
}

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
		
	}
}
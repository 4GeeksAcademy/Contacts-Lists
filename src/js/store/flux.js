const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			listContact : [

			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}


			]
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async () => {
				const contactsAttract = await fetch("https://playground.4geeks.com/contact/agendas/agendasCesar",{ 
					method: 'GET'
				})

				const data = await contactsAttract.json()
				setStore({
					listContact: data.contacts
				})
			},


			loadSomeData: () => {
				/**
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

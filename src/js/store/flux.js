const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			listContact: [

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
				const contactsAttract = await fetch("https://playground.4geeks.com/contact/agendas/cesar", {
					method: 'GET'
				})

				const data = await contactsAttract.json()
				setStore({
					listContact: data.contacts
				})
			},

			deleteContact: async (id) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/cesar/contacts/${id}`, {
					method: 'DELETE'
				});

				if (response.ok) {
					const store = getStore();
					const updatedContacts = store.listContact.filter(contact => contact.id !== id);
					setStore({ listContact: updatedContacts });
				} else {
					console.error("Failed to delete contact");
				}
			},

			editContact: async (updatedContacts, id) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/cesar/contacts/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updatedContacts)
				});

				if (response.ok) {
					const store = getStore();
					const updatedList = store.listContact.map(contact => {
						if (contact.id === id) {
							return updatedContacts;
						}
						return contact;
					});
					setStore({ listContact: updatedList });
				}
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

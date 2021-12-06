const contacts = state => state.contacts.items;
const isLoading = state => state.contacts.isLoading;
const filter = state => state.contacts.filter;

export const contactsSelectors = {
  contacts,
  isLoading,
  filter,
};

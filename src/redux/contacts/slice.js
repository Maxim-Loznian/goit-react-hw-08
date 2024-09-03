import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContacts: (state, action) => {
      return action.payload;
    },
    clearContacts: () => {
      return [];
    },
  },
});

export const { setContacts, clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;

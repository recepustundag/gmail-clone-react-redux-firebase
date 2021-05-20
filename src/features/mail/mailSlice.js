import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    modalDialog: false,
    selectedMail: null,
  },
  reducers: {

    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },

    openModalDialog: state => {
      state.modalDialog = true
    },

    closeModalDialog: (state) => {
      state.modalDialog = false
    }
  },
});

export const { openModalDialog, closeModalDialog, selectMail } = mailSlice.actions;

export const selectDetailMail = (state) => state.mail.selectedMail;
export const selectModalDialog = (state) => state.mail.modalDialog;

export default mailSlice.reducer;

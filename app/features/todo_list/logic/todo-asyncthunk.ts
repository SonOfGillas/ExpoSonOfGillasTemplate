import { createAsyncThunk } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
  'counter/fetchIncrement',
  async (amount: number) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(amount)
      }, 1000)
    })
    return amount
  }
);

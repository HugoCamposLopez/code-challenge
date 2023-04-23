import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropertiesI } from "../components/Molecules/CardItem/CardItem";

const initialState: PropertiesI[] =
  [{
    createdAt: "",
    id: "",
    image: "",
    is_redemption: false,
    points: 0,
    product: ""
  }]


export const movementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {
    setMovementesData: (state, action: PayloadAction<PropertiesI[]>) => {
      state.splice(0, state.length, ...action.payload);
    }
  }
})

export const { setMovementesData } = movementsSlice.actions
export default movementsSlice
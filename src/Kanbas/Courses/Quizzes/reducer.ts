import { createSlice } from "@reduxjs/toolkit";
import quizzes from "../../Database/quizzes.json"

export const initialState = {
  quizzes: quizzes,
  quiz: { title: "New Quiz", description:"New Quiz Description", due: "2024-10-10" },
};


const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.quizzes,
      ];
      state.quiz = { title: "New Quiz",  description: "New Quiz Description", due: "2024-10-10" };
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
      );
    },
    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
      state.quiz = { title: "New Quiz",  description: "New Quiz Description", due: "2024-10-10" };
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
  },
});


export const { addQuiz, deleteQuiz,
  updateQuiz, setQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
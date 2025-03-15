import { create } from "zustand";
import { persist } from "zustand/middleware";

const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      fav: [],

      // Add a new note
      addNote: (text, mood) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              id: Date.now(),
              text,
              mood,
              timestamp: Date.now(),
            },
          ],
        })),

      // Edit an existing note
      editNote: (id, updatedText) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, text: updatedText } : note
          ),
        })),

      // Delete a note
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),

      // Add a note to favorites
      addFav: (note) =>
        set((state) => ({
          fav: [...state.fav, note],
        })),

      // Remove a note from favorites
      deleteFav: (id) =>
        set((state) => ({
          fav: state.fav.filter((note) => note.id !== id),
        })),

      // Clear all notes and favorites
      clearNotes: () => set(() => ({ notes: [], fav: [] })),
    }),
    {
      name: "MoodNest_Notes",
      getStorage: () => localStorage,
    }
  )
);

export default useNotesStore;

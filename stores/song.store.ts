import { create } from "zustand";

interface SongState {
  songId?: string;
  setSong: (id?: string) => void;
}

export const useSongStore = create<SongState>((set) => ({
  songId: undefined,
  setSong: (songId?: string) => set(() => ({ songId: songId })),
}));

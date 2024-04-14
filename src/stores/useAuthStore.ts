import { produce } from 'immer';
import { toast } from 'sonner';
import { create } from 'zustand';

import { removeToken } from '@/lib/cookies';
import { User, WithToken } from '@/types/user';

interface AuthState {
  user: (User & WithToken) | null;
  isAuthed: boolean;
  isLoading: boolean;
}

interface AuthAction {
  login: (user: User & WithToken) => void;
  logout: () => void;
  stopLoading: () => void;
}

const useAuthStore = create<AuthState & AuthAction>((set) => ({
  user: null,
  isAuthed: false,
  isLoading: true,
  login: (user) => {
    set(
      produce<AuthState>((state) => {
        state.user = user;
        state.isAuthed = true;
      }),
    );
  },
  logout: () => {
    removeToken();
    set(
      produce<AuthState>((state) => {
        state.user = null;
        state.isAuthed = false;
      }),
    );
    toast.success('Logout successfully!');
  },
  stopLoading: () =>
    set(
      produce<AuthState>((state) => {
        state.isLoading = false;
      }),
    ),
}));

export default useAuthStore;

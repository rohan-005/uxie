import { PlatformType } from '../types/platform';
import { CardTemplateId } from '../types/card';
import { PlatformProfile } from '../types/profile';

const STORAGE_KEY = 'UXIE_POWER_CARD_USER_STATE_V1';

export interface SavedUserState {
  selectedPlatform: PlatformType;
  username: string;
  customAvatar: string | null;
  selectedTemplate: CardTemplateId;
  lastGeneratedProfile: PlatformProfile | null;
  savedAt: string;
}

export function loadSavedUserState(): SavedUserState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedUserState;
  } catch (e) {
    console.warn('Failed to load saved state from localStorage:', e);
    return null;
  }
}

export function saveUserState(state: Partial<SavedUserState>): void {
  try {
    const existing = loadSavedUserState() || {
      selectedPlatform: 'github',
      username: '',
      customAvatar: null,
      selectedTemplate: 'template1',
      lastGeneratedProfile: null,
      savedAt: new Date().toISOString(),
    };

    const updated: SavedUserState = {
      ...existing,
      ...state,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save state to localStorage:', e);
  }
}

export function clearSavedUserState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear saved state from localStorage:', e);
  }
}

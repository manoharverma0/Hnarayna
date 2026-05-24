import { create } from 'zustand';

export type Route = 'home' | 'about' | 'contact' | 'privacy' | 'terms' | 'deletion';

interface RouteState {
  currentRoute: Route;
  setRoute: (route: Route) => void;
}

export function getRouteFromHash(): Route {
  const hash = window.location.hash;
  if (hash === '#/about' || hash === '#about') return 'about';
  if (hash === '#/contact' || hash === '#contact') return 'contact';
  if (hash === '#/privacy' || hash === '#privacy') return 'privacy';
  if (hash === '#/terms' || hash === '#terms') return 'terms';
  if (hash === '#/deletion' || hash === '#deletion') return 'deletion';
  return 'home';
}

function getHashFromRoute(route: Route): string {
  if (route === 'home') return '#/';
  return `#/${route}`;
}

export const useRouteStore = create<RouteState>((set) => ({
  currentRoute: getRouteFromHash(),
  setRoute: (route) => {
    window.location.hash = getHashFromRoute(route);
    set({ currentRoute: route });
  },
}));

// Initialize hash change listener
if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    useRouteStore.setState({ currentRoute: getRouteFromHash() });
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
}

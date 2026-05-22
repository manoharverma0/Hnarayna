import { useMemo } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isLowEnd: boolean;
  dpr: number;
  particleCount: number;
  usePostProcessing: boolean;
}

export function useDevice(): DeviceInfo {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isLowEnd: false,
        dpr: 1,
        particleCount: 20000,
        usePostProcessing: true,
      };
    }

    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || window.innerWidth < 768;
    const isTablet = !isMobile && (window.innerWidth < 1024 || /iPad/i.test(ua));

    // Detect low-end systems
    const hasFewCores = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;
    // @ts-ignore - deviceMemory is standard on Chrome/Opera but not Firefox/Safari
    const hasLowMemory = navigator.deviceMemory !== undefined && navigator.deviceMemory <= 4;

    const isLowEnd = isMobile || hasFewCores || hasLowMemory;

    // Determine performance parameters
    const dpr = isLowEnd ? 1 : Math.min(window.devicePixelRatio, 2);
    const particleCount = isLowEnd ? 12000 : isTablet ? 30000 : 65000;
    const usePostProcessing = !isLowEnd;

    return {
      isMobile,
      isTablet,
      isLowEnd,
      dpr,
      particleCount,
      usePostProcessing,
    };
  }, []);
}

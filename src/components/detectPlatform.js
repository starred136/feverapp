import React, { useEffect, useState } from 'react';
import PWAInstallIos from './PWAInstallIos';
import PWAInstallAndroid from './PWAInstallAndroid';

const DetectPlatform = () => {
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setPlatform('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatform('ios');
    }
  }, []);

  if (platform === 'ios') {
    return <PWAInstallIos />;
  } else if (platform === 'android') {
    return <PWAInstallAndroid />;
  }

  return null;
};

export default DetectPlatform;
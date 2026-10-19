import { asset } from '../../utils/asset';

// Daprel logo files in public/images/brand. "OnDark" variants have white lettering for dark backgrounds.
const LOGO_FILES = {
  icon: 'images/brand/daprel-logo-icon.png',
  horizontal: 'images/brand/daprel-logo-horizontal.png',
  horizontalOnDark: 'images/brand/daprel-logo-horizontal-on-dark.png',
  verticalOnDark: 'images/brand/daprel-logo-vertical-on-dark.png',
  textOnDark: 'images/brand/daprel-logo-text-on-dark.png',
};

export default function BrandLogo({ variant = 'icon', className = 'h-8 w-auto', decorative = false }) {
  return (
    <img
      src={asset(LOGO_FILES[variant])}
      alt={decorative ? '' : 'Daprel'}
      aria-hidden={decorative || undefined}
      className={`object-contain select-none ${className}`}
      draggable="false"
    />
  );
}

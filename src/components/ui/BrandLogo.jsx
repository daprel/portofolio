import { asset } from '../../utils/asset';

// Daprel logo files in public/img. "OnDark" variants have white lettering for dark backgrounds.
const LOGO_FILES = {
  icon: 'img/logo_daprel_icon.png',
  horizontal: 'img/logo_daprel_horizontal_wb.png',
  horizontalOnDark: 'img/logo_daprel_horizontal.png',
  verticalOnDark: 'img/logo_daprel_vertical.png',
  textOnDark: 'img/logo_daprel_text.png',
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

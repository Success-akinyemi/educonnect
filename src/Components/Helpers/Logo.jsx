import LogoImg from '../../assets/image/logo.png';
import LogoWhiteImg from '../../assets/image/logoWhite.png';

function Logo({ style, white }) {
  return (
    <img src={white ? LogoWhiteImg : LogoImg} alt='logo' className={`w-[272.01px] h-[78.31px] ${style}`} />
  )
}

export default Logo;
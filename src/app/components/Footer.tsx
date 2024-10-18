import Image from "next/image";

import logoElo from '../assets/logo_elo.png'
import instaLogo from '../assets/instagram.png'
import facebookLogo from '../assets/facebook.png'
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-gray-900">
      <h4 className="mt-4 text-xl text-white">Redes sociais</h4>

      <section className="flex gap-4 mt-2">
        <div>
          <Link href='https://www.instagram.com/agenciaelo.digital/'>
            <Image src={instaLogo} alt="logo instagram" width={26} />
          </Link>
        </div>

        <div>
          <Link href='https://www.facebook.com/elodigitalagencia'>
            <Image src={facebookLogo} alt="logo facebook" width={26} />
          </Link>
        </div>
      </section>

      <section className="flex items-center">
        <Image src={logoElo} alt="logo" width={56} />
        <h4 className="text-white">ELO DIGITAL</h4>
      </section>
    </div>
  )
}

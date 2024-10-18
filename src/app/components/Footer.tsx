import Image from "next/image";

import logoElo from '../assets/logo_elo.png'
import instaLogo from '../assets/instagram.png'
import facebookLogo from '../assets/facebook.png'
import Link from "next/link";

export default function Footer() {
  return (
    <div id='contact-us' className="flex flex-col items-center justify-center gap-4 bg-gray-900">
      <section className="flex mt-4 items-center justify-between w-[300px] lg:w-[1000px]">
        <div className="flex items-center">
          <Image src={logoElo} alt="logo" width={56} />
          <h4 className="text-white">ELO DIGITAL</h4>
        </div>

        <div className="flex gap-4">
          <Link href='https://www.instagram.com/agenciaelo.digital/'>
            <Image src={instaLogo} alt="logo instagram" width={26} />
          </Link>

          <Link href='https://www.facebook.com/elodigitalagencia'>
            <Image src={facebookLogo} alt="logo facebook" width={27} />
          </Link>
        </div>
      </section>

      <section className="mb-4">
        <span className="text-white">© 2024</span>
      </section>
    </div>
  )
}

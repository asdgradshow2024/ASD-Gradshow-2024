import Image from "next/image";
import { ebGaramond } from "./_app";
import characterBanner from '../public/characters.png'
import SectionNavArrow from "@/components/SectionNavArrow";
import Countdown from "@/components/Countdown";
import dynamic from "next/dynamic";

const CountdownClient = dynamic(() => import('../components/Countdown'), { ssr: false })

const CharacterBanner = () => <Image
  src={characterBanner}
  alt="characters"
  priority
  className="scale-90"
/>

const IconWithText = ({
  iconFileName,
  iconSize = 75,
  children,
  className
}) => (
  <div className={`flex items-center gap-6 ${className} max-w-min`}>
    <Image
      src={iconFileName}
      alt={iconFileName}
      width={iconSize}
      height={iconSize}
    />
    {children}
  </div>
)

export default function Home() {
  const eventDate = new Date(2024, 6, 19); // 19th july 2024 can add time also in subsequent args

  return (
    <main className="flex flex-col items-center">
      <header className="flex flex-col items-center justify-start pt-12 pb-4">
        <h1 className="text-[160px] font-extrabold leading-none">Öh!</h1>
        <p className={`${ebGaramond.className} font-semibold text-2xl -mt-3 mb-4`}>is officially launching in...</p>
        <div className="scale-75 -mb-28"><CountdownClient date={eventDate} /></div>
        <CharacterBanner />
        <SectionNavArrow href="#about"/>
      </header>
      <div id="about" className="bg-bg-alt flex flex-col items-center pt-20 pb-4">
        <div className="flex justify-center items-center gap-12 -mb-16">
          <Image
            src='/oh_logo.png'
            alt="logo"
            width={250}
            height={250}
          />
          <div className="text-center text-base w-2/5 font-semibold">
            <p><span className="font-extrabold">“Öh!”</span> is the ninth iteration of SUTD&apos;s Architecture & Sustainable Design (ASD) Graduation Showcase. Consolidating works by the B.Sc (ASD) students from the Class of 2024, these students showcase their Örigin point, their Ödyssey through, and their Öutlook towards Architecture.</p>
            <br></br>
            <p>Through each project, we invite you, the audience, to go <span className="font-extrabold">“Öh?”</span> at their curious exploration, <span className="font-extrabold">“Öh!”</span> at their surprise discoveries, and <span className="font-extrabold">“ÖÖÖ!!”</span> at their learning journey.</p>
            <br></br>
            <p>Enjoy the exhibit, and we hope you go <span className="font-extrabold">“Öh!”</span> as well!</p>
          </div>
        </div>
        <CharacterBanner />
        <SectionNavArrow href="#launch-night"/>
      </div>
      <div id="launch-night" className="bg-bg-alt2 pt-20">
        <div className="flex justify-center items-start gap-12 mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Image
              src='/rsvp_qr.png'
              alt="rsvp-qr"
              width={160}
              height={160}
            />
            <p className={`${ebGaramond.className} font-semibold text-lg`}>RSVP by 5 July 2024</p>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-start">
            <IconWithText
              iconFileName="/calendar.png"
            >
              <div className="text-nowrap">
                <h2 className="font-bold text-xl">19 JULY 2024</h2>
                <p className="font-semibold italic text-sm">Friday</p>
              </div>
            </IconWithText>
            <IconWithText
              iconFileName="/location.png"
            >
              <div className="text-nowrap">
                <p className="text-sm font-bold">Singapore University of Technology and Design</p>
                <h2 className="font-bold text-xl">Campus Centre, Building 2 Level 1</h2>
                <p className="font-semibold italic text-sm">8 Somapah Rd, Singapore 487372</p>
                <p className="font-semibold italic text-sm">Nearest MRT: Upper Changi (DT34)</p>
              </div>
            </IconWithText>
            <IconWithText
              iconFileName="/clock.png"
            >
              <div className="text-nowrap">
                <h2 className="font-bold text-xl">7 - 10 PM</h2>
                <p className="font-semibold italic text-sm">Dinner will be provided</p>
              </div>
            </IconWithText>
            <IconWithText
              iconFileName="/rsvp.png"
            >
              <div className="text-nowrap">
                <p className="font-semibold italic text-sm">Registration closes on</p>
                <h2 className="font-bold text-xl">5 July 2024</h2>
              </div>
            </IconWithText>
          </div>
        </div>
        <h2 className={`${ebGaramond.className} font-semibold text-3xl text-center mt-8`}>we hope to see you there!</h2>
        <CharacterBanner />
      </div>
    </main>
  );
}

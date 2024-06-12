import Image from "next/image";
import { ebGaramond } from "./_app";
import characterBanner from '../../public/characters.png'
import SectionNavArrow from "@/components/SectionNavArrow";
import dynamic from "next/dynamic";
import MarkupSwitcher from "@/components/MarkupSwitcher";
import { prefix } from "@/utils/prefix";
import InfiniteCarousel from "@/components/InfiniteCarousel";

import calendar from '../../public/calendar.png'
import clock from '../../public/clock.png'
import location from '../../public/location.png'
import rsvp from '../../public/rsvp.png'
const importMap = {
  calendar, clock, location, rsvp
}

const CountdownClient = dynamic(() => import('../components/Countdown'), { ssr: false })

const CharacterBanner = ({ className }) => <Image
  src={characterBanner}
  alt="characters"
  priority
  className={`scale-[.95] ${className}`}
/>

const IconWithText = ({
  iconFileName,
  iconSize = 75,
  children,
}) => (
  <div className="flex items-center gap-6">
    <Image
      src={importMap[iconFileName]}
      alt={iconFileName}
      width={iconSize}
      height={iconSize}
    />
    {children}
  </div>
)

const LaunchNightGridIconMobile = ({
  iconFileName,
  iconSize = 50,
  className
}) => (
  <Image
    className={`${className}`}
    src={`${prefix}${iconFileName}`}
    alt={iconFileName}
    width={iconSize}
    height={iconSize}
  />
)

export default function Home() {
  const eventDate = new Date(2024, 6, 19); // 19th july 2024 can add time also in subsequent args

  return (
    <main className="flex flex-col items-center">
      <header className="w-full flex flex-col items-center justify-start pt-8 pb-2 h-screen md:h-auto md:pt-12 md:pb-4">
        <MarkupSwitcher
          breakpoint="md"
          above={
            <>
              <h1 className="text-[160px] font-extrabold leading-none">Öh!</h1>
              <p className={`${ebGaramond.className} font-semibold text-2xl -mt-3 mb-4`}>is officially launching in...</p>
              <div className="scale-90 -mb-32">
                <CountdownClient date={eventDate} />
              </div>
              <CharacterBanner />
              <SectionNavArrow href="#about"/>
            </>
          }
          below={
            <div className="flex flex-col justify-between items-center h-full w-full pb-12">
              <div className="flex flex-col items-center w-full">
                <h1 className="text-9xl font-extrabold leading-none">Öh!</h1>
                <p className={`${ebGaramond.className} font-semibold text-xl -mt-3 mb-4`}>is officially launching in...</p>
                <div className="scale-[.65]">
                  <CountdownClient date={eventDate} />
                </div>
              </div>
              <div className="flex flex-col items-center grow gap-2">
                <InfiniteCarousel
                  imageUrl={`${prefix}/characters.png`}
                  className="grow"
                />
                <SectionNavArrow href="#about" iconSize={20}/>
              </div>
            </div>
          }
        />
      </header>
      <div id="about" className="bg-bg-alt flex flex-col items-center pt-12 pb-2 md:pt-32 md:pb-4">
        <MarkupSwitcher
          breakpoint="md"
          above={
            <div className="flex justify-center items-center gap-12 -mb-20">
              <Image
                src={`${prefix}/oh_logo.png`}
                alt="logo"
                width={250}
                height={250}
                className="scale-[1.1]"
              />
              <div className="text-center text-base w-2/5 font-semibold">
                <p><span className="font-extrabold">“Öh!”</span> is the ninth iteration of SUTD&apos;s Architecture & Sustainable Design (ASD) Graduation Showcase. Consolidating works by the B.Sc (ASD) students from the Class of 2024, these students showcase their Örigin point, their Ödyssey through, and their Öutlook towards Architecture.</p>
                <br></br>
                <p>Through each project, we invite you, the audience, to go <span className="font-extrabold">“Öh?”</span> at their curious exploration, <span className="font-extrabold">“Öh!”</span> at their surprise discoveries, and <span className="font-extrabold">“ÖÖÖ!!”</span> at their learning journey.</p>
                <br></br>
                <p>Enjoy the exhibit, and we hope you go <span className="font-extrabold">“Öh!”</span> as well!</p>
              </div>
            </div>
          }
          below={
            <div className="flex flex-col items-center mb-4">
              <Image
                src={`${prefix}/oh_logo.png`}
                alt="logo"
                width={175}
                height={175}
              />
              <div className="text-center text-sm font-semibold px-4">
                <p><span className="font-extrabold">“Öh!”</span> is the ninth iteration of SUTD&apos;s Architecture & Sustainable Design (ASD) Graduation Showcase. Consolidating works by the B.Sc (ASD) students from the Class of 2024, these students showcase their Örigin point, their Ödyssey through, and their Öutlook towards Architecture.</p>
                <br></br>
                <p>Through each project, we invite you, the audience, to go <span className="font-extrabold">“Öh?”</span> at their curious exploration, <span className="font-extrabold">“Öh!”</span> at their surprise discoveries, and <span className="font-extrabold">“ÖÖÖ!!”</span> at their learning journey.</p>
                <br></br>
                <p>Enjoy the exhibit, and we hope you go <span className="font-extrabold">“Öh!”</span> as well!</p>
              </div>
            </div>
          }
        />
        <CharacterBanner />
        <MarkupSwitcher
          breakpoint="md"
          above={
            <SectionNavArrow href="#launch-night"/>
          }
          below={
            <SectionNavArrow href="#launch-night" iconSize={20}/>
          }
        />
      </div>
      <div id="launch-night" className="bg-bg-alt2 pt-16 md:pt-24">
        <MarkupSwitcher
          breakpoint="md"
          above={
            <div className="flex justify-center gap-16">
              <div className="flex flex-col">
                <Image
                  src={`${prefix}/rsvp_qr.png`}
                  alt="rsvp-qr"
                  width={160}
                  height={160}
                />
                <p className={`${ebGaramond.className} font-semibold text-lg`}>RSVP by 5 July 2024</p>
              </div>
              <div className="flex flex-col justify-between">
                <IconWithText
                  iconFileName="calendar"
                >
                  <div className="text-nowrap">
                    <h2 className="font-bold text-xl">19 JULY 2024</h2>
                    <p className="font-semibold italic text-sm">Friday</p>
                  </div>
                </IconWithText>
                <IconWithText
                  iconFileName="clock"
                >
                  <div className="text-nowrap">
                    <h2 className="font-bold text-xl">7 - 10 PM</h2>
                    <p className="font-semibold italic text-sm">Dinner will be provided</p>
                  </div>
                </IconWithText>
              </div>
              <div className="flex flex-col justify-between">
                <IconWithText
                  iconFileName="location"
                >
                  <div className="text-nowrap">
                    <p className="text-sm font-bold">Singapore University of Technology and Design</p>
                    <h2 className="font-bold text-xl">Campus Centre, Building 2 Level 1</h2>
                    <p className="font-semibold italic text-sm">8 Somapah Rd, Singapore 487372</p>
                    <p className="font-semibold italic text-sm">Nearest MRT: Upper Changi (DT34)</p>
                  </div>
                </IconWithText>
                <IconWithText
                  iconFileName="rsvp"
                >
                  <div className="text-nowrap">
                    <p className="font-semibold italic text-sm">Registration closes on</p>
                    <h2 className="font-bold text-xl">5 July 2024</h2>
                  </div>
                </IconWithText>
              </div>
            </div>
          }
          below={
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Image
                  src={`${prefix}/rsvp_qr.png`}
                  alt="rsvp-qr"
                  width={120}
                  height={120}
                />
                <p className={`${ebGaramond.className} font-semibold text-lg`}>RSVP by 5 July 2024</p>
              </div>
              <div className="grid grid-rows-4 grid-cols-[max-content_1fr] items-center gap-6">
                <LaunchNightGridIconMobile iconFileName="/calendar.png" />
                <div className="text-nowrap">
                  <h2 className="font-bold text-md">19 JULY 2024</h2>
                  <p className="font-semibold italic text-xs">Friday</p>
                </div>
                <LaunchNightGridIconMobile iconFileName="/location.png" />
                <div className="text-nowrap">
                  <p className="text-xs font-bold">Singapore University of Technology and Design</p>
                  <h2 className="font-bold text-md">Campus Centre, Building 2 Level 1</h2>
                  <p className="font-semibold italic text-xs">8 Somapah Rd, Singapore 487372</p>
                  <p className="font-semibold italic text-xs">Nearest MRT: Upper Changi (DT34)</p>
                </div>
                <LaunchNightGridIconMobile iconFileName="/clock.png" />
                <div className="text-nowrap">
                  <h2 className="font-bold text-md">7 - 10 PM</h2>
                  <p className="font-semibold italic text-xs">Dinner will be provided</p>
                </div>
                <LaunchNightGridIconMobile iconFileName="/rsvp.png" />
                <div className="text-nowrap">
                  <p className="font-semibold italic text-xs">Registration closes on</p>
                  <h2 className="font-bold text-md">5 July 2024</h2>
                </div>
              </div>
            </div>
          }
        />
        <h2 className={`${ebGaramond.className} font-semibold text-center text-xl md:text-3xl mt-4 md:mt-8 md:-mb-16`}>we hope to see you there!</h2>
        <CharacterBanner />
      </div>
    </main>
  );
}

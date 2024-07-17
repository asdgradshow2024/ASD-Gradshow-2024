import Image from "next/image";
import { ebGaramond, nunito, isBeforeEvent } from "./_app";
import characterBanner from '../../public/characters.png'
import SectionNavArrow from "@/components/SectionNavArrow";
import dynamic from "next/dynamic";
import MarkupSwitcher from "@/components/MarkupSwitcher";
import { prefix } from "@/utils/prefix";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import leeSiang from '../../public/tai-lee-siang.jpg';

import calendar from '../../public/calendar.png'
import clock from '../../public/clock.png'
import location from '../../public/location.png'
import rsvp from '../../public/rsvp.png'
const importMap = {
  calendar, clock, location, rsvp
}

import commiteeBanner from '../../public/gradshow-comm.png'
import sarah from '../../public/people/sarah-phua/profile.jpg'
import ryan from '../../public/people/low-ryan/profile.JPG'
import xinze from '../../public/people/chan-xinze/profile.jpg'
import danesh from '../../public/people/danesh-ajith/profile.jpg'
import peiying from '../../public/people/lim-pei-ying/profile.png'
import meijia from '../../public/people/kong-mei-jia/profile.png'
import georgia from '../../public/people/georgia-tan/profile.png'
import isaac from '../../public/people/isaac-soh/profile.JPG'
import riccia from '../../public/people/riccia-lim/profile.jpg'
import justin from '../../public/people/justin-eng/profile.jpg'
import peter from '../../public/peter.png'
import angeline from '../../public/angeline.jpg'
import rayna from '../../public/rayna.jpg'
import kahwee from '../../public/kahwee.png'

const commitee = [
  {
    name: 'Phua Rui Yi Sarah',
    title: 'Director',
    image: sarah
  },
  {
    name: 'Ryan Low',
    title: 'Treasurer',
    image: ryan
  },
  {
    name: 'Chan Xinze',
    title: 'Curation',
    image: xinze
  },
  {
    name: 'Danesh Ajith',
    title: 'Curation',
    image: danesh
  },
  {
    name: 'Lim Pei Ying',
    title: 'Curation',
    image: peiying
  },
  {
    name: 'Kong Mei Jia',
    title: 'Website/Publicity',
    image: meijia
  },
  {
    name: 'Georgia Tan Hui Yi',
    title: 'Publicity',
    image: georgia
  },
  {
    name: 'Soh Zheng Rong',
    title: 'Fabrication',
    image: isaac
  },
  {
    name: 'Lim Yu Wen',
    title: 'Admin/Fabrication',
    image: riccia
  },
  {
    name: 'Justin Eng Hee Yang',
    title: 'Fabrication',
    image: justin
  },
  {
    name: 'Peter Ortner',
    title: 'Faculty Advisor',
    image: peter
  },
  {
    name: 'Angeline Lin',
    title: 'ASD Coordinator',
    image: angeline
  },
  {
    name: 'Rayna Teo',
    title: 'ASD Coordinator',
    image: rayna
  },
  {
    name: 'Lee Kah Wee',
    title: 'ASD Coordinator',
    image: kahwee
  },
]

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
              {isBeforeEvent ?
                <>
                  <h1 className="text-[160px] font-extrabold leading-none">Öh!</h1>
                  <p className={`${ebGaramond.className} font-semibold text-2xl -mt-3 mb-4`}>is officially launching in...</p>
                  <div className="scale-90 -mb-32">
                    <CountdownClient date={eventDate} />
                  </div>
                </> :
                <>
                  <p className={`${ebGaramond.className} font-semibold italic text-2xl`}>the Class of 2024 proudly presents...</p>
                  <Image
                    src={`${prefix}/oh_logo.png`}
                    alt="logo"
                    width={250}
                    height={250}
                    className="scale-[1.1] -mb-32"
                  />
                </>
              }
              <CharacterBanner />
              <SectionNavArrow href="#about"/>
            </>
          }
          below={
            <div className="flex flex-col justify-between items-center h-full w-full pb-12">
              {isBeforeEvent ? 
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-9xl font-extrabold leading-none">Öh!</h1>
                  <p className={`${ebGaramond.className} font-semibold text-xl -mt-3 mb-4`}>is officially launching in...</p>
                  <div className="scale-[.65]">
                    <CountdownClient date={eventDate} />
                  </div>
                </div> : 
                <div className="flex flex-col items-center w-full mb-44">
                  <p className={`${ebGaramond.className} font-semibold italic text-xl`}>the Class of 2024 proudly presents...</p>
                  <Image
                    src={`${prefix}/oh_logo.png`}
                    alt="logo"
                    width={250}
                    height={250}
                    className="-mb-32"
                  />
                </div>
              }
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
            <SectionNavArrow href={isBeforeEvent ? "#launch-night" : "#message"}/>
          }
          below={
            <SectionNavArrow href={isBeforeEvent ? "#launch-night" : "#message"} iconSize={20}/>
          }
        />
      </div>
      {
        isBeforeEvent && (
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
                      <h2 className="font-bold text-md">19 July 2024</h2>
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
            <h2 className={`${ebGaramond.className} font-semibold text-center text-xl md:text-3xl mt-4 md:mt-8 mb-12`}>we hope to see you there!</h2>
            
            <table className={`table-auto mx-auto border-separate border-spacing-0 ${ebGaramond.className} mb-4 md:-mb-16`}>
              <thead>
                <tr className="italic md:text-2xl">
                  <th className="px-2 py-1 md:px-12 md:py-4 border-2 border-r-0 text-center border-text-primary rounded-tl-2xl font-bold">time</th>
                  <th className="px-2 py-1 md:px-12 md:py-4 border-2 border-text-primary text-start rounded-tr-2xl font-bold">programme outline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1 md:px-10 md:py-4 border-l-2 border-b-2 text-center border-text-primary font-semibold md:text-xl">1830</td>
                  <td className={`px-2 py-1 md:px-10 md:py-4 border-x-2 border-b-2 border-text-primary ${nunito.className} italic font-semibold text-sm md:text-lg`}>Registration</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 md:px-10 md:py-4 border-l-2 border-b-2 text-center border-text-primary font-semibold md:text-xl">1915</td>
                  <td className={`px-2 py-1 md:px-10 md:py-4 border-x-2 border-b-2 border-text-primary ${nunito.className} italic font-semibold text-sm md:text-lg`}>Programme Introduction & Book Launch</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 md:px-10 md:py-4 border-l-2 border-b-2 text-center border-text-primary font-semibold md:text-xl">1945</td>
                  <td className={`px-2 py-1 md:px-10 md:py-4 border-x-2 border-b-2 border-text-primary ${nunito.className} italic font-semibold text-sm md:text-lg`}>Free & Easy + Dinner</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 md:px-10 md:py-4 border-l-2 border-b-2 text-center border-text-primary font-semibold md:text-xl rounded-bl-2xl">2200</td>
                  <td className={`px-2 py-1 md:px-10 md:py-4 border-x-2 border-b-2 border-text-primary ${nunito.className} italic font-semibold text-sm md:text-lg rounded-br-2xl`}>End of Event</td>
                </tr>
              </tbody>
            </table>
            
            <CharacterBanner />
            
            <div className="flex justify-center mb-4">
              <MarkupSwitcher
                breakpoint="md"
                above={
                  <SectionNavArrow href="#message"/>
                }
                below={
                  <SectionNavArrow href="#message" iconSize={20}/>
                }
              />
            </div>
          </div>
        )
      }
      <div id="message" className="p-6 py-8 pt-14 md:p-12 md:pt-24">
        <div className={`flex flex-col gap-8 md:gap-16 md:flex-row md:items-start ${nunito.className}`}>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={leeSiang}
              alt="tai-lee-siang"
            />
            <h3 className={`${ebGaramond.className} font-bold text-3xl`}>Tai Lee Siang</h3>
            <div className="text-center font-semibold italic">
              <p>Head of Pillar,</p>
              <p>Architecture and Sustainable Design</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 md:w-11/12">
            <h2 className="uppercase font-extrabold italic text-4xl md:text-5xl">Message</h2>
            <p className="font-bold italic text-lg md:text-xl">To the ASD Class and Gradshow 2024,</p>
            <p className="text-justify text-lg md:text-xl">
              “Architecture is a spirit and not an employment” - the words of Provost Prof KK Phoon rang loudly in my ears when he told me from an outsider’s perspective. I was pleasantly surprised by his insight about this profession. Indeed, architectural education prepares one to be all-rounded and well-equipped with all kinds of hard and soft skills to handle life’s challenges. Architects are trained to draw upon creativity and resources to always come up with innovative solutions and design to meet societal needs and inspire users of built environment. When given any other challenges, architects are ready to use their knowledge to overcome them. This is the true future of architects. Finally, I hope that you have enjoyed the preparation of the Gradshow and more importantly feel inspired to take up your mantle to meet the highest order of challenges in life. I wish you all a great exhibition and encourage you to continue the path less traveled.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <MarkupSwitcher
            breakpoint="md"
            above={
              <SectionNavArrow href="#commitee"/>
            }
            below={
              <SectionNavArrow href="#commitee" iconSize={20}/>
            }
          />
        </div>
      </div>
      <div id="commitee" className="bg-bg-alt2 p-4 md:p-8 pt-12 md:pt-24">
        <div className={`flex flex-col md:flex-row gap-12 ${nunito.className}`}>
          <div className="flex flex-col md:min-w-[35vw]">
            <h1 className="font-extrabold italic uppercase mb-4 text-4xl md:text-5xl">Gradshow Team</h1>
            <p className="font-bold italic text-xl mb-1">Öh! Thanks!</p>
            <p className="font-semibold text-lg">Enjoyed Öh! Gradshow 2024?</p>
            <div className="flex flex-col text-justify gap-6 my-6">
              <p>With dreams of sculpting a representative, inclusive, and enjoyable graduation exhibit, our dedicated committee have worked tirelessly to piece together ASD Gradshow 2024. We hope we have brought some jöy and delight to all who have come to celebrate this significant milestone with us!</p>
              <p>A round of applause for all graduates, and a warm thank you to all faculty and staff for accompanying us on this unforgettable journey!</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <div className="grid grid-rows-6 grid-cols-2 grid-flow-col gap-x-6">
                <p className="col-span-2 font-bold">Gradshow Student Commitee:</p>
                <p>Chan Xinze</p>
                <p>Danesh Ajith</p>
                <p>Georgia Tan</p>
                <p>Isaac Soh</p>
                <p>Justin Eng</p>
                <p>Kong Mei Jia</p>
                <p>Lim Pei Ying</p>
                <p>Low Ryan</p>
                <p>Riccia Lim</p>
                <p>Sarah Phua</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Gradshow Faculty Staff:</p>
                <p>Professor F. Peter Ortner</p>
                <p>Angeline Lin</p>
                <p>Rayna Tan</p>
                <p>Lee Kah Wee</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(125px,_1fr))] gap-4 md:px-8">
            {commitee.map(member => (
              <div className="flex flex-col items-center" key={member.name}>
                <Image src={member.image} alt={member.name}/>
                <p className={`mt-2 ${ebGaramond.className} font-bold text-nowrap`}>{member.name}</p>
                <p className="text-xs font-semibold italic">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 md:mx-auto">
          <Image src={commiteeBanner} alt="commitee"/>
        </div>
      </div>
    </main>
  );
}

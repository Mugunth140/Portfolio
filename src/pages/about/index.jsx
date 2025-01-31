import Aboutstack from "@/components/AboutStack/AboutStack";
import Techstack from "@/components/Techstack/Techstack";
import Transition from "@/components/Transitions/Transition";
import SplitText from "@/components/SplitText/SplitText";
import Btn from "@/components/Btn/btn";
import Head from "next/head";
import Image from "next/image";


export default function About() {

  return (
    <>
      <Head>
        <title>Mugunth | About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition>
        <div className="aboutWrapper">
          <div className="aboutMain">
            <div className="aboutTitle">
              <h1> 
                < SplitText text="A Journey Through My Creative and Technical Endeavors"/>
              </h1>
            </div>

            <div className="aboutContent">
              <aside className="aboutMe">
                <p>
                  My passion lies in transforming ideas into impactful
                  solutions, whether it&apos;s designing sleek, user-centered
                  interfaces or developing robust, scalable applications. I
                  thrive on challenges and continuously explore new technologies
                  and methodologies to enhance my work.
                </p>
                
                <div className="cvBtnContainer">
                <Btn><a id="cv-btn" href="/mugunth_resume.pdf" download="mugunth_resume.pdf"><p>Download CV</p></a></Btn>
                </div>

              </aside>
              <div className="aboutImg">
                <Image
                  src={"/images/about.jpg"}
                  alt={"about-img"}
                  height={400}
                  width={300}
                  // fill
                  quality={100}
                  placeholder="blur"
                  blurDataURL="/images/about-img-blur.jpg"
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                  id="about-image"
                  src="/images/about-img.webp"
                  alt="about-img"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <Techstack />
        <Aboutstack />
      </Transition>
    </>
  );
}

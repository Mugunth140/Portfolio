import Transition from "@/components/Transitions/Transition";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Btn from "@/components/Btn/btn";
import Magnetic from "@/components/Magnetic/magnetic";
import Image from "next/image";
import work from "../api/data";

export default function Work({ isMobile }) {
  const [category, setCategory] = useState("All");
  const [viewStyle, setViewStyle] = useState("default");

  const filteredWork =
    category === "All"
      ? work
      : work.filter((project) =>
          project.type.toLowerCase().includes(category.toLowerCase())
        );

  return (
    <>
      <Head>
        <title>Mugunth | Work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition>
        <div className="work-container">
          <div className="work-main">
            <div className="work-title">
              <h1> Showcasing My Expertise in Design and Development</h1>
            </div>

            <div className="work-bar">
              <div className="filter-buttons">
                <Btn>
                  <div
                    className={`filter-button ${
                      category === "All" ? "active" : ""
                    }`}
                    onClick={() => setCategory("All")}
                  >
                    <p>All</p>
                  </div>
                </Btn>
                <Btn>
                  <div
                    className={`filter-button ${
                      category === "Design" ? "active" : ""
                    }`}
                    onClick={() => setCategory("Design")}
                  >
                    <p>Design</p>
                  </div>
                </Btn>
                <Btn>
                  <div
                    className={`filter-button ${
                      category === "Development" ? "active" : ""
                    }`}
                    onClick={() => setCategory("Development")}
                  >
                    <p>Development</p>
                  </div>
                </Btn>
              </div>
              {!isMobile && (
                <div className="sort-buttons">
                  <Magnetic>
                    <div
                      className={`sort-button ${
                        viewStyle === "default" ? "active" : ""
                      }`}
                      onClick={() => setViewStyle("default")}
                    >
                      <p>D</p>
                    </div>
                  </Magnetic>
                  <Magnetic>
                    <div
                      className={`sort-button ${
                        viewStyle === "compact" ? "active" : ""
                      }`}
                      onClick={() => setViewStyle("compact")}
                    >
                      <p>C</p>
                    </div>
                  </Magnetic>
                </div>
              )}
            </div>

            <div className="work-project-container">
              <div
                className={
                  viewStyle === "compact" ? "project-index" : "index-none"
                }
              >
                <h5>client</h5>
                <h5>year</h5>
                <h5>service</h5>
              </div>
              {filteredWork.map((project, index) => (
                <Link href={`/work/${index}`} key={index} legacyBehavior>
                  <a
                    className={`work-project ${
                      viewStyle === "compact" ? "project-compact" : ""
                    }`}
                  >
                    {viewStyle === "default" && (
                      <div
                        className="project-image"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "0",
                          paddingTop: "67.5%",
                        }}
                      >
                        {/* 67.5% is for the 700/475 ratio */}
                        <Image
                          src={`/images/${project.image}`}
                          alt={`${project.title} image`}
                          layout="fill"
                          objectFit="cover"
                          className="image"
                        />
                      </div>
                    )}
                    <div className="separator"></div>
                    <div className="project-text">
                      <h2>{project.title}</h2>
                      <p className="project-year">{project.year}</p>
                    </div>
                    <div className="project-type">
                      <p>{project.type}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

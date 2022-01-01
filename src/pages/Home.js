import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactBanner from '../components/ContactBanner'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProjectsSection/>
            <ContactBanner/>
        </div>
    )
}

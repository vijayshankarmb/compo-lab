import React from 'react'
import Container from '@/components/common/Container'
import Hero from '@/components/landing/Hero'
import OrbitSection from '@/components/landing/OrbitSection'
import FeaturesSection from '@/components/landing/FeaturesCardsShowcase'
import WorkflowSection from '@/components/landing/WorkflowSection'
import AnimatedBackground from '@/components/common/AnimatedBackground'

const page = () => {
  return (
    <AnimatedBackground>
    <Container>
      <Hero />
      <OrbitSection />
      <FeaturesSection />
      <WorkflowSection />
    </Container>
    </AnimatedBackground>
  )
}

export default page

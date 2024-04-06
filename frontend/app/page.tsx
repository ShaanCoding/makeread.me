import CallToAction from "@/components/Home/CallToAction"
import Demo from "@/components/Home/Demo"
import KeyFeatures from "@/components/Home/KeyFeatures"
import Splashscreen from "@/components/Home/Splashscreen"
import Testimonials from "@/components/Home/Testimonials"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6 px-[5%] pb-8 pt-6 md:py-10">
      <Splashscreen />
      <Demo />
      <KeyFeatures />
      <CallToAction />
      <Testimonials />
    </section>
  )
}

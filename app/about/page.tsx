import Link from "next/link"
import { ArrowLeft, Target, ClipboardList, Heart, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

function AboutPageHeader() {
  return (
    <div className="bg-navy px-4 py-8 border-b border-white/10">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors mb-4 tracking-wide"
          aria-label="Return to VIP UK Betting Sites rankings"
        >
          <ArrowLeft className="w-3 h-3" aria-hidden="true" />
          Back to Rankings
        </Link>
        <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-tight">
          About VIP UK Betting Sites
        </h1>
        <p className="text-white/50 text-sm mt-1.5">
          Independent expert rankings of UKGC-licensed sportsbooks — vipukbettingsites.com
        </p>
      </div>
    </div>
  )
}

function AboutSection({
  icon: Icon,
  title,
  sectionId,
  children,
}: {
  icon: React.ElementType
  title: string
  sectionId: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div
          className="w-7 h-7 bg-primary/12 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <Icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
        </div>
        <h2
          id={sectionId}
          className="font-heading font-bold text-base text-foreground"
        >
          {title}
        </h2>
      </div>
      <div className="px-5 py-4" aria-labelledby={sectionId}>{children}</div>
    </div>
  )
}

const whatWeDoItems = [
  {
    title: "Independent Operator Reviews",
    desc: "Every bookmaker on our list is tested against strict objective criteria before any assessment is published. No operator funds our reviews.",
  },
  {
    title: "Transparent Monthly Rankings",
    desc: "Our expert scores are recalculated each month using a clearly documented methodology. Positions change when operator performance changes.",
  },
  {
    title: "Responsible Gambling Commitment",
    desc: "We promote safe betting practice and provide visible links to UK support services, advice, and self-exclusion tools on every page.",
  },
]

const coreValues = [
  { title: "Transparency",   desc: "Objective criteria, openly documented and applied without exception." },
  { title: "Independence",   desc: "No operator can pay to influence, improve, or maintain their ranking." },
  { title: "Responsibility", desc: "Responsible gambling signposting features on every page we publish." },
  { title: "Accuracy",       desc: "Monthly editorial reviews ensure rankings remain current and correct." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutPageHeader />

      <main className="container mx-auto max-w-3xl px-4 py-8 space-y-4" aria-label="About VIP UK Betting Sites content">

        <AboutSection icon={Target} title="Our Mission" sectionId="vip-about-mission">
          <p className="text-muted-foreground text-sm leading-relaxed">
            VIP UK Betting Sites was created to help UK sports bettors make genuinely informed decisions about UKGC-licensed bookmakers. We provide transparent, independently researched comparisons with no commercial bias in our scoring. Every sportsbook on our list holds an active UKGC licence — player safety is the one condition that cannot be negotiated.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            We are not a bookmaker and we do not accept deposits or place bets. Our sole purpose is to evaluate operators and present expert rankings in a clear, accessible format for the UK betting public.
          </p>
        </AboutSection>

        <AboutSection icon={ClipboardList} title="What We Do" sectionId="vip-about-what-we-do">
          <div className="space-y-3">
            {whatWeDoItems.map((item) => (
              <div key={item.title} className="flex gap-3 border-b border-border last:border-b-0 pb-3 last:pb-0">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AboutSection>

        <AboutSection icon={Heart} title="Our Core Values" sectionId="vip-about-values">
          <div className="grid grid-cols-2 gap-3">
            {coreValues.map((item) => (
              <div key={item.title} className="bg-surface rounded-xl p-3 border border-border">
                <h3 className="font-heading font-bold text-primary text-xs mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AboutSection>

        <div
          className="bg-surface border border-border rounded-xl px-5 py-4"
          role="note"
          aria-label="Legal disclaimer"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> vipukbettingsites.com is an independent comparison site. We are not a licensed bookmaker or gambling operator. All operators we feature hold a current, active UKGC licence. Affiliate links may be present — they do not influence our ratings. Please gamble responsibly.{" "}
            <span className="text-destructive font-semibold">18+</span> only.
          </p>
        </div>

      </main>
    </div>
  )
}

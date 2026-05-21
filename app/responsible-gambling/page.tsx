import Link from "next/link"
import { ArrowLeft, ShieldAlert, CheckCircle, AlertTriangle, HeartHandshake, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"

function RGSection({
  title,
  sectionId,
  icon: Icon,
  iconContainerClass,
  children,
}: {
  title: string
  sectionId: string
  icon: React.ElementType
  iconContainerClass: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${iconContainerClass}`}
          aria-hidden="true"
        >
          <Icon className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
        <h2 id={sectionId} className="font-heading font-bold text-base text-foreground">
          {title}
        </h2>
      </div>
      <div className="px-5 py-4" aria-labelledby={sectionId}>{children}</div>
    </div>
  )
}

const keyPrinciples = [
  {
    num: "1",
    title: "Only Wager What You Can Afford to Lose",
    desc: "Never use funds earmarked for essential living costs — rent, mortgage, bills, or food — to fund betting activity.",
  },
  {
    num: "2",
    title: "Set Firm Limits Before You Start",
    desc: "Decide your session budget and time limit in advance and commit to them. Use your operator's deposit limit tools to enforce your decision.",
  },
  {
    num: "3",
    title: "Never Chase Losses",
    desc: "Accepting a losing session is an essential discipline. Attempting to recover losses through additional bets is one of the most common paths to problem gambling.",
  },
  {
    num: "4",
    title: "Stay in Full Control of Your State",
    desc: "Avoid placing bets when emotionally distressed, fatigued, or under the influence of alcohol or other substances that affect judgement.",
  },
]

const safePractices = [
  "Set a strict monthly betting budget and record it",
  "Activate deposit limits on every account you hold",
  "Maintain a full range of hobbies and social activities",
  "Take regular scheduled breaks from all betting platforms",
  "Review your betting activity and spend at least monthly",
  "Use self-exclusion tools proactively if you feel concerned",
]

const warningSigns = [
  "Betting amounts you cannot comfortably afford",
  "Concealing gambling from family members or close friends",
  "Using credit or borrowed money to fund betting",
  "Neglecting professional, academic, or personal responsibilities",
  "Persistent anxiety, irritability, or restlessness when unable to bet",
  "Repeated unsuccessful attempts to reduce or stop betting",
]

const ukSupportServices = [
  {
    name: "GambleAware",
    url: "https://www.begambleaware.org",
    display: "begambleaware.org",
    desc: "Free, confidential support and advice — 24 hours a day",
  },
  {
    name: "GamCare",
    url: "https://www.gamcare.org.uk",
    display: "gamcare.org.uk",
    desc: "National gambling helpline, live chat, and counselling services",
  },
  {
    name: "GAMSTOP",
    url: "https://www.gamstop.co.uk",
    display: "gamstop.co.uk",
    desc: "UK self-exclusion scheme — blocks access to all UKGC-licensed sites",
  },
  {
    name: "Gambling Therapy",
    url: "https://www.gamblingtherapy.org",
    display: "gamblingtherapy.org",
    desc: "Free international online support and therapy programme",
  },
]

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
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
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 bg-primary/15 border border-primary/25 rounded-lg flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <ShieldAlert className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                  Responsible Gambling
                </h1>
                <p className="text-white/50 text-sm mt-0.5">
                  Betting must always remain a form of entertainment
                </p>
              </div>
            </div>
            <span
              className="text-destructive font-heading font-bold text-sm border border-destructive/50 px-2.5 py-1 bg-destructive/10 rounded flex-shrink-0"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="Responsible Gambling information"
      >

        {/* Critical warning banner */}
        <div
          className="border-2 border-destructive/35 bg-destructive/8 rounded-xl px-5 py-4"
          role="alert"
          aria-label="Important responsible gambling warning"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm text-foreground font-semibold mb-1">Important Warning</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sports betting and gambling can become addictive and cause serious financial, emotional, and personal harm. Never wager money you cannot afford to lose. If gambling is negatively affecting your daily life, seek professional support immediately.
              </p>
              <p className="text-destructive font-heading font-bold text-sm mt-2 uppercase tracking-wide">
                Strictly 18+ Only — No Exceptions
              </p>
            </div>
          </div>
        </div>

        <RGSection
          icon={HeartHandshake}
          iconContainerClass="bg-primary/12 border border-primary/20 text-primary"
          title="What Is Responsible Gambling?"
          sectionId="vip-rg-definition"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Responsible gambling means engaging with sports betting in a conscious, controlled, and sustainable manner. It involves maintaining a clear distinction between entertainment and financial obligation, and using the tools and support resources available to ensure betting never becomes harmful.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            VIP UK Betting Sites only features UKGC-licensed operators who are legally required to provide comprehensive responsible gambling tools — including deposit limits, session timers, reality checks, and self-exclusion options — on their platforms.
          </p>
        </RGSection>

        {/* Key principles */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2
              id="vip-rg-principles"
              className="font-heading font-bold text-base text-foreground"
            >
              Four Core Principles of Responsible Betting
            </h2>
          </div>
          <div
            className="divide-y divide-border"
            aria-labelledby="vip-rg-principles"
            role="list"
          >
            {keyPrinciples.map((item) => (
              <div key={item.num} className="flex gap-4 px-5 py-4" role="listitem">
                <div
                  className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 rounded-lg"
                  aria-hidden="true"
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safe practices / Warning signs grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-5 py-4">
              <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
              <h2
                id="vip-rg-safe"
                className="font-heading font-bold text-sm text-foreground"
              >
                Safe Practices
              </h2>
            </div>
            <ul
              className="px-5 py-4 space-y-2.5"
              aria-labelledby="vip-rg-safe"
            >
              {safePractices.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold text-base leading-none mt-0.5" aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-destructive/25 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-destructive/25 px-5 py-4 bg-destructive/8">
              <AlertTriangle className="w-4 h-4 text-destructive" aria-hidden="true" />
              <h2
                id="vip-rg-warning"
                className="font-heading font-bold text-sm text-destructive"
              >
                Warning Signs
              </h2>
            </div>
            <ul
              className="px-5 py-4 space-y-2.5"
              aria-labelledby="vip-rg-warning"
            >
              {warningSigns.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive font-bold text-base leading-none mt-0.5" aria-hidden="true">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* UK support services */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2
              id="vip-rg-support"
              className="font-heading font-bold text-base text-foreground"
            >
              UK Free Support Services
            </h2>
          </div>
          <div
            className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border"
            aria-labelledby="vip-rg-support"
            role="list"
          >
            {ukSupportServices.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-4 hover:bg-surface transition-colors group"
                aria-label={`Visit ${org.name} at ${org.display} — opens in new tab`}
                role="listitem"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-heading font-bold text-foreground text-sm">{org.name}</div>
                  <ExternalLink
                    className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-primary text-xs font-medium">{org.display}</div>
                <div className="text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Under 18 notice */}
        <div
          className="bg-navy border border-primary/15 text-foreground text-center py-4 rounded-xl"
          role="note"
          aria-label="Age restriction notice"
        >
          <span className="font-heading font-extrabold text-sm uppercase tracking-widest text-foreground">
            Under 18s Are Strictly Prohibited From Gambling
          </span>
        </div>

      </main>
    </div>
  )
}
